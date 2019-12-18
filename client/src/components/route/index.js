import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import PrivateRoute from './privateRoute'

// pages
import PageLogin from '../../pages/login'
import PageDashboard from '../../pages/private/admin'
import PageBuy from '../../pages/private/admin/buy'
import PageLots from '../../pages/private/admin/lots/'
import PageHome from '../../pages'


export default () => (
    <Fragment>
        <Route exact path="/">
            <PageHome />
        </Route>
        <Route exact path="/login">
            <PageLogin />
        </Route>
        <PrivateRoute exact path="/dashboard" component={PageDashboard} />
        <PrivateRoute exact path="/dashboard/buy" component={PageBuy} />
        <PrivateRoute exact path="/dashboard/lots" component={PageLots} />
    </Fragment>
);