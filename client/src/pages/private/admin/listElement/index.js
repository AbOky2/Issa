import React, { useState, useEffect } from "react";
import { Grid } from '@material-ui/core'
import './index.css';
import { AdminContentWrapper } from '../../../../components/wrapper'
import DragAndDrop from '../../../../components/other/dragAndDrop'
import { AddCard } from '../../../../components/private/admin/card'
import Modal from '../../../../components/elements/modal'
import FormGenerator, { FormValidator } from '../../../../components/formElement/generator';

const ADD = 'add';
const UPDATE = 'update';

const Dashboard = ({ defaultAddNew, getData, addData, updateData, deleteData, swapPosition, CardComp, forData = {}, Header }) => {
    const [state, setState] = useState({
        openModal: false,
        modalAction: null,
        datas: [],
        errors: [],
        ...defaultAddNew
    })
    useEffect(() => {
        (async () => {
            try {
                const { list } = await getData();
                handleChange('datas', list);
            } catch (error) {
                console.error(error)
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
    const handleRemove = async _id => {
        let newData = [],
            datas = state.datas;

        if (!_id)
            return;

        if ((newData = datas.filter(e => e._id != _id)).length === datas.length)
            return;

        if (!window.confirm('Supprimer ?'))
            return;
        try {
            (await deleteData(_id));
            handleChange('datas', newData);
        } catch (err) {
            console.error(`=> ${err}`);
        }
    }
    const handleUpdate = _id => {
        const elem = state.datas.find(e => e._id === _id);

        if (!elem)
            return;
        setState({ ...state, ...elem, modalAction: UPDATE, errors: [], openModal: true });
    }

    const handleAdd = () => {
        setState({ ...state, ...defaultAddNew, modalAction: ADD, errors: [], openModal: true });
    }
    const onClick = async () => {
        let errors = FormValidator({ fields: forData.field, state }),
            leanData = {},
            datas;

        if (errors.length)
            handleChange('errors', errors);

        try {
            Object.keys(defaultAddNew).forEach(e => e != '_id' ? leanData[e] = state[e] : '');
            if (state.modalAction === ADD) {
                datas = state.datas;
                leanData.position = datas.length + 1;
                const { elem } = await addData(leanData);
                datas.push(elem);
                handleChange('datas', datas);

            }
            else if (state.modalAction === UPDATE) {
                const res = await updateData(state._id, leanData);
            }

            resetState();
        } catch (err) {
        }
    }
    const handleDrop = async (data) => {
        let elems = {},
            datas = state.datas,
            current = null;

        data.forEach(({ _id }, i) => {
            if (_id != datas[i]._id) {
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
                <Grid container item xs={12} justify="flex-start">
                    <FormGenerator
                        fields={forData.field}
                        state={state}
                        onChange={handleChange}
                        settings={forData.settings}
                    />
                </Grid>
            </Modal>
            <Grid container direction="row" justify="space-between" alignItems='center' className='spacing header'>
                <Grid item container xs={6} justify="flex-start">
                    <Grid item container alignItems='center'>
                        <Header />
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
                    data={state.datas}
                    CardComp={CardComp}
                    events={{ handleDrop, handleRemove, handleUpdate }}
                    addComp={<AddCard onClick={handleAdd} />}
                />
            </Grid>
        </AdminContentWrapper>
    )
}

export default Dashboard