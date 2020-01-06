import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import DisplayMenu from '../partials/header/list-menu'

export default ({ menus, contents, clickableMenu = false, data, handleChange }) => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = (name, value) => {
        if (activeStep == menus.length - 1)
            if (activeStep > contents.length - 2)
                return;
        setActiveStep(prevActiveStep => prevActiveStep + 1);
        name && handleChange && handleChange(name, value)
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
                <DisplayMenu menus={menus} active={activeStep} clickableMenu={clickableMenu} onClick={handleNavigate} />
            </Grid>

            <CustomComp data={data} handlePrev={handlePrev} handleNext={handleNext} handleChange={handleChange} />
        </Grid>
    )
}