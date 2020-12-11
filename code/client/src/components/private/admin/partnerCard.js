import React from 'react'
import { Grid } from '@material-ui/core'
import { ReactComponent as Pen } from '../../../assets/img/svg/pen.svg'

import { ReactComponent as Link } from '../../../assets/img/svg/link.svg'
import { ReactComponent as Trash } from '../../../assets/img/svg/trash.svg'


const Card = ({ data = {}, events = {} }) => (
    <Grid container item xs={12} className='spacing-wrapper'>
        <Grid item container className='content drag-and-drop'>
            <Grid item container className='img-container' alignItems='center'>
                <img src={data.picture ? data.picture[0] : null} alt='Lot' />
            </Grid>
            <Grid item xs={12}><h2>{data.name}</h2></Grid>
            <Grid item xs={12} className='text-left'><p>{data.description}</p></Grid>

            <Grid item container alignItems='center' className='description'>
                <Grid item container alignItems='center'>
                    <Grid><span className='header-icon'><Link /></span></Grid>
                    <Grid><h3>{data.link}</h3></Grid>
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