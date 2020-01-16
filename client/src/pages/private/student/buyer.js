import React, { useState, useEffect } from "react";
import { Grid } from '@material-ui/core'
import withAuth from '../../../lib/withAuth'
import { AdminContentWrapper } from '../../../components/wrapper'
import { getProperties } from '../../../services/studentService'
import Card from '../../../components/private/admin/student/card'
import CustomTable from '../../../components/elements/table'
import Btn from '../../../components/elements/btn'
import FormSimulation from '../../../components/form/simulation'
import WenIcon from '../../../assets/img/icons/wen.png'
import ClapIcon from '../../../assets/img/icons/clap.png'
import './index.css'

const ListStyle = ({ index, children }) => (
    <Grid container className='list-style' alignItems='center'>
        <Grid item className='list-style-index'><span>{index}</span></Grid>
        <Grid item className='list-style-content'>{children}</Grid>
    </Grid>
)
const TitleWithImage = ({ text, img }) => (
    <Grid container className='title-with-image mobile-reverse'>
        <Grid item className='img-container fullwidth'>
            <img src={img} className='mobile-fullwidth' />
        </Grid>
        <Grid item className='text-container fullwidth'>
            <h2 className='text-center mobile-text-left fullwidth'>{text}</h2>
        </Grid>
    </Grid>
)

const fields = [
    { name: 'Ville', field: 'city' },
    { name: 'Type', field: 'type' },
    { name: 'Nombre', field: 'nb_appart' },
];

const Dashboard = () => {
    const [state, setState] = useState({
        properties: [],
        user: {
            city: 'Paris, Saint-Ouen, Montreuil',
            type: 'Appartement, Maison',
            nb_appart: 'À définir',
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

    const data = fields.map(({ name, field }) => [name, state.user[field]])

    const infoLists = ['Ton conseiller prendra contact avec toi.', 'Profites en pour completer ton profil !', 'Regarde aussi nos offres de logements.', 'Découvre nos différents guide d’achats.'];

    return (
        <AdminContentWrapper className='no-bg no-box-shadow buyer'>
            <Grid><h2 className='student-section-title text-left'>VOTRE DOSSIER</h2></Grid>

            <Grid container direction="row" justify="space-between" alignItems='stretch'>
                <Grid item container xs={12} sm={7}>
                    <Grid item xs={12} sm={5} className='steps-container'>
                        <TitleWithImage
                            text={<span>Votre demande <br />est prise en compte !</span>}
                            img={ClapIcon}
                        />
                        {infoLists.map((elem, index) =>
                            <ListStyle key={index} index={index + 1}>
                                <p>{elem}</p>
                            </ListStyle>
                        )}
                    </Grid>
                    <Grid item container xs={12} sm={7} className='subscription-container'>
                        <Grid item container>
                            {/* <h2 className='text-center fullwidth'>Ma demande de logement</h2> */}
                            <TitleWithImage
                                text='Ma demande de logement'
                                img={WenIcon}
                            />
                            <CustomTable data={data} />
                            <Grid item container alignItems='flex-end'>
                                <Btn text='Mettre à jour ma demande' greenColor />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item xs={12} sm={5} className='simulation-container'>
                    <h2 className='text-center fullwidth'>Simuler mon prêt</h2>
                    <FormSimulation />
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
        </AdminContentWrapper >
    )
}

export default withAuth(Dashboard)