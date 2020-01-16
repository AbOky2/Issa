import React, { Component } from 'react';
import Sidebar from '../components/private/admin/sidebar'
import StudentSidebar from '../components/private/admin/student/sidebar'
import AdminHeader from '../components/private/admin/header'
import StudentHeader from '../components/private/admin/student/header'
import StudentFooter from '../components/private/admin/student/footer'
import { Grid } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import { AuthContext } from '../context/auth'
import { isAdmin, isStudent } from '../utils/user'

const AdminSidebarComp = ({ children }) => (
    <Grid container className='admin-container'>
        <Grid item xs={2}><Sidebar /></Grid>
        <Grid item xs={10} className='content'>
            <Grid item xs={12}><AdminHeader /></Grid>
            <Grid item xs={12}>{children}</Grid>
        </Grid>
    </Grid>
)

const StudentSidebarComp = ({ children, authUser }) => (
    <Grid container className='admin-container student-container'>
        <Grid item xs={12}><StudentHeader /></Grid>
        <Grid container item xs={12} className='content'>
            <Hidden only="xs">
                <Grid item smup='true' sm={2}>
                    <StudentSidebar authUser={authUser} />
                </Grid>
            </Hidden>
            <Grid item xs={12} sm={10}>{children}</Grid>
        </Grid>
        <Grid item xs={12}><StudentFooter authUser={authUser} /></Grid>
    </Grid>
)
export default (OriginalComponent) => (class BaseComponent extends Component {
    render() {
        return (
            <AuthContext.Consumer>
                {({ authUser }) => {
                    let CustomComp = null;

                    if (isAdmin(authUser))
                        CustomComp = AdminSidebarComp;
                    else if (isStudent(authUser))
                        CustomComp = StudentSidebarComp;
                    return (
                        <CustomComp authUser={authUser}>
                            <OriginalComponent {...this.props} />
                        </CustomComp>
                    )
                }}
            </AuthContext.Consumer>
        );
    }
})

