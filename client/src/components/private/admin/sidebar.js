import React from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as HouseIcon } from '../../../assets/img/svg/house.svg'
import { ReactComponent as HouseKeyIcon } from '../../../assets/img/svg/house-key.svg'
import { ReactComponent as LotsIcon } from '../../../assets/img/svg/lots.svg'
import Logo from '../../../assets/img/logo.png'

import TmpNexityIcon from '../../../assets/img/icons/nexity.png'
import './sidebar.css'

const NexityIcon = () => <img src={TmpNexityIcon} />
const menuList = [
    {
        title: 'UTILISATEURS',
        menu: [
            { name: 'Location', path: '/dashboard', Icon: HouseIcon },
            { name: 'Achats', path: '/dashboard/buy', Icon: HouseKeyIcon }
        ]
    },
    {
        title: 'ADMINISTRATIONS',
        menu: [
            { name: 'Lots Nexity', path: '/dashboard/lots', Icon: LotsIcon },
            { name: 'Agence Nexity', path: '/dashboard/nexity', Icon: NexityIcon }
        ]
    },
    {
        title: 'Chat',
        menu: [
            { name: 'Chats', path: '/dashboard/chat', Icon: NexityIcon }
        ]
    },
]
const Sidebar = () => {

    return (
        <div id='sidebar'>
            <div className='logo_container'>
                <img src={Logo} />
                <p>Admin</p>
            </div>
            <ul>
                {
                    menuList.map(({ title, menu }, index) => (
                        <li key={index}>
                            <h2>{title}</h2>
                            <ul>
                                {menu.map(({ name, path, Icon }, i) => (
                                    <NavLink to={path} exact activeClassName="active" key={i}>
                                        <li>
                                            <h3>
                                                <Icon />
                                                <span className='link-title'>{name}</span>
                                                <span className='info'>1</span>
                                            </h3>
                                        </li>
                                    </NavLink>
                                ))}
                            </ul>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Sidebar