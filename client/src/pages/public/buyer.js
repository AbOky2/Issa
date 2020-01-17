import React, { useState, useEffect } from 'react'
import BlueSearchIcon from '../../assets/img/icons/blue-search.png'
import BlueHouseIcon from '../../assets/img/icons/blue-house.png'
import BlueGraduateIcon from '../../assets/img/icons/blue-graduate.png'
import BudgetIcon from '../../assets/img/icons/budget.png'
import Stepper from '../../components/elements/stepper'
import { BuyerStatusComp, SearchComp, BuyerHouseComp, SignUpComp, BuyerObjectifComp } from '../../components/public/buyer'
import { PublicContentWrapper } from '../../components/wrapper/index'
import { renameObjectKeys } from '../../utils/converAndCheck'
import { getCities } from '../../services/externalService'

const menus = [
    { name: 'Ma situation', icon: BlueGraduateIcon },
    { name: 'Recherche', icon: BlueSearchIcon },
    { name: 'Type de logement', icon: BlueHouseIcon },
    { name: 'Mon objectif', icon: BudgetIcon },
];
const contents = [BuyerStatusComp, SearchComp, BuyerHouseComp, BuyerObjectifComp, SignUpComp,];

export default () => {
    const [state, setState] = useState({
        housing_type: null,
        housing_objective: null,
        student_status: null,
        role: 'buyer',
        zoneList: [],

        post_fields: ['housing_type', 'housing_objective', 'student_status', 'role', { name: 'zones', validate: (data) => data ? data.map(data => ({ zoneName: data.label, zoneValue: data.value })) : [] }]
    });
    const handleChange = (name, value) => setState({ ...state, [name]: value })
    useEffect(() => {
        (async () => {
            const zones = await getCities();
            if (zones)
                handleChange('zoneList', zones.map(e => renameObjectKeys(e, [['code', 'value'], ['nom', 'label']])));
        })()
    }, [])
    return (
        <PublicContentWrapper>
            <Stepper menus={menus} data={state} handleChange={handleChange} contents={contents} clickableMenu />
        </PublicContentWrapper>
    )
}