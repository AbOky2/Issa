import React, { useState, useEffect } from "react";
import { Grid } from '@material-ui/core'
import withAuth from '../../../lib/withAuth'
import { getZones, addZone, updateZone, deleteZone, addAgency, updateAgency, deleteAgency } from '../../../services/adminService'
import Btn from '../../../components/elements/btn'
import Modal from '../../../components/elements/modal'
import FormGenerator, { FormValidator, LeanForm } from '../../../components/formElement/generator';
import { AdminContentWrapper } from '../../../components/wrapper'
import IconNexity from '../../../assets/img/icons/nexity.png'
import EditIcon from '../../../assets/img/svg/pen.svg'
import TrashIcon from '../../../assets/img/svg/trash.svg'
import forData from './listElement/zoneData'
import './listElement/index.css'

const RowCom = ({ name, handleDelete, handleUpdate }) => (
    <Grid container alignContent='center' className='text-center pointer row-container'>
        <Grid item className='name-container'>
            {name}
        </Grid>
        <Grid item container className='actions-container fullheight'>
            <Grid item onClick={handleUpdate}>
                <img src={EditIcon} />
            </Grid>
            <Grid item onClick={handleDelete}>
                <img src={TrashIcon} />
            </Grid>
        </Grid>
    </Grid>
)

const zoneModalType = 'zone'
const agencyModalType = 'agency'

const add = 'add'
const update = 'update'

const defaultFormState = {
    name: null,
    address: null,
    email: null,
    errors: [],
    openModal: false,
    modalType: zoneModalType,
    formRequestAction: add
}

const Dashboard = () => {
    const [state, setState] = useState({
        ...defaultFormState,
        id: null,
        zoneList: [],
    })
    useEffect(() => {
        (async () => {
            let res, list;

            if ((res = await getZones()) && (list = res.list) && list.length)
                handleChanges({ zoneList: list, id: list[0]._id })
        })()
    }, [])
    const zoneList = state.zoneList;
    const fields = state.modalType == zoneModalType ? forData.createZone.fields : forData.createAgency.fields;
    // const toggleState = name => handleChange(name, !state[name]);

    const handleChange = (name, value) => setState({ ...state, [name]: value });
    const handleChanges = (obj) => setState(Object.entries(obj).map(([name, value]) => ({ [name]: value })).reduce((total, elem) => ({ ...total, ...elem }), state));
    const handleRequest = async (request, ...args) => {
        if (!request)
            return;
        const list = await request(...args);

        if (list && list.list)
            setState({ ...state, ...defaultFormState, zoneList: list.list });
        else
            handleModalClose();
    }

    const currentZone = zoneList.find(elem => elem._id == state.id) || {};
    const handleModalClose = () => setState({ ...state, ...defaultFormState });

    const onClick = () => {
        let errors = FormValidator({ fields, state });
        let request = null;

        if (errors.length)
            return handleChange('errors', errors);
        handleChange('errors', []);
        const leanData = LeanForm({ state, fields });
        let params = [];

        if (state.formRequestAction === add)
            request = state.modalType === zoneModalType ? addZone : addAgency;
        else if (state.formRequestAction === update) {
            request = state.modalType === zoneModalType ? updateZone : updateAgency;
            params.push(state.id);
        }
        params.push(leanData);
        handleRequest(request, ...params);
    };
    const handleDelete = (id, name = zoneModalType) => window.confirm('Suprimer') && handleRequest(name == zoneModalType ? deleteZone : deleteAgency, id);
    const triggerEdit = (id, name = zoneModalType) => {
        const data = zoneList.find(e => e._id === id);
        if (!data)
            return;
        setState({ ...state, ...data, formRequestAction: update, openModal: true })
    }

    return (
        <AdminContentWrapper>
            <Grid container direction="row" justify="space-between" alignItems='center' className='spacing header'>
                <Grid item container xs={6} justify="flex-start">
                    <Grid item container alignItems='center'>
                        <Grid><span className='header-icon'><img src={IconNexity} alt='Nexity' /></span></Grid>
                        <Grid><h1>Agence Nexity</h1></Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container className='agencies'>
                <Modal
                    openModal={state.openModal}
                    onClose={handleModalClose}
                    onClick={onClick}
                >
                    <Grid container item xs={12} justify="flex-start">
                        <FormGenerator
                            fields={fields}
                            state={state}
                            onChange={handleChange}
                            settings={forData.settings}
                        />
                    </Grid>
                </Modal>
                <Grid item xs={6}>
                    <Grid><Btn text='Ajouter une zone' className='add-btn' onClick={() => handleChanges({ openModal: true, modalType: zoneModalType, formRequestAction: add })} /></Grid>
                    <Grid className='zone-list-container list-container'>
                        {zoneList.map(({ name, _id }, i) => (
                            <Grid item xs={12} key={i} className={`list ${_id === state.id ? 'active' : ''}`} onClick={(e) => _id !== state.id && handleChange('id', _id)}>
                                <RowCom
                                    name={name}
                                    handleUpdate={(e) => triggerEdit(_id)}
                                    handleDelete={(e) => handleDelete(_id)}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                {state.id && <Grid item xs={6}>
                    <Grid><Btn text='Ajouter une agence' className='add-btn' onClick={() => handleChanges({ openModal: true, modalType: agencyModalType, formRequestAction: add })} /></Grid>
                    <Grid className='list-container'>
                        {currentZone.agencies && currentZone.agencies.map(({ name, _id }, i) => (
                            <Grid item xs={12} key={i} className='list'>
                                <RowCom
                                    name={name}
                                    handleUpdate={(e) => { e.stopPropagation(); triggerEdit(_id, agencyModalType) }}
                                    handleDelete={(e) => { e.stopPropagation(); handleDelete(_id, agencyModalType) }}
                                />
                            </Grid>
                        ))}
                    </Grid>

                </Grid>}
            </Grid>
        </AdminContentWrapper>
    )
}

export default withAuth(Dashboard)
