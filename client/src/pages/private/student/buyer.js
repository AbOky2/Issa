import React, { useState, useEffect } from "react";
import { Grid } from '@material-ui/core'
import withAuth from '../../../lib/withAuth'
import { AdminContentWrapper } from '../../../components/wrapper'
import { getProperties } from '../../../services/studentService'
import Card from '../../../components/private/admin/student/card'
import CustomTable from '../../../components/elements/table'
import Btn from '../../../components/elements/btn'

import './index.css'

const Dashboard = () => {
    const [state, setState] = useState({
        properties: [],
        user: {
            city: 'Paris, Saint-Ouen, Montreuil',
            type: 'Appartement, Maison',
            nb_appart: 'À définir',
            surface: '50 m² à 70 m²',
            age: 'Neuf',
        }
    })

    useEffect(() => {
        (async () => {
            try {
                const properties = await getProperties()
                handleChange('properties', properties.list)
            } catch (error) {
                console.error(error)
            }
        })()
    }, [])

    const handleChange = (name, value) => setState({ ...state, [name]: value });

    const fields = [
        { name: 'Ville', field: 'city' },
        { name: 'Type', field: 'type' },
        { name: 'Nombre', field: 'nb_appart' },
        { name: 'Surface', field: 'surface' },
        { name: 'Neuf', field: 'age' }
    ];

    const data = fields.map(({ name, field }) => [name, state.user[field]])

    return (
        <AdminContentWrapper className='no-bg no-box-shadow buyer'>
            <Grid><h2 className='student-section-title text-left'>VOTRE DOSSIER</h2></Grid>

            <Grid container direction="row" justify="space-between" alignItems='stretch'>
                <Grid item container xs={12} sm={4} className='offers-container'>
                    <h2 className='text-center fullwidth'>Ma demande  de logement</h2>
                    <CustomTable data={data} />
                    <Btn text='Mettre à jour ma demande' greenColor />
                    {/* <Offers data={data} /> */}
                </Grid>
                <Grid container item xs={12} sm={6}>
                    {/* <UpdateCard /> */}
                </Grid>
            </Grid>

            <Grid><h2 className='student-section-title text-left'>NOS OFFRES DE LOGEMENTS</h2></Grid>
            <Grid item container className='content-container'>
                {state.properties.map((e, i) =>
                    <Grid item container key={i} xs={6} sm={3} className='list'>
                        <Card data={e} />
                    </Grid>
                )}
            </Grid>
        </AdminContentWrapper>
    )
}

export default withAuth(Dashboard)