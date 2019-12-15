import React from "react";
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './header.css'
import Routes from '../../route/'
import { useAuth } from "../../../context/auth";


const PublicHeader = (logOut) => (
    <header>
        <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid item>logo</Grid>
            <Grid item>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">login</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/" onClick={logOut}>logOut</Link>
                    </li>
                </ul>
            </Grid>
        </Grid>
    </header>
)

export default ({ isAuth }) => {
    const { setAuthTokens, setAuthUser } = useAuth();

    const logOut = () => {
        setAuthTokens(null);
        setAuthUser(null)
    };
    return (
        <Router>
            {!isAuth ? <PublicHeader logOut={logOut} /> : ''}
            <Routes />

        </Router>
    )
};