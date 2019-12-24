import React from "react";
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './header.css'
import AdminRoutes from '../../route/admin'
import StudentRoutes from '../../route/student'
import PublicRoutes from '../../route/public'
import { isAdmin, isStudent } from '../../../utils/user'


const PublicHeader = ({ logOut }) => (
    <Router>
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
                            <Link to="/" onClick={logOut}>logout</Link>
                        </li>
                    </ul>
                </Grid>
            </Grid>
        </header>
    </Router>
)

export default ({ user, isAuth, logOut }) => {
    if (isAuth) {
        if (isAdmin(user))
            return <AdminRoutes />
        else (isStudent(user))
        return <StudentRoutes />
    }
    return (<PublicRoutes logOut={logOut} />)
}