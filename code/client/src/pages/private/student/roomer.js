import React, { useState, useEffect } from "react";
import { Grid } from '@material-ui/core'
import withAuth from '../../../lib/withAuth'
import { AdminContentWrapper } from '../../../components/wrapper'
import { getPartners } from '../../../services/studentService'
import Card from '../../../components/private/admin/student/card'
import UpdateCard from '../../../components/private/admin/student/update-profile'
import { getZones } from '../../../services/studentService'
import Offers from '../../../components/private/admin/student/viewCard'

import './index.css'

const Dashboard = () => {
    const [state, setState] = useState({
        partnersList: [],
        agenciesList: [],
    })

    useEffect(() => {
        (async () => {
            try {
                const agenciesList = await getZones() || {};
                const partnersList = await getPartners() || {};

                setState({ agenciesList: agenciesList.list, partnersList: partnersList.list })
            } catch (error) {
                console.error(error)
            }
        })()
    }, [])

    const handleChange = (name, value) => setState({ ...state, [name]: value });
    let data = [];
    state.agenciesList && state.agenciesList.forEach(elem => {
        if (elem.zone && elem.zone.agencies)
            elem.zone.agencies.forEach(e => data.push({ ...e, status: elem.status }))
    });

    return (
        <AdminContentWrapper className='no-bg no-box-shadow'>
            <Grid><h2 className='student-section-title text-left'>VOTRE DOSSIER</h2></Grid>

            <Grid container direction="row" justify="space-between" alignItems='stretch'>
                <Grid item container xs={12} sm={8} className='offers-container'>
                    <Offers data={data} />
                </Grid>
                <Grid container item xs={12} sm={4}>
                    <UpdateCard />
                </Grid>
            </Grid>

            <Grid><h2 className='student-section-title text-left'>NOS OFFRES PARTENAIRES</h2></Grid>
            <Grid item container className='content-container'>
                {state.partnersList && state.partnersList.map((e, i) =>
                    <Grid item container key={i} xs={6} sm={3} className='list'>
                        <Card data={e} />
                    </Grid>
                )}
            </Grid>
        </AdminContentWrapper>
    )
}

export default withAuth(Dashboard)