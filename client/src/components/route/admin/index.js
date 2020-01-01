import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from '../privateRoute'

// pages
import PageBuy from '../../../pages/private/admin/buy'
import PageProperties from '../../../pages/private/admin/listElement/properties'
import PagePartners from '../../../pages/private/admin/listElement/partners'
import { PublicRoute } from '../public'


export default () => (
    <Router>
        <Switch>
            <PrivateRoute exact path="/dashboard" component={() => <PageBuy role='roomer' />} />
            <PrivateRoute exact path="/dashboard/buy" component={() => <PageBuy role='buyer' />} />
            <PrivateRoute exact path="/dashboard/properties" component={PageProperties} />
            <PrivateRoute exact path="/dashboard/partners" component={PagePartners} />
            <PublicRoute />
        </Switch>
    </Router>
);