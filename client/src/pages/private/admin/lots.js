import React, { useState } from "react";
import { Grid } from '@material-ui/core'
import Lot from '../../../assets/img/lot.png'
import './lots.css';
import withAuth from '../../../lib/withAuth'
import { AdminContentWrapper } from '../../../components/wrapper'
import { ReactComponent as LotsIcon } from '../../../assets/img/svg/lots.svg'

// excel


const Dashboard = () => {
    const [state] = useState({
        lots: [
            {
                img: Lot,
                name: 'OVATION MAGELLAN',
                slogan: 'Programme neuf à Colombs: Appartements neufs à vendre',
                dimension: '3 à 5 pièces - 62m² à 117m²',
                address: 'Colombes - 97000',
                nb_available_appart: 35,
                location_date: '2ème trimestre 2021'
            },
            {
                img: Lot,
                name: 'OVATION MAGELLAN',
                slogan: 'Programme neuf à Colombs: Appartements neufs à vendre',
                dimension: '3 à 5 pièces - 62m² à 117m²',
                address: 'Colombes - 97000',
                nb_available_appart: 7,
                location_date: '2ème trimestre 2021'
            },
            {
                img: Lot,
                name: 'OVATION MAGELLAN',
                slogan: 'Programme neuf à Colombs: Appartements neufs à vendre',
                dimension: '3 à 5 pièces - 62m² à 117m²',
                address: 'Colombes - 97000',
                nb_available_appart: 0,
                location_date: '2ème trimestre 2021'
            },
        ]
    })

    return (
        <AdminContentWrapper className='lots'>
            <Grid container direction="row" justify="space-between" alignItems='center' className='spacing header'>
                <Grid item container xs={6} justify="flex-start">
                    <Grid item container alignItems='center'>
                        <Grid><span className='header-icon'><LotsIcon /></span></Grid>
                        <Grid><h1>Lots Nexity</h1></Grid>
                    </Grid>
                </Grid>
                <Grid container item xs={6} justify="flex-end">
                    <Grid item container alignItems='center' justify="flex-end">
                        <div className='pointer export'>
                            <span className='icon icon-export'></span>
                            <span className='header-btn'>
                                reload
                            </span>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item className='content-container'>
                {state.lots.map((elem, index) => (
                    <Grid container item key={index} xs={4} className='spacing-wrapper'>
                        <Grid item container className='content'>
                            <Grid><img src={elem.img} alt='Lot' /></Grid>
                            <Grid item xs={12}><h2>{elem.name}</h2></Grid>
                            <Grid item xs={12} className='text-left'><p>{elem.slogan}</p></Grid>
                            <Grid item xs={12} className='text-left dimension'><h3>{elem.dimension}</h3></Grid>

                            <Grid item container alignItems='center' className='description'>
                                <Grid item container alignItems='center'>
                                    <Grid><span className='header-icon'><LotsIcon /></span></Grid>
                                    <Grid><h3>{elem.address}</h3></Grid>
                                </Grid>
                                <Grid item container alignItems='center'>
                                    <Grid><span className='header-icon'><LotsIcon /></span></Grid>
                                    <Grid><h3>{elem.nb_available_appart} logement disponibles</h3></Grid>
                                </Grid>
                                <Grid item container alignItems='center'>
                                    <Grid><span className='header-icon'><LotsIcon /></span></Grid>
                                    <Grid><h3>{elem.location_date}</h3></Grid>
                                </Grid>
                            </Grid>
                            <Grid item container xs={12} justify='center' alignItems='center' className='submit-container'>
                                <Grid item container alignItems='center' justify='center' className='submit'>
                                    <Grid><span className='header-icon'><LotsIcon /></span></Grid>
                                    <Grid><p>Modifier</p></Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </AdminContentWrapper>

        // </WithAuth> 
    )
}

export default withAuth(Dashboard)