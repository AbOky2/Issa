import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import DisplayMenu from '../partials/header/list-menu'

export default ({ menus, contents, clickableMenu = false }) => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleNavigate = (i) => {
        setActiveStep(i);
    };

    const CustomComp = contents[activeStep] || contents[0];

    return (
        <Grid>
            <Grid className='stepper-header'>
                <DisplayMenu menus={menus} active={activeStep} onClick={clickableMenu ? handleNavigate : false} />
            </Grid>

            <Grid className='stepper-content'>
                <CustomComp handleBack={handleBack} handleNext={handleNext} />
            </Grid>
        </Grid>
    )
}