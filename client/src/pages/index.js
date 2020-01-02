import React from 'react'
import { Grid } from '@material-ui/core'
import ClapIcon from '../assets/img/icons/clap.png'
import DisplayMenu from '../components/partials/header/list-menu'

const menus = [
    { name: 'Garant', icon: ClapIcon },
    { name: 'Recherche', icon: ClapIcon },
    { name: 'Logement', icon: ClapIcon },
    { name: 'Superficie', icon: ClapIcon },
    { name: 'Mon école', icon: ClapIcon },
    { name: 'Budget', icon: ClapIcon },
]


const HomePage = () => (
    <div>
        <h1>Home</h1>
        <DisplayMenu menus={menus} />
    </div>
)
export default HomePage