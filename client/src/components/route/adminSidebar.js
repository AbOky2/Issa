import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from './privateRoute'

// pages
import PageBuy from '../../pages/private/admin/buy'


export default () => (
    <Switch>
        <PrivateRoute exact path="/buy" compnent={PageBuy} />
    </Switch>
);