import React, { useState, useEffect } from "react";
import { Grid } from '@material-ui/core'
import withAuth from '../../../../lib/withAuth'
import { getZones, addZone, deleteZone, addAgency, deleteAgency } from '../../../../services/adminService'
import Btn from '../../../../components/elements/btn'
import Modal from '../../../../components/elements/modal'
import FormGenerator, { FormValidator, LeanForm } from '../../../../components/formElement/generator';
import './index.css'
import forData from './zoneData'

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

const Dashboard = () => {
    const [state, setState] = useState({
        id: null,
        zoneList: [
            { _id: 'fsddsf', name: 'toto', agencies: [{ id: 'sdfsd', name: 'totoChild' }] },
            { _id: 'fdsfdsddsf', name: 'toto1', agencies: [{ id: 'sdfdsfsd', name: 'toto1Child' }] },
            { _id: 'fsddfdsdsfdsf', name: 'toto2', agencies: [{ id: 'sdfsdfsd', name: 'toto2Child' }] },
            { _id: 'fdsffsddsddsf', name: 'toto3', agencies: [{ id: 'sdfdsfdsfsdsd', name: 'toto3Child' }] },
        ],
        openModal: false,
        openAgenceModal: false,
        name: null,
        address: null,
        email: null,
        errors: [],

    })
    useEffect(() => {
        (async () => {
            // const { list = [] } = await getZones();
            // handleChange('zoneList', list)
        })()
    }, [])
    const zoneList = state.zoneList;
    const fields = state.openModal ? forData.createZone.fields : forData.createAgency.fields
    const toggleState = name => handleChange(name, !state[name]);

    const handleChange = (name, value) => setState({ ...state, [name]: value });
    const handleRequest = async (request, data) => {
        try {
            const { list } = await request(data);
            handleModalClose();
            if (list && list.length)
                handleChange('zoneList', list);
        } catch (err) {
        }
    }

    const currentZone = zoneList.find(elem => elem._id == state.id) || {};
    const handleModalClose = () => setState({ ...state, openModal: false, openAgenceModal: false });

    const onClick = () => {
        let errors = FormValidator({ fields, state });

        if (errors.length)
            return handleChange('errors', errors);
        handleChange('errors', []);
        handleRequest(state.openModal ? addZone : addAgency, LeanForm({ state, fields }));
    };
    const handleDelete = (id, name = 'zone') => handleRequest(name == 'zone' ? deleteZone : deleteAgency, id);
    const handleUpdate = (id, name = 'zone') => handleRequest(name == 'zone' ? deleteZone : deleteAgency, id);

    return (
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
                <Grid><Btn text='Ajouter une zone' onClick={() => toggleState('openModal')} /></Grid>
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
            {state.id && <Grid item xs={6}>
                <Grid><Btn text='Ajouter une agence' onClick={() => toggleState('openAgenceModal')} /></Grid>
                {currentZone.agencies && currentZone.agencies.map(({ name, _id }, i) => (
                    <Grid item xs={12} key={i} className='list'>
                        <RowCom
                            name={name}
                            handleUpdate={() => handleUpdate(_id, 'agency')} />
                        handleDelete={() => handleDelete(_id, 'agency')} />
                    </Grid>
                ))}
            </Grid>}
        </Grid>
    )
}

export default withAuth(Dashboard)
