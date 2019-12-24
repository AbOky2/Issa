import React from "react";
import { NavLink, Link } from "react-router-dom";

import { ReactComponent as HouseIcon } from '../../../assets/img/svg/house.svg'
import { ReactComponent as HouseKeyIcon } from '../../../assets/img/svg/house-key.svg'
import { ReactComponent as PartnersKeyIcon } from '../../../assets/img/svg/partners.svg'
import { ReactComponent as LotsIcon } from '../../../assets/img/svg/lots.svg'
import Logo from '../../../assets/img/logo.png'

import TmpNexityIcon from '../../../assets/img/icons/nexity.png'
import './sidebar.css'

const NexityIcon = () => <img src={TmpNexityIcon} alt='Nexity Icon' />
const menuList = [
    {
        title: 'UTILISATEURS',
        menu: [
            { slug: 'locations', name: 'Location', path: '/dashboard', Icon: HouseIcon },
            { slug: 'buyers', name: 'Achats', path: '/dashboard/buy', Icon: HouseKeyIcon }
        ]
    },
    {
        title: 'ADMINISTRATIONS',
        menu: [
            { slug: 'lots', name: 'Lots Nexity', path: '/dashboard/properties', Icon: LotsIcon },
            { slug: 'partners', name: 'Offres partenaires', path: '/dashboard/partners', Icon: PartnersKeyIcon },
            { slug: 'agence', name: 'Agence Nexity', path: '/dashboard/nexity', Icon: NexityIcon },
        ]
    }
]
const Sidebar = ({ notifications = { locations: 1 } }) => {
    return (
        <div id='sidebar'>
            <div className='logo_container'>
                <Link to='/dashboard'><img src={Logo} alt='Logo' /></Link>
                <p>Admin</p>
            </div>
            <ul>
                {
                    menuList.map(({ title, menu }, index) => (
                        <li key={index}>
                            <h2>{title}</h2>
                            <ul>
                                {menu.map(({ slug, name, path, Icon }, i) => (
                                    <NavLink to={path} exact activeClassName="active" key={i}>
                                        <li>
                                            <h3>
                                                <Icon />
                                                <span className='link-title'>{name}</span>
                                                {notifications[slug] ? <span className='info'>{notifications[slug]}</span> : ''}
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