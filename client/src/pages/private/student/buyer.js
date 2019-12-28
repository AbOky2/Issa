import React, { useState, useEffect } from "react";
import { Grid } from '@material-ui/core'
import withAuth from '../../../lib/withAuth'
import { AdminContentWrapper } from '../../../components/wrapper'
import { getProperties, getPartners } from '../../../services/studentService'
import Card from '../../../components/private/admin/student/card'
import UpdateCard from '../../../components/private/admin/student/update-profile'
import Offers from '../../../components/private/admin/student/offers'

import './index.css'

const Dashboard = () => {
    const [state, setState] = useState({
        partners: [],
        properties: []
    })

    useEffect(() => {
        (async () => {
            try {
                const properties = await getProperties()
                handleChange('properties', properties.list)
                const partners = await getPartners()
                handleChange('partners', partners.list)

            } catch (error) {
                console.error(error)
            }
        })()
    }, [])

    const handleChange = (name, value) => setState({ ...state, [name]: value });

    const data = [
        { name: 'Mathieu Bourgouin - Agences Century 21', address: '137 Rue de rome 75017 Paris', status: 'waiting' },
        { name: 'Mathieu Bourgouin - Agences Century 21', address: '137 Rue de rome 75017 Paris', status: 'waiting' },
        { name: 'Mathieu Bourgouin - Agences Century 21', address: '137 Rue de rome 75017 Paris', status: 'waiting' },
        { name: 'Mathieu Bourgouin - Agences Century 21', address: '137 Rue de rome 75017 Paris', status: 'waiting' },
        { name: 'Mathieu Bourgouin - Agences Century 21', address: '137 Rue de rome 75017 Paris', status: 'waiting' },
        { name: 'Mathieu Bourgouin - Agences Century 21', address: '137 Rue de rome 75017 Paris', status: 'waiting' },
        { name: 'Mathieu Bourgouin - Agences Century 21', address: '137 Rue de rome 75017 Paris', status: 'waiting' },
        { name: 'Mathieu Bourgouin - Agences Century 21', address: '137 Rue de rome 75017 Paris', status: 'waiting' },
        { name: 'Mathieu Bourgouin - Agences Century 21', address: '137 Rue de rome 75017 Paris', status: 'waiting' },
        { name: 'Mathieu Bourgouin - Agences Century 21', address: '137 Rue de rome 75017 Paris', status: 'waiting' },
        { name: 'Mathieu Bourgouin - Agences Century 21', address: '137 Rue de rome 75017 Paris', status: 'waiting' },
        { name: 'Mathieu Bourgouin - Agences Century 21', address: '137 Rue de rome 75017 Paris', status: 'waiting' },
    ];
    return (
        <AdminContentWrapper className='no-bg no-box-shadow'>
            <Grid><h2 className='student-section-title text-left'>VOTRE DOSSIER</h2></Grid>

            <Grid container direction="row" justify="space-between" alignItems='center'>
                <Grid item container xs={8} className='offers-container'>
                    <Offers data={data} />
                </Grid>
                <Grid container item xs={12} sm={4}>
                    <UpdateCard />
                </Grid>
            </Grid>

            <Grid><h2 className='student-section-title text-left'>NOS OFFRES PARTENAIRES</h2></Grid>
            <Grid item container className='content-container' justify='space-between'>
                {state.partners.map((e, i) =>
                    <Grid item container index={i} xs={6} sm={3} className='list'>
                        <Card data={e} />
                    </Grid>
                )}
            </Grid>
        </AdminContentWrapper>
    )
}

export default withAuth(Dashboard)