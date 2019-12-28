import React from 'react'
import { Grid } from '@material-ui/core'
import { Link } from "react-router-dom";
import Btn from '../../../elements/btn'
import RedNexity from '../../../../assets/img/icons/red-nexity.png'
import InfoIcon from '../../../../assets/img/icons/info.png'

import './card.css'

const status = {
    waiting: 'En attente',
    done: 'Matché'
}

const StatusDisplay = ({ name }) => (
    <div className={`status ${name} auto`}>
        <span></span>
        <p>{status[name]}</p>
    </div>
)

export default ({ data = [] }) => (
    <Grid container className='offers'>
        <h2>Nous avons transmis ta demande aux agences imobiliaire les plus proches !</h2>
        <Grid container item className='list-container'>
            {data.map((e, i) => (
                <Grid container item key={i} className='list text-left' direction='row'>
                    <Grid item>
                        <h3>{e.name}</h3>
                        <span>{e.address}</span>
                    </Grid>
                    <Grid container item>
                        <Grid item className='info-container' direction='column' justify="space-between">
                            <Grid item><img src={InfoIcon} /></Grid>
                            <Grid item><span>Info</span></Grid>
                        </Grid>
                        <Grid><StatusDisplay name={e.status} /></Grid>
                    </Grid>
                </Grid>
            ))}
        </Grid>
        <Grid container item className='footer'>
            <div>
                <img src={RedNexity} />
            </div>
            <div>
                <p>Tu peux aussi chercher des annonces sur le site Nexity.fr</p>
            </div>
            <div>
                <a href='http://google.com' target='_blank'>Acceder à Nexity.fr</a>
            </div>
        </Grid>
    </Grid>
)