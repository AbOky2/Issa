import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Grid, TextField, Button } from '@material-ui/core';
import { basicAuth } from '../../../services/authService'
import { useAuth } from "../../../context/auth";

import './login.css';

const LoginTab = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [state] = useState({ email: 'test@test.test', password: 'test' });
    // const [state] = useState({ email: 'test@admin.admin', password: 'test' });
    const { setAuthTokens, setAuthUser } = useAuth();
    const referer = '/dashboard';

    if (isLoggedIn)
        return <Redirect to={referer} />;


    const onClick = () => {
        basicAuth(state, ({ token, user }) => {
            setLoggedIn(true);
            setAuthTokens(token);
            setAuthUser(user)
        })
    }
    return (
        <div id='login'>
            <Grid container spacing={8} alignItems="flex-end">
                <Grid item>
                    {/* <Face /> */}
                </Grid>
                <Grid item md={true} sm={true} xs={true}>
                    <TextField id="email" label="email" type="email" value={state.email} fullWidth autoFocus required />
                </Grid>
            </Grid>
            <Grid container spacing={8} alignItems="flex-end">
                <Grid item>
                    {/* <Fingerprint /> */}
                </Grid>
                <Grid item md={true} sm={true} xs={true}>
                    <TextField id="password" label="Password" type="password" value={state.password} fullWidth required />
                </Grid>
                <Grid container justify="center" style={{ marginTop: '10px' }}>
                    <Button variant="outlined" color="primary" style={{ textTransform: "none" }} onClick={onClick}>Login</Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default LoginTab;