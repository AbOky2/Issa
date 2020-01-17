import React, { useState } from "react";
import { Grid } from '@material-ui/core';
import Logo from '../../../../../assets/img/picture.png'
import CustomTable from '../../../../elements/table'
import Modal from '../../../../elements/modal'
import Btn from '../../../../elements/btn'
import { dateToYear } from '../../../../../utils/converAndCheck'
import FormGenerator, { FormValidator, LeanForm } from '../../../../../components/formElement/generator';
import { updateProfile } from '../../../../../services/studentService'
import { useAuth } from "../../../../../context/auth";

import profileData from './profileData'

import './index.css'

const Variables = {
    'school': 'École',
}

export default ({ authUser }) => {
    const { picture, firstName = '', lastName = '', age = '', student_status } = authUser;
    const [state, setState] = useState({
        openModal: true,
        errors: [],
        ...authUser
    });
    const { setAuthTokens, setAuthUser } = useAuth();

    let tableData = [
        ["Status", student_status]
    ];
    Object.entries(Variables).forEach(([key, varName]) => authUser[key] ? tableData.push([varName, state[key]]) : '');

    const onClick = () => {
        const errors = FormValidator({ fields: profileData.field, state });

        if (errors.length)
            return handleChange('errors', errors)

        try {
            let toPost = LeanForm({ fields: profileData.field, state });
            if (authUser.picture == toPost.picture)
                delete toPost.picture;

            updateProfile(toPost, ({ token, user }) => {
                setAuthTokens(token);
                setAuthUser(user, () => handleChange('openModal', false))
            })
        } catch (err) {
            console.log(err)
        } finally {
        }
    }
    const onClose = () => handleChanges({ 'openModal': false, ...authUser });
    const handleChange = (name, value) => setState({ ...state, [name]: value });
    const handleChanges = (obj) => setState(Object.entries(obj).map(([name, value]) => ({ [name]: value })).reduce((total, elem) => ({ ...total, ...elem }), state));
    return (
        <Grid container>
            <Grid item className='profile-heading-container'>
                <img src={picture} alt='User' />
                <h1 className='bold break-word fullwidth'>{`${firstName} ${lastName}`}</h1>
                <p style={{ minWidth: '100%' }}>{dateToYear(age)}</p>
            </Grid>
            <CustomTable data={tableData} />
            <Btn onClick={() => handleChange('openModal', true)} text='Modifier mon profile' grayColor auto={true} />
            <Modal openModal={state.openModal} onClose={onClose} onClick={onClick}>
                <Grid container item xs={12} justify="flex-start">
                    <FormGenerator
                        fields={profileData.field}
                        state={state}
                        onChange={handleChange}
                        settings={profileData.settings}
                    />
                </Grid>
            </Modal>
        </Grid>
    )
}

