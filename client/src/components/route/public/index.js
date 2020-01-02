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
const publicRouteList = [
    { path: '/', component: PageHome },
    { path: '/login', component: PageLogin },
]

const PublicRoute = () => (publicRouteList.map(({ path, component }, i) => (<Route key={i} exact path={path} component={component} />)))

export default () => (
    <Router>
        <Switch>
            <PublicRoute />
        </Switch>
    </Router>
);
export { PublicRoute }