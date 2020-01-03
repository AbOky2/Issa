import React from 'react'
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
];
const contents = [Housing, Housing, Housing, Housing];

export default () => (
    <PublicContentWrapper>
        <Stepper menus={menus} contents={contents} clickableMenu />
    </PublicContentWrapper>
)