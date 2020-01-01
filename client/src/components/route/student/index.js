import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import PrivateRoute from '../privateRoute'
import { isRoomer } from '../../../utils/user'

// pages
import PageBuy from '../../../pages/private/student/buyer'
import PageRoomer from '../../../pages/private/student/roomer'
import { PublicRoute } from '../public'

export default ({ user }) => (
    <Router>
        <Switch>
            <PrivateRoute exact path="/dashboard" component={() => isRoomer(user) ? <PageRoomer /> : <PageBuy />} />
            <PublicRoute />
        </Switch>
    </Router>
);