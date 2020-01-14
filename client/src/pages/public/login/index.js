import React, { useState } from "react";

import { Redirect } from "react-router-dom";
import { Grid } from '@material-ui/core';
import { signIn } from '../../../services/authService'
import { useAuth } from "../../../context/auth";
import { Link } from 'react-router-dom'
import Btn from '../../../components/elements/btn'
import Logo from '../../../assets/img/logo.png'
import './login.css';

const LoginTab = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [state, setState] = useState({ email: 'test@test.test', password: 'test' });
    // const [state, setState] = useState({ email: 'test@admin.admin', password: 'test' });

    const { setAuthTokens, setAuthUser } = useAuth();
    const referer = '/dashboard';

    if (isLoggedIn)
        return <Redirect to={referer} />;


    const onClick = () => {
        signIn(state, ({ token, user }) => {
            setLoggedIn(true);
            setAuthTokens(token);
            setAuthUser(user)
        })
    }
    const handleChange = (name, value) => setState({ ...state, [name]: value });
    return (
        <div id='login'>
            <Grid container alignItems="center" className='form-container-parent'>
                <Grid container item justify="center" className='form-container'>
                    <Grid>
                        <img src={Logo} />
                        <h2>Admin</h2>
                    </Grid>
                    <Grid container item>
                        <Grid className='input-container fullwidth'><input value={state.email} onChange={(e) => handleChange('email', e.target.value)} type='email' placeholder='Email' /></Grid>
                        <Grid className='input-container fullwidth'><input value={state.password} onChange={(e) => handleChange('password', e.target.value)} type='password' placeholder='Mot de passe' /></Grid>
                    </Grid>
                    <Grid item>
                        <Btn text='Connexion' onClick={onClick} className='greenColor full' />
                    </Grid>
                    <Grid item className='fullwidth'>
                        <p>Tu n’as pas de compte ? <Link to='/'>Créer mon compte</Link></p>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default LoginTab;