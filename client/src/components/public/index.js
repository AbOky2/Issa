import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import Btn from '../elements/btn'
import './index.css'

const Wrapper = ({ children, handlePrev, handleNext }) => (
    <Grid container className='public-slider-wrapper' alignItems="stretch">
        <Grid item xs={12}>
            {children}
        </Grid>
        <Grid item container xs={12} justify='center'>
            <Grid className='btn-wrapper cancel-container'><Btn text='Annuler' onClick={handlePrev} /></Grid>
            <Grid className='btn-wrapper validate-container'>{handleNext ? <Btn text='Valider' onClick={handleNext} /> : ''}</Grid>
        </Grid>
    </Grid>
)
export default Wrapper