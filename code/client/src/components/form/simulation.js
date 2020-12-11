import React, { useState } from "react";
import { Grid } from '@material-ui/core'
import FormGenerator, { FormValidator } from '../formElement/generator';
import forData from './data/simulation'
import Btn from '../elements/btn'

const defaultState = {
    errors: [],
    buy_or_rommer: 'two',
    have_credit: 'true'
}
export default () => {
    const [state, setState] = useState(defaultState);

    const handleChange = (name, value) => setState({ ...state, [name]: value });

    // const resetState = () => setState(defaultState);

    const errors = FormValidator({ fields: forData.create.field, state });
    const submitable = errors.length === 0;
    const onClick = async () => {
        if (!submitable)
            return handleChange('errors', errors);

        handleChange('errors', errors)
        try {
        } catch (err) {
        }
    }

    return (
        <Grid container item xs={12} justify="flex-start">
            <FormGenerator
                fields={forData.create.field}
                state={state}
                errors={state.errors}
                onChange={handleChange}
                settings={forData.create.settings}
            >

                <Btn text='Continuer' greenColor className={submitable ? '' : 'disable'} onClick={onClick} />
            </FormGenerator>
        </Grid>
    )
}