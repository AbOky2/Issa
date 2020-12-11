import React, { useState, useEffect } from "react";

import BlueSearchIcon from '../../assets/img/icons/blue-search.png'
import BlueHouseIcon from '../../assets/img/icons/blue-house.png'
import BlueGraduateIcon from '../../assets/img/icons/blue-graduate.png'
import BudgetIcon from '../../assets/img/icons/budget.png'
import Stepper from '../../components/elements/stepper'
import { BudgetComp, SearchComp, SchoolComp, HouseComp, SignUpComp } from '../../components/public/buyer'
import { PublicContentWrapper } from '../../components/wrapper/index'
import { renameObjectKeys } from '../../utils/converAndCheck'
import { getCities } from '../../services/externalService'

const menus = [
    { name: 'Logement', icon: BlueHouseIcon },
    { name: 'Recherche', icon: BlueSearchIcon },
    { name: 'Mon école', icon: BlueGraduateIcon },
    { name: 'Budget', icon: BudgetIcon },
];
const contents = [HouseComp, SearchComp, SchoolComp, BudgetComp, SignUpComp];

export default () => {
    const [state, setState] = useState({
        housing_type: null,
        school: '',
        studiesLevel: '',
        budget: 500,
        zones: [],
        role: 'roomer',
        zoneList: [],

        post_fields: ['housing_type', 'budget', 'school', 'studiesLevel', 'role', { name: 'zones', validate: (data) => data ? data.map(data => ({ zoneName: data.label, zoneValue: data.value })) : [] }]
    });
    useEffect(() => {
        (async () => {
            const zones = await getCities();
            if (zones)
                handleChange('zoneList', zones.map(e => renameObjectKeys(e, [['code', 'value'], ['nom', 'label']])));
        })()
    }, [])
    const handleChange = (name, value) => setState({ ...state, [name]: value })
    return (
        <PublicContentWrapper>
            <Stepper menus={menus} data={state} handleChange={handleChange} contents={contents} clickableMenu={true} />
        </PublicContentWrapper>
    )
}