import React, { Fragment, Component } from 'react';
import Sidebar from '../components/private/admin/sidebar'
import Header from '../components/private/admin/header'
import { Grid } from '@material-ui/core'

const AdminSidebar = ({ children }) => (
    <Grid container className='admin-container'>
        <Grid item xs={2}><Sidebar /></Grid>
        <Grid item xs={10} className='content'>
            <Grid item xs={12}><Header /></Grid>
            <Grid item xs={12}>{children}</Grid>
        </Grid>
    </Grid>
)

export default (OriginalComponent) => (class BaseComponent extends Component {
    render() {
        return (
            <Fragment>
                <AdminSidebar>
                    <OriginalComponent {...this.props} />
                </AdminSidebar>
            </Fragment>
        );
    }
})

