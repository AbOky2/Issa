import React from 'react'
import PropTypes from 'prop-types'
import { FormElementWrapper } from './index'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css'

const PhoneComp = ({ name, label, value, countries = 'fr', onChange, showLabel, variant, unableUnderline, unableBoxShadow = true, error = false, labelPosition = {}, elemProps = {} }) => {
    if (unableBoxShadow)
        elemProps.style = { ...{ boxShadow: '0px 2px 5px #bfbfbf' }, ...elemProps.style };
    if ((!unableBoxShadow && !unableUnderline) || variant == 'outlined')
        variant = 'outlined';

    return (
        <FormElementWrapper label={label} showLabel={showLabel} labelPosition={labelPosition}>
            <div className={`phone-parent phone-container ${error ? 'error' : ''}`}>
                <PhoneInput
                    country='fr'
                    onlyCountries={['fr']}
                    value={value}
                    onChange={(value) => onChange(name, value)}
                />
            </div>
        </FormElementWrapper>
    )
}

PhoneComp.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    countries: PropTypes.array.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    showLabel: PropTypes.bool,
    unableUnderline: PropTypes.bool,
    unableBoxShadow: PropTypes.bool,
}
export default PhoneComp 