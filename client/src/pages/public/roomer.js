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
    { name: 'Mon école', icon: BlueGraduateIcon },
    { name: 'Budget', icon: BudgetIcon },
];
const contents = [SearchComp, HouseComp, SchoolComp, BudgetComp, SignUpComp];

export default () => {
    const [state, setState] = useState({
        housing_type: null,
        school: '',
        budget: 500,
        zones: [],
        role: 'roomer',
        zoneList: [],

        post_fields: ['housing_type', 'budget', 'school', 'role', { name: 'zones', validate: (data) => data ? data.map(data => data.value) : [] }]
    });
    useEffect(() => {
        (async () => {
            const zones = await getZones();
            if (zones)
                handleChange('zoneList', zones.list.map(e => renameObjectKeys(e, [['_id', 'value'], ['name', 'label']])));
        })()
    }, [])
    const handleChange = (name, value) => setState({ ...state, [name]: value })

    return (
        <PublicContentWrapper>
            <Stepper menus={menus} data={state} handleChange={handleChange} contents={contents} clickableMenu />
        </PublicContentWrapper>
    )
}