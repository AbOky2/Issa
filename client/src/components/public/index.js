import React from 'react'
import { Grid } from '@material-ui/core'
import Btn from '../elements/btn'
import './index.css'

const Wrapper = ({ children, handlePrev, handleNext, img, alt = '', title }) => (
    <Grid container direction="column" justify="center" alignItems="center" className='public-slider-wrapper'>
        {img ? <Grid item className='fullwidth img-container'><img src={img} alt={alt} /></Grid> : ''}
        {title ? <Grid item className='fullwidth'><h2>{title}</h2></Grid> : ''}
        <Grid item>
            {children}
        </Grid>
        <Grid item container xs={12} justify='center' className='btn-wrapper-container'>
            <Grid className='btn-wrapper cancel-container'><Btn text='Annuler' onClick={handlePrev} /></Grid>
            <Grid className='btn-wrapper validate-container'>{handleNext ? <Btn text='Valider' onClick={handleNext} /> : ''}</Grid>
        </Grid>
    </Grid>
)
export default Wrapper