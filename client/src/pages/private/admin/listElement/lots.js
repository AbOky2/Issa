import React, { useState, useEffect } from "react";
import { Grid } from '@material-ui/core'
import Lot from '../../../../assets/img/lot.png'
import './lots.css';
import withAuth from '../../../../lib/withAuth'
import { AdminContentWrapper } from '../../../../components/wrapper'
import { ReactComponent as LotsIcon } from '../../../../assets/img/svg/lots.svg'
import DragAndDrop from '../../../../components/other/dragAndDrop'
import CardComp, { AddCard } from '../../../../components/private/admin/card'
import Modal from '../../../../components/elements/modal'
import FormGenerator, { FormValidator } from '../../../../components/formElement/generator';
import forData from './data'
import { getProperties, deletePropertie, updatePropertie, addPropertie, swapPosition } from '../../../../services/adminService'

const defaultAddNew = {
    _id: null,
    picture: Lot,
    name: 'aaaa-',
    description: 'bbbb',
    dimension: 'cccc',
    address: 'dddd',
    nb_available: 1,
    location_date: 'e',
    position: 5
}
const ADD = 'add'
const UPDATE = 'update'

const Dashboard = () => {
    const [state, setState] = useState({
        openModal: false,
        modalAction: null,
        properties: [],
        errors: [],
        ...defaultAddNew
    })
    useEffect(() => {
        (async () => {
            try {
                const { list } = await getProperties();
                handleChange('properties', list);
            } catch (error) {

            }
        })()

    }, [])
    const handleChange = (name, value) => setState({ ...state, [name]: value });
    const toggleState = name => handleChange(name, !state[name]);
    const resetState = () => setState({ ...state, openModal: false, ...defaultAddNew });
    const handleClose = () => {
        resetState();
        toggleState('openModal');
    }
    const handleRemovePropertie = async _id => {
        let newData = [],
            properties = state.properties;

        if (!_id)
            return;

        if ((newData = properties.filter(e => e._id != _id)).length === properties.length)
            return;

        if (!window.confirm('Supprimer ?'))
            return;
        try {
            (await deletePropertie(_id));
            handleChange('properties', newData);
        } catch (err) {
            console.error(`=> ${err}`);
        }
    }
    const handleUpdatePropertie = _id => {
        const elem = state.properties.find(e => e._id === _id);

        if (!elem)
            return;
        setState({ ...state, ...elem, modalAction: UPDATE, errors: [], openModal: true });
    }

    const handleAddPropertie = () => {
        setState({ ...state, ...defaultAddNew, modalAction: ADD, errors: [], openModal: true });
    }
    const onClick = async () => {
        let errors = FormValidator({ fields: forData.createLot.field, state }),
            leanData = {},
            properties;

        if (errors.length)
            handleChange('errors', errors);

        try {
            Object.keys(defaultAddNew).forEach(e => e != '_id' ? leanData[e] = state[e] : '');
            if (state.modalAction === ADD) {
                properties = state.properties;
                leanData.position = properties.length + 1;
                const { propertie } = await addPropertie(leanData);
                properties.push(propertie);
                handleChange('properties', properties);

            }
            else if (state.modalAction === UPDATE) {
                const res = await updatePropertie(state._id, leanData);
            }

            resetState();
        } catch (err) {
        }
    }
    const handleDrop = async (data) => {
        let elems = {},
            properties = state.properties,
            current = null;

        data.forEach(({ _id }, i) => {
            if (_id != properties[i]._id) {
                current = !current ? 'first' : 'second'
                elems[current] = { _id, position: i + 1 }
            }
        })
        const res = await swapPosition(elems)
    }

    return (
        <AdminContentWrapper className='lots'>
            <Modal
                openModal={state.openModal}
                onClose={handleClose}
                onClick={onClick}
            >
                <Grid container item xs={12} justify="flex-start" toto='toto'>
                    <FormGenerator
                        fields={forData.createLot.field}
                        state={state}
                        onChange={handleChange}
                        settings={forData.createLot.settings}
                    />
                </Grid>
            </Modal>
            <Grid container direction="row" justify="space-between" alignItems='center' className='spacing header'>
                <Grid item container xs={6} justify="flex-start">
                    <Grid item container alignItems='center'>
                        <Grid><span className='header-icon'><LotsIcon /></span></Grid>
                        <Grid><h1>Lots Nexity</h1></Grid>
                    </Grid>
                </Grid>
                <Grid container item xs={6} justify="flex-end">
                    <Grid item container alignItems='center' justify="flex-end">
                        <div className='pointer export'>
                            <span className='icon icon-export'></span>
                            <span className='header-btn'>
                                reload
                            </span>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item className='content-container'>
                <DragAndDrop
                    data={state.properties}
                    CardComp={CardComp}
                    events={{ handleDrop, handleRemovePropertie, handleUpdatePropertie }}
                    addComp={<AddCard onClick={handleAddPropertie} />}
                />
            </Grid>
        </AdminContentWrapper>
    )
}

export default withAuth(Dashboard)