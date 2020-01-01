import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import PrivateRoute from '../privateRoute'

// pages
import PageBuy from '../../../pages/private/student/buyer'
import { PublicRoute } from '../public'

export default () => (
    <Router>
        <Switch>
            <PrivateRoute exact path="/dashboard" component={() => <PageBuy role='roomer' />} />
            <PublicRoute />
        </Switch>
    </Router>
);