import React from "react";
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory, useLocation } from "react-router-dom";
import { getUser } from '../../../utils/storage'
import { logout } from '../../../services/authService'
import Login from '../../public/login'
import Dashboard from '../../private/'
import './header.css'


export default function AuthExample({ user }) {
    return (
        <Router>
            <header>
                <Grid container direction="row" justify="space-between" alignItems="center">
                    <Grid item>logo</Grid>
                    <Grid item>
                        <ul>
                            <li>
                                <Link to="/public">Public Page</Link>
                            </li>
                            <li>
                                <Link to="/protected">Protected Page</Link>
                            </li>
                            <li><AuthButton user={user} /></li>
                        </ul>
                    </Grid>
                </Grid>

                <Switch>
                    <Route path="/public">
                        <PublicPage />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <PrivateRoute path="/protected">
                        <ProtectedPage />
                    </PrivateRoute>
                </Switch>
            </header>
        </Router>
    );
}

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

const AuthButton = () => {
    const user = getUser();

    return user && user.role ? (
        <p>
            Welcome!{" "}
            <button
                onClick={() => {
                    logout();
                }}
            >
                Déconnecter
      </button>
        </p>
    ) : (
            <Link to='/login'>Se connecter.</Link>
        );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const PrivateRoute = ({ children, ...rest }) => {
    const user = getUser();

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user && user.role ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}

















const PublicPage = () => {
    return <h3>Public</h3>;
}

const ProtectedPage = () => {
    return <h3>Protected</h3>;
}

const LoginPage = () => {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
        fakeAuth.authenticate(() => {
            history.replace(from);
        });
    };

    return (
        <div>
            <p>You must log in to view the page at {from.pathname}</p>
            <button onClick={login}>Log in</button>
        </div>
    );
}
