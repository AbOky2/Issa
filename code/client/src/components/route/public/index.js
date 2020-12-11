import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages
import PageLogin from '../../../pages/public/login'
import PageRoomer from '../../../pages/public/roomer'
import PageBuyer from '../../../pages/public/buyer'

const NoMatch = ({ location }) => (
    <div>
        <h3>No match for <code>{location.pathname}</code></h3>
    </div>
)
const publicRouteList = [
    { path: '/roomer', component: PageRoomer },
    { path: '/buyer', component: PageBuyer },
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