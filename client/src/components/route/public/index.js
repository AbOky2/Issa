import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages
import PageLogin from '../../../pages/login'
import PageHome from '../../../pages'

const NoMatch = ({ location }) => (
    <div>
        <h3>No match for <code>{location.pathname}</code></h3>
    </div>
)

const PublicRoute = () => (
    <Switch>
        <Route exact path="/">
            <PageHome />
        </Route>
        <Route exact path="/login">
            <PageLogin />
        </Route>
        <Route path='*' component={NoMatch} />
    </Switch>
);

export default () => (
    <Router>
        <PublicRoute />
    </Router>
);
export { PublicRoute }