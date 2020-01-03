import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import DisplayMenu from '../partials/header/list-menu'

export default ({ menus, contents, clickableMenu = false }) => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        if (activeStep == menus.length - 1)
            return;
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handlePrev = () => {
        if (activeStep == 0)
            return;
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

            <CustomComp handlePrev={handlePrev} handleNext={handleNext} />
        </Grid>
    )
}