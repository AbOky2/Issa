import React, { useState } from "react";
import { Grid } from '@material-ui/core';
import Logo from '../../../../assets/img/picture.png'
import './profile.css'
import CustomTable from '../../../elements/table'
import Modal from '../../../elements/modal'
import Btn from '../../../elements/btn'
import { dateToYear } from '../../../../utils/converAndCheck'

const Variables = {
    'school': 'École',
}

export default ({ authUser }) => {
    const { picture, firstName = '', lastName = '', age = '', student_status } = authUser;
    const [state, setState] = useState({
        openModal: false
    });
    let tableData = [
        ["Status", student_status]
    ];
    Object.entries(Variables).forEach(([name, value]) => authUser[name] ? tableData.push([authUser[name], value]) : '');

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
                <img src={picture} alt='User' />
                <h1 className='bold'>{`${firstName} ${lastName}`}</h1>
                <p style={{ minWidth: '100%' }}>{dateToYear(age)}</p>
            </Grid>
            <CustomTable data={tableData} />
            <Btn onClick={() => handleChange('openModal', true)} text='Modifier mon profile' grayColor auto={true} />
            <Modal openModal={state.openModal} onClose={onClose} onClick={onClick}>
                <p>Modifier mon profile</p>
            </Modal>
        </Grid>
    )
}

