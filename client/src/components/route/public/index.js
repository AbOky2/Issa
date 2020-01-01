import React, { Fragment } from "react";
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
// const PublicRoute = () => (
//     <>
//         <Route exact path="/">
//             <PageHome />
//         </Route>
//         <Route exact path="/login">
//             <PageLogin />
//         </Route>
//         <Route path='*' component={NoMatch} />
//     </>
// );

export default () => (
    <Router>
        <Switch>
            <PublicRoute />
        </Switch>
    </Router>
);
export { PublicRoute }