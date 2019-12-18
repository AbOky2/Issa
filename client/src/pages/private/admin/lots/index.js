import React, { useState } from "react";
import { Grid } from '@material-ui/core'
import Lot from '../../../../assets/img/lot.png'
import './lots.css';
import withAuth from '../../../../lib/withAuth'
import { AdminContentWrapper } from '../../../../components/wrapper'
import { ReactComponent as LotsIcon } from '../../../../assets/img/svg/lots.svg'
import DragAndDrop from '../../../../components/other/dragAndDrop'
import CardComp, { AddCard } from '../../../../components/private/admin/card'
import Modal from '../../../../components/elements/modal'
import FormGenerator, { FormValidator, LeanForm } from '../../../../components/formElement/generator';
import forData from './data'

const defaultAddNew = {
    img: null,
    name: null,
    slogan: null,
    dimension: null,
    address: null,
    nb_available_appart: null,
    location_date: null,
    position: null
}
const Dashboard = () => {
    const [state, setState] = useState({
        openModal: true,
        lots: [
            {
                img: Lot,
                name: 'OVATION MAGELLAN 0',
                slogan: 'Programme neuf à Colombs: Appartements neufs à vendre',
                dimension: '3 à 5 pièces - 62m² à 117m²',
                address: 'Colombes - 97000',
                nb_available_appart: 35,
                location_date: '2ème trimestre 2021',
                position: 0
            },
            {
                img: Lot,
                name: 'OVATION MAGELLAN 1',
                slogan: 'Programme neuf à Colombs: Appartements neufs à vendre',
                dimension: '3 à 5 pièces - 62m² à 117m²',
                address: 'Colombes - 97000',
                nb_available_appart: 7,
                location_date: '2ème trimestre 2021',
                position: 1
            },
            {
                img: Lot,
                name: 'OVATION MAGELLAN 2',
                slogan: 'Programme neuf à Colombs: Appartements neufs à vendre',
                dimension: '3 à 5 pièces - 62m² à 117m²',
                address: 'Colombes - 97000',
                nb_available_appart: 0,
                location_date: '2ème trimestre 2021',
                position: 2
            },
            {
                img: Lot,
                name: 'OVATION MAGELLAN 4',
                slogan: 'Programme neuf à Colombs: Appartements neufs à vendre',
                dimension: '3 à 5 pièces - 62m² à 117m²',
                address: 'Colombes - 97000',
                nb_available_appart: 7,
                location_date: '2ème trimestre 2021',
                position: 4
            },
        ],
        errors: [],
        ...defaultAddNew
    })

    const handleChange = (name, value) => setState({ ...state, [name]: value });
    const toggleState = name => () => handleChange(name, !state[name]);
    const resetState = () => setState({ ...state, ...defaultAddNew });
    const handleClose = () => {
        resetState();
        toggleState('openModal')();
    }
    const onClick = () => {
        const errors = FormValidator({ fields: forData.createLot.field, state });
        if (errors.length) {
            handleChange('errors', errors)
            return;
        }
        resetState();
    }
    return (
        <AdminContentWrapper className='lots'>
            <Modal
                openModal={state.openModal}
                onClose={handleClose}
                onClick={onClick}
            >
                <Grid container xs={12} justify="flex-start" toto='toto'>
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
                    data={state.lots}
                    CardComp={CardComp}
                    addComp={<AddCard onClick={toggleState('openModal')} />}
                />
            </Grid>
        </AdminContentWrapper>

        // </WithAuth> 
    )
}

export default withAuth(Dashboard)