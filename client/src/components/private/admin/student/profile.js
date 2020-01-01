import React, { useState } from "react";
import { Grid } from '@material-ui/core';
import Logo from '../../../../assets/img/picture.png'
import './profile.css'
import CustomTable from '../../../elements/table'
import Modal from '../../../elements/modal'
import Btn from '../../../elements/btn'

export default ({ authUser: { firstName = '', lastName = '', age = '', school = '' } = {} }) => {
    const [state, setState] = useState({
        openModal: false
    })
    const tableData = [
        ['École', school],
        ['Profession', 'Chef de projet'],
        ["Période d'essai", <span className='icon-valide'></span>]
    ];
    const onClick = () => {
        console.log('onClick')

        handleChange('openModal', false);
    }
    const onClose = () => {
        console.log('onClose')

        handleChange('openModal', false);
    }
    const handleChange = (name, value) => setState({ ...state, [name]: value });

    return (
        <Grid container>
            <Grid item className='profile-heading-container'>
                <img src={Logo} alt='User' />
                <h1 className='bold'>{`${firstName} ${lastName}`}</h1>
                <p style={{ minWidth: '100vw' }}>{age}</p>
            </Grid>
            <CustomTable data={tableData} />
            <Btn onClick={() => handleChange('openModal', true)} text='Modifier mon profile' grayColor auto={true} />
            <Modal openModal={state.openModal} onClose={onClose} onClick={onClick}>
                <p>Modifier mon profile</p>
            </Modal>
        </Grid>
    )
}

