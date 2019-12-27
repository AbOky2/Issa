import React from "react";
import { NavLink, Link } from "react-router-dom";

import { ReactComponent as HouseIcon } from '../../../../assets/img/svg/house.svg'
import Profile from '../../../../components/private/admin/student/profile'
const Sidebar = ({ authUser }) => (
    <div id='sidebar'>
        <Profile authUser={authUser} />
    </div>
)

export default Sidebar