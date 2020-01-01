import React from 'react'
import { Grid } from '@material-ui/core'
import Btn from '../../../elements/btn'
import './card.css'

const Card = ({ data = {}, events = {} }) => (
    <Grid container item xs={12} className='spacing-wrapper'>
        <Grid item container className='content' justify="space-around">
            <Grid item container className='img-container' alignItems='center'>
                <img src={data.picture ? data.picture[0] : null} alt='Lot' />
            </Grid>
            <Grid item xs={12}><h2>{data.name}</h2></Grid>
            <Grid item xs={12} className='text-left'><p>{data.description}</p></Grid>
            <Btn text='Profiter de l’offre' href={data.link} opaqueGreenColor redirect />
        </Grid>
    </Grid>
)
export default Card