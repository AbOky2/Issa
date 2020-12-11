import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../context/auth";

function PrivateRoute({ component: Component, ...rest }) {
    const { authTokens, authUser } = useAuth();

    return (
        <Route
            {...rest}
            render={props =>
                authTokens && authUser ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{ pathname: "/login", state: { referer: props.location } }}
                        />
                    )
            }
        />
    );
}

export default PrivateRoute;