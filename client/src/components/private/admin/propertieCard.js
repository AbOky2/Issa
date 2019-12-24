import React from 'react'
import { Grid } from '@material-ui/core'
import { ReactComponent as Pen } from '../../../assets/img/svg/pen.svg'
import { ReactComponent as LotsIcon } from '../../../assets/img/svg/lots.svg'
import { ReactComponent as AddIcon } from '../../../assets/img/svg/add.svg'

import { ReactComponent as Trash } from '../../../assets/img/svg/trash.svg'
import { ReactComponent as Map } from '../../../assets/img/svg/map.svg'
import { ReactComponent as Calendar } from '../../../assets/img/svg/calendar.svg'


const Card = ({ data = {}, events = {} }) => (
    <Grid container item xs={12} className='spacing-wrapper'>
        <Grid item container className='content drag-and-drop'>
            <Grid item container className='img-container' alignItems='center'>
                <img src={data.picture ? data.picture[0] : null} alt='Lot' />
            </Grid>
            <Grid item xs={12}><h2>{data.name}</h2></Grid>
            <Grid item xs={12} className='text-left'><p>{data.slogan}</p></Grid>
            <Grid item xs={12} className='text-left dimension'><h3>{data.dimension}</h3></Grid>

            <Grid item container alignItems='center' className='description'>
                <Grid item container alignItems='center'>
                    <Grid><span className='header-icon'><Map /></span></Grid>
                    <Grid><h3>{data.address}</h3></Grid>
                </Grid>
                <Grid item container alignItems='center'>
                    <Grid><span className='header-icon'><LotsIcon /></span></Grid>
                    <Grid><h3>{data.nb_available_appart} logement disponibles</h3></Grid>
                </Grid>
                <Grid item container alignItems='center'>
                    <Grid><span className='header-icon'><Calendar /></span></Grid>
                    <Grid><h3>{data.nb_available}</h3></Grid>
                </Grid>
            </Grid>
            <Grid item container xs={12} justify='center' alignItems='center' className='submit-container'>
                <Grid item container alignItems='center' justify='center' className='submit' onClick={() => events.handleUpdate && events.handleUpdate(data._id)}>
                    <Grid><span className='header-icon'><Pen /></span></Grid>
                    <Grid><p>Modifier</p></Grid>
                </Grid>
                <Grid item container alignItems='center' justify='center' className='submit delete-btn' onClick={() => events.handleRemove && events.handleRemove(data._id)}>
                    <Grid><span className='header-icon'><Trash /></span></Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
)
export default Card