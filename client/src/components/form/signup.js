import React, { useState } from "react";
import { Grid } from '@material-ui/core'
import FormGenerator, { FormValidator, LeanForm } from '../formElement/generator';
import forData from './data/signup'
import { Redirect } from "react-router-dom";
import Btn from '../elements/btn'
import { signUp } from '../../services/authService'
import { useAuth } from "../../context/auth";

const defaultState = {
    firstName: '',
    lastName: '',
    age: '',
    city: '',
    email: '',
    password: '',
    phone: '',
    errors: [],
}

export default ({ handlePrev, data }) => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [state, setState] = useState(defaultState);
    const { setAuthTokens, setAuthUser } = useAuth();

    const handleChange = (name, value) => setState({ ...state, [name]: value });

    const errors = FormValidator({ fields: forData.create.field, state });
    const submitable = errors.length === 0;

    if (isLoggedIn)
        return <Redirect to='/dashboard' />;

    const onClick = () => {
        if (!submitable)
            return handleChange('errors', errors);
        try {
            let toPost = { ...LeanForm({ fields: forData.create.field, state }), ...data };
            signUp(toPost, ({ token, user }) => {
                setLoggedIn(true);
                setAuthTokens(token);
                setAuthUser(user)
            })
        } catch (err) {
            console.log(err)
        } finally {
            handleChange('errors', errors);
        }
    }
    console.log(state)
    return (
        <Grid container item xs={12} justify="flex-start" className='signup'>
            <FormGenerator
                fields={forData.create.field}
                state={state}
                errors={state.errors}
                onChange={handleChange}
                settings={forData.create.settings}
            >
                <Grid item container xs={12} justify='center' className='btn-wrapper-container'>
                    <Grid className='btn-wrapper cancel-container'><Btn text='Annuler' onClick={handlePrev} /></Grid>
                    <Grid className='btn-wrapper validate-container'><Btn text='Valider' onClick={onClick} /></Grid>
                </Grid>
            </FormGenerator>
        </Grid>
    )
}