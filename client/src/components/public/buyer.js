import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import Wrapper from './index'
import HousingIcon from '../../assets/img/illustrations/budget.svg'


export default ({ handlePrev, handleNext }) => (
    <Wrapper handlePrev={handlePrev} handleNext={handleNext}>
        <Grid className='fullwidth'><img src={HousingIcon} alt='Budget' /></Grid>
        <Grid className='fullwidth'><h2>Saisis ton budget maximum / mois</h2></Grid>
    </Wrapper>
)