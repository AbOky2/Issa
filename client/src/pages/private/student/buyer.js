import React, { useState, useEffect } from "react";
import { Grid } from '@material-ui/core'
import withAuth from '../../../lib/withAuth'
import { AdminContentWrapper } from '../../../components/wrapper'
import { getProperties, getPartners } from '../../../services/studentService'
import Card from '../../../components/private/admin/student/card'
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
    return (
        <AdminContentWrapper className='no-bg no-box-shadow'>
            <Grid><h2 className='student-section-title'>VOTRE DOSSIER</h2></Grid>

            <Grid container direction="row" justify="space-between" alignItems='center' className='spacing header'>
                <Grid item container xs={6} justify="flex-start">

                </Grid>
                <Grid container item xs={6} justify="flex-end">

                </Grid>
            </Grid>

            <Grid><h2 className='student-section-title'>NOS OFFRES PARTENAIRES</h2></Grid>
            <Grid item container className='content-container' justify='space-between'>
                {state.partners.map((e, i) =>
                    <Grid item container index={i} xs={3} className='list'>
                        <Card data={e} />
                    </Grid>
                )}
                {state.partners.map((e, i) =>
                    <Grid item container index={i} xs={3} className='list'>
                        <Card data={e} />
                    </Grid>
                )}
            </Grid>
        </AdminContentWrapper>
    )
}

export default withAuth(Dashboard)