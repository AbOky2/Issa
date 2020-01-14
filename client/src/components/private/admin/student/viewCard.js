import React from 'react'
import { Grid } from '@material-ui/core'
import { Link } from "react-router-dom";
import Btn from '../../../elements/btn'
import RedNexity from '../../../../assets/img/icons/red-nexity.png'
import InfoIcon from '../../../../assets/img/icons/info.png'

import './card.css'

const status = {
    none: 'En attente',
    waiting: 'En attente',
    done: 'Matché'
}

const StatusDisplay = ({ name }) => (
    <Grid item className={`status ${name} auto`}>
        <span></span>
        <p>{status[name]}</p>
    </Grid>
)

export default ({ data = [] }) => (
    <Grid container className='offers'>
        <h2>Nous avons transmis ta demande aux agences imobiliaire les plus proches !</h2>
        <Grid container item className='list-container'>
            {data && data.map((e = {}, i) => (
                <Grid container item key={i} className='list text-left' direction='row'>
                    <Grid item className='location-container'>
                        <h3>{e.name}</h3>
                        <span>{e.address}</span>
                    </Grid>
                    <Grid container item alignItems="center" className='info-container-container'>
                        <Grid item className='info-container text-center'>
                            <Grid item><img src={InfoIcon} /></Grid>
                            <Grid item><span>Info</span></Grid>
                        </Grid>
                        <StatusDisplay name={e.status} />
                    </Grid>
                </Grid>
            ))}
        </Grid>
        <Grid container item className='footer' alignItems="center" justify="space-between">
            <Grid>
                <div>
                    <img src={RedNexity} className='mobile-none' />
                    <p>Tu peux aussi chercher des annonces sur le site Nexity.fr</p>
                </div>
            </Grid>
            <Grid className='link-container'>
                <a href='http://nexity.fr' target='_blank'>Acceder à Nexity.fr</a>
            </Grid>
        </Grid>
    </Grid>
)