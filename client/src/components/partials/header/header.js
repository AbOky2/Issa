import React from "react";
import './header.css'
import AdminRoutes from '../../route/admin'
import StudentRoutes from '../../route/student'
import PublicRoutes from '../../route/public'
import { isAdmin, isStudent } from '../../../utils/user'

export default ({ user, isAuth, logOut }) => {
    if (isAuth) {
        if (isAdmin(user))
            return <AdminRoutes />
        else (isStudent(user))
        return <StudentRoutes user={user} />
    }
    return (<PublicRoutes logOut={logOut} />)
}