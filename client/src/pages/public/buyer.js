import React, { useState } from 'react'
import BlueSearchIcon from '../../assets/img/icons/blue-search.png'
import BlueHouseIcon from '../../assets/img/icons/blue-house.png'
import BlueGraduateIcon from '../../assets/img/icons/blue-graduate.png'
import DimensionsIcon from '../../assets/img/icons/dimensions.png'
import BudgetIcon from '../../assets/img/icons/budget.png'
import Stepper from '../../components/elements/stepper'
import { BudgetComp, SchoolComp, BuyerStatusComp, SignUpComp } from '../../components/public/buyer'
import { PublicContentWrapper } from '../../components/wrapper/index'

const menus = [
    // { name: 'Recherche', icon: BlueSearchIcon },
    { name: 'Ma situation', icon: BlueHouseIcon },
    // { name: 'Superficie', icon: DimensionsIcon },
    { name: 'Type de logement', icon: BlueGraduateIcon },
    { name: 'Mon Budget / Simulation budget ?', icon: BudgetIcon },
];
const contents = [BuyerStatusComp, SchoolComp, BudgetComp, SignUpComp,];

export default () => {
    const [state, setState] = useState({
        housing_type: null,
        budget: 0
    });
    const handleChange = (name, value) => setState({ ...state, [name]: value })
    console.log(state)
    return (
        <PublicContentWrapper>
            <Stepper menus={menus} data={state} handleChange={handleChange} contents={contents} clickableMenu />
        </PublicContentWrapper>
    )
}