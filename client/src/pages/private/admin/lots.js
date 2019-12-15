import React, { useState } from "react";
import { Grid } from '@material-ui/core'
import Lot from '../../../assets/img/lot.png'
import './lots.css';
import withAuth from '../../../lib/withAuth'
import { AdminContentWrapper } from '../../../components/wrapper'
import { ReactComponent as LotsIcon } from '../../../assets/img/svg/lots.svg'

// excel


const Dashboard = () => {
    const [state, setState] = useState({
        lots: [
            { img: Lot, name: 'OVATION MAGELLAN', location: 'Colombes - 97000', nb_available_appart: 35, location_date: '2ème trimestre 2021' },
            { img: Lot, name: 'OVATION MAGELLAN', location: 'Colombes - 97000', nb_available_appart: 7, location_date: '2ème trimestre 2021' },
            { img: Lot, name: 'OVATION MAGELLAN', location: 'Colombes - 97000', nb_available_appart: 0, location_date: '2ème trimestre 2021' },
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
                    <Grid container item key={index} xs={4} alignItems="center" justify="center" className='spacing-wrapper'>
                        <Grid item container alignItems='center' className='content'>
                            <Grid><img src={elem.img} /></Grid>
                            <Grid item container alignItems='center'>
                                <Grid><span className='header-icon'><LotsIcon /></span></Grid>
                                <Grid><h3>{elem.location}</h3></Grid>
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
                    </Grid>
                ))}
            </Grid>
        </AdminContentWrapper>

        // </WithAuth> 
    )
}

export default withAuth(Dashboard)