import React, { useState } from "react";
import { Grid } from '@material-ui/core'
import FormGenerator, { FormValidator } from '../formElement/generator';
import forData from './data/simulation'
import Btn from '../elements/btn'

const defaultState = {
    errors: [],
    submitable: false,
    buy_or_rommer: 'two',
    have_credit: 'true'
}
export default () => {
    const [state, setState] = useState(defaultState);

    const handleChange = (name, value) => setState({ ...state, [name]: value });

    const resetState = () => setState(defaultState);

    const onClick = async () => {
        let errors = FormValidator({ fields: forData.create.field, state });

        if (errors.length)
            handleChange('errors', errors);

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

                <Btn text='Continuer' greenColor className={state.submitable ? '' : 'disable'} onClick={onClick} />
            </FormGenerator>
        </Grid>
    )
}