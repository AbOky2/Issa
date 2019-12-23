import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import PrivateRoute from './privateRoute'

// pages
import PageLogin from '../../pages/login'
import PageBuy from '../../pages/private/admin/buy'
import PageLots from '../../pages/private/admin/lots/'
import PagePartners from '../../pages/private/admin/lots/partners'
import PageHome from '../../pages'


export default () => (
    <Fragment>
        <Route exact path="/">
            <PageHome />
        </Route>
        <Route exact path="/login">
            <PageLogin />
        </Route>
        <PrivateRoute exact path="/dashboard" component={() => <PageBuy role='roomer' />} />
        <PrivateRoute exact path="/dashboard/buy" component={() => <PageBuy role='buyer' />} />
        <PrivateRoute exact path="/dashboard/lots" component={PageLots} />
        <PrivateRoute exact path="/dashboard/partners" component={PagePartners} />
    </Fragment>
);