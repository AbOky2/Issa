import React from 'react'
import { Grid } from '@material-ui/core'
import ClapIcon from '../assets/img/icons/clap.png'
import BudgetIcon from '../assets/img/icons/budget.png'
import Stepper from '../components/elements/stepper'
import Housing from '../components/public/buyer'
import { PublicContentWrapper } from '../components/wrapper/index'
const menus = [
    { name: 'Garant', icon: ClapIcon },
    { name: 'Recherche', icon: ClapIcon },
    { name: 'Logement', icon: ClapIcon },
    { name: 'Superficie', icon: ClapIcon },
    { name: 'Mon école', icon: ClapIcon },
    { name: 'Budget', icon: BudgetIcon },
]

const HomePage = () => {
    const contents = [Housing, Housing, Housing, Housing];

    return (
        <PublicContentWrapper>
            {/* <h1>Home</h1> */}
            <Stepper menus={menus} contents={contents} clickableMenu />
        </PublicContentWrapper>
    )
}
export default HomePage