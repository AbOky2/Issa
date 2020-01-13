import React, { useState, useEffect } from "react";
import { Grid } from '@material-ui/core'
import withAuth from '../../../lib/withAuth'
import { getZones, addZone, deleteZone, addAgency, deleteAgency } from '../../../services/adminService'
import Btn from '../../../components/elements/btn'
import Modal from '../../../components/elements/modal'
import FormGenerator, { FormValidator, LeanForm } from '../../../components/formElement/generator';
import { AdminContentWrapper } from '../../../components/wrapper'
import IconNexity from '../../../assets/img/icons/nexity.png'
import forData from './listElement/zoneData'
import './listElement/index.css'

const RowCom = ({ name, handleDelete, handleUpdate }) => (
    <Grid container alignContent='center' className='text-center pointer row-container'>
        <Grid item className='name-container'>
            {name}
        </Grid>
        <Grid item container className='actions-container fullheight'>
            <Grid item onClick={handleUpdate}>
                i
            </Grid>
            <Grid item onClick={handleDelete}>
                x
            </Grid>
        </Grid>
    </Grid>
)

const defaultFormState = {
    openModal: false,
    openAgenceModal: false,
    name: null,
    address: null,
    email: null,
    errors: [],
}

const Dashboard = () => {
    const [state, setState] = useState({
        id: null,
        zoneList: [],
        openModal: false,
        openAgenceModal: false,
        name: null,
        address: null,
        email: null,
        errors: [],
    })
    useEffect(() => {
        (async () => {
            console.log('----')
            const { list = [] } = await getZones();
            handleChange('zoneList', list)
        })()
    }, [])
    const zoneList = state.zoneList;
    const fields = state.openModal ? forData.createZone.fields : forData.createAgency.fields
    const toggleState = name => handleChange(name, !state[name]);

    const handleChange = (name, value) => setState({ ...state, [name]: value });
    const handleRequest = async (request, data) => {
        try {
            const { list } = await request(data);
            if (list)
                setState({ ...state, ...defaultFormState, zoneList: list });
            else
                handleModalClose();
        } catch (err) {
        }
    }

    const currentZone = zoneList.find(elem => elem._id == state.id) || {};
    const handleModalClose = () => setState({ ...state, ...defaultFormState });

    const onClick = () => {
        let errors = FormValidator({ fields, state });

        if (errors.length)
            return handleChange('errors', errors);
        handleChange('errors', []);
        handleRequest(state.openModal ? addZone : addAgency, LeanForm({ state, fields }));
    };
    const handleDelete = (id, name = 'zone') => window.confirm('Suprimer') && handleRequest(name == 'zone' ? deleteZone : deleteAgency, id);
    const handleUpdate = (id, name = 'zone') => handleRequest(name == 'zone' ? deleteZone : deleteAgency, id);

    console.log(currentZone)
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
                    openModal={state.openModal || state.openAgenceModal}
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
                    <Grid><Btn text='Ajouter une zone' className='add-btn' onClick={() => toggleState('openModal')} /></Grid>
                    <Grid className='zone-list-container list-container'>
                        {zoneList.map(({ name, _id }, i) => (
                            <Grid item xs={12} key={i} className={`list ${_id === state.id ? 'active' : ''}`} onClick={() => handleChange('id', _id)}>
                                <RowCom
                                    name={name}
                                    handleUpdate={() => handleUpdate(_id)}
                                    handleDelete={() => handleDelete(_id)}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                {state.id && <Grid item xs={6}>
                    <Grid><Btn text='Ajouter une agence' className='add-btn' onClick={() => toggleState('openAgenceModal')} /></Grid>
                    <Grid className='list-container'>
                        {currentZone.agencies && currentZone.agencies.map(({ name, _id }, i) => (
                            <Grid item xs={12} key={i} className='list'>
                                <RowCom
                                    name={name}
                                    handleUpdate={() => handleUpdate(_id, 'agency')}
                                    handleDelete={() => handleDelete(_id, 'agency')} />
                            </Grid>
                        ))}
                    </Grid>

                </Grid>}
            </Grid>
        </AdminContentWrapper>
    )
}

export default withAuth(Dashboard)
