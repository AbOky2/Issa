import React, { useState } from 'react'
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import HousingIcon from '../../assets/img/illustrations/budget.svg';
import InputAdornment from '@material-ui/core/InputAdornment';
import Wrapper from './index'
import Btn from '../elements/btn'

const CustomNumerber = ({ value, handleChange, handleDown, handleUp }) => (
    <Grid container justify='center' alignItems='stretch' className='fullwidth'>
        <Grid><Btn text='-' onClick={handleDown} className='no-margin fullheight custom-btn moins' /></Grid>
        <Grid>
            <TextField
                type='number'
                variant="outlined"
                className='custom-input'
                value={value}
                InputProps={{ endAdornment: <InputAdornment>€</InputAdornment> }}
                onChange={({ target: { value } }) => handleChange(value)}
            />
        </Grid>

        <Grid><Btn text='+' onClick={handleUp} className='no-margin fullheight custom-btn plus' /></Grid>
    </Grid>
)

export default ({ handlePrev, handleNext }) => {
    const [budget, setBudget] = useState(500);
    const increment = 10;
    const handleNextClick = () => {
        handleNext && handleNext()
    }
    const handleChange = (value) => setBudget(value);
    const handleUp = () => setBudget(budget => budget + increment);
    const handleDown = () => budget - increment >= 0 && setBudget(budget => budget - increment);

    return (
        <Wrapper handlePrev={handlePrev} handleNext={handleNextClick} img={HousingIcon} alt='Buget' title='Saisis ton budget maximum / mois'>
            <CustomNumerber
                value={budget}
                handleChange={handleChange}
                handleUp={handleUp}
                handleDown={handleDown}
            />
        </Wrapper>
    )
}