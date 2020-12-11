import React from "react";
import { NavLink, Link } from "react-router-dom";

import Profile from '../../../../components/private/admin/student/profile'
const Sidebar = ({ authUser }) => (
    <div id='sidebar'>
        <Profile authUser={authUser} />
    </div>
)

export default Sidebar