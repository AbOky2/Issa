import React, { Fragment, Component } from 'react';
import Sidebar from '../components/private/admin/sidebar'
import Header from '../components/private/admin/header'
import { Grid } from '@material-ui/core';
import { AuthContext } from '../context/auth'
import { isAdmin, isStudent } from '../utils/user'

const AdminSidebar = ({ children }) => (
    <Grid container className='admin-container'>
        <Grid item xs={2}><Sidebar /></Grid>
        <Grid item xs={10} className='content'>
            <Grid item xs={12}><Header /></Grid>
            <Grid item xs={12}>{children}</Grid>
        </Grid>
    </Grid>
)

const StudentSidebar = ({ children }) => (
    <Grid container className='admin-container'>
        <Grid item xs={2}>student<Sidebar /></Grid>
        <Grid item xs={10} className='content'>
            <Grid item xs={12}><Header /></Grid>
            <Grid item xs={12}>{children}</Grid>
        </Grid>
    </Grid>
)

export default (OriginalComponent) => (class BaseComponent extends Component {
    render() {
        return (
            <AuthContext.Consumer>
                {({ authUser }) => {
                    let CustomComp = null;

                    if (isAdmin(authUser))
                        CustomComp = AdminSidebar;
                    else if (isStudent(authUser))
                        CustomComp = StudentSidebar;
                    return (
                        <CustomComp>
                            <OriginalComponent {...this.props} />
                        </CustomComp>
                    )
                }}
            </AuthContext.Consumer>
        );
    }
})

