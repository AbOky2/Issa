import React from 'react'
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types'
import { FormElementWrapper } from './index'
import { makeStyles } from '@material-ui/styles';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles(theme => ({
    textField: {
        [`& fieldset`]: {
            borderRadius: '3px',
            border: 'solid 1px #c7cfd6',
            // border: 0,
            // boxShadow: '0px 2px 5px #bfbfbf',
        },
    }
}))

const strinkTypes = ['date', 'datetime', 'time'];

const TextFieldComp = ({ name, label, type, value, onChange, showLabel, unableUnderline = false, unableBoxShadow = true, error = true, labelPosition = {}, icon, fullIcon, withGrayScaleIcon, ...elemProps }) => {
    const classes = useStyles();
    const variant = unableUnderline ? "standard" : "outlined";
    let inputProps = {}
    const props = elemProps.props
    const adornment = props && props.adornment ? props.adornment : null;
    if (adornment) {
        const key = adornment.position === 'end' ? 'endAdornment' : 'startAdornment';
        inputProps[key] = <InputAdornment>{adornment.value}</InputAdornment>
    }

    return (
        <FormElementWrapper value={value} label={label} showLabel={showLabel} labelPosition={labelPosition} icon={icon} fullIcon={fullIcon} withGrayScaleIcon={withGrayScaleIcon}>
            <TextField
                error={error}
                multiple
                type={type}
                label={showLabel ? '' : !strinkTypes.includes(type) && label}
                multiline={type === 'textarea'}
                fullWidth
                // floatingLabelFixed={true}
                value={value}
                onChange={onChange(name)}
                InputProps={inputProps}
                className={unableBoxShadow ? classes.textField : ''}
                rows={8}
                variant={variant}
                {...elemProps}
                rowsMax={10}
            />
        </FormElementWrapper>
    )
}


TextFieldComp.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    type: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    showLabel: PropTypes.bool,
    unableUnderline: PropTypes.bool,
    unableBoxShadow: PropTypes.bool,
}
export default TextFieldComp