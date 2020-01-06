import React from 'react'
import BlueSearchIcon from '../assets/img/icons/blue-search.png'
import BlueHouseIcon from '../assets/img/icons/blue-house.png'
import BlueGraduateIcon from '../assets/img/icons/blue-graduate.png'
import DimensionsIcon from '../assets/img/icons/dimensions.png'
import BudgetIcon from '../assets/img/icons/budget.png'
import Stepper from '../components/elements/stepper'
import { BudgetComp, SearchComp, SchoolComp, HouseComp, SignUpComp } from '../components/public/buyer'
import { PublicContentWrapper } from '../components/wrapper/index'

const menus = [
    { name: 'Recherche', icon: BlueSearchIcon },
    { name: 'Logement', icon: BlueHouseIcon },
    { name: 'Superficie', icon: DimensionsIcon },
    { name: 'Mon école', icon: BlueGraduateIcon },
    { name: 'Budget', icon: BudgetIcon },
];
const contents = [SignUpComp, SearchComp, HouseComp, SchoolComp, SearchComp, BudgetComp];

export default () => (
    <PublicContentWrapper>
        <Stepper menus={menus} contents={contents} clickableMenu />
    </PublicContentWrapper>
)