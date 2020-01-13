import React, { useState, useEffect } from "react";

import BlueSearchIcon from '../../assets/img/icons/blue-search.png'
import BlueHouseIcon from '../../assets/img/icons/blue-house.png'
import BlueGraduateIcon from '../../assets/img/icons/blue-graduate.png'
import BudgetIcon from '../../assets/img/icons/budget.png'
import Stepper from '../../components/elements/stepper'
import { BudgetComp, SearchComp, SchoolComp, HouseComp, SignUpComp } from '../../components/public/buyer'
import { PublicContentWrapper } from '../../components/wrapper/index'
import { getZones } from '../../services/publicService'
import { renameObjectKeys } from '../../utils/converAndCheck'

const menus = [
    { name: 'Recherche', icon: BlueSearchIcon },
    { name: 'Logement', icon: BlueHouseIcon },
    // { name: 'Superficie', icon: DimensionsIcon },
    { name: 'Mon école', icon: BlueGraduateIcon },
    { name: 'Budget', icon: BudgetIcon },
];
const contents = [SearchComp, HouseComp, SchoolComp, BudgetComp, SignUpComp,];

export default () => {
    const [state, setState] = useState({
        housing_type: null,
        budget: 0,
        zones: [],
        role: 'roomer',
        zoneList: [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' },
        ],

        post_fields: ['housing_type', 'budget', 'role', { name: 'zones', validate: (data) => data ? data.map(data => data.value) : [] }]
    });
    useEffect(() => {
        (async () => {
            const { list = [] } = await getZones();
            // console.log(list)
            handleChange('zoneList', list.map(e => renameObjectKeys(e, [['_id', 'value'], ['name', 'label']])))
        })()
    }, [])
    const handleChange = (name, value) => setState({ ...state, [name]: value })
    console.log(state.zones)
    return (
        <PublicContentWrapper>
            <Stepper menus={menus} data={state} handleChange={handleChange} contents={contents} clickableMenu />
        </PublicContentWrapper>
    )
}