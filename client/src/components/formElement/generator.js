import React from 'react'
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';

import Wysiwyg from './wysiwyg'
import Select from './select';
import Radio from './radio';
import Phone from './phone';
import Upload from './upload';
import Checkbox from './checkbox';
import Date from './date';
import TextField from './text-field'
import { isValideEmail } from '../../utils/converAndCheck'
import './index.css'
/*

    <FormGenerator
        fields={fieldsMarque}
        state={state}
        onChange={onChange}
        errors={[]}
        settings={{ showLabel: { xs: 6 } }}
    />
*/
const styles = theme => ({
    root: {
        margin: 0,
        flexGrow: 1,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    paper: {
        height: 140,
        width: 100,
    },
    formControl: {
        padding: theme.spacing(1),
        width: '100%',
    },
    inputControl: {
        backgoundColor: 'red'
    },
    formLabel: {
        paddingLeft: '1rem'
    },
    InputLabelProps: {
        paddingLeft: '1rem'
    },
    control: {
        padding: theme.spacing(1),
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
});


const FormGenerator = ({ children, fields, classes, state, onChange, settings = {}, errors = [] }) => {

    const textTypes = ['input', 'text', 'password', 'email', 'number', 'textarea', 'date', 'datetime-local'],
        selectTypes = ['select'],
        spacing = 4,
        defaultDimension = { xs: 12 };

    const handleChange = name => ({ target: { value } }) => onChange(name, value)
    const showLabel = settings && settings.showLabel;
    const labelSpacing = showLabel ? settings.showLabel : defaultDimension;

    return (
        <form onSubmit={(e) => { e.preventDefault(); }}>
            <FormControl className={classes.container} required={true}>
                <Grid container item className={classes.root} spacing={spacing} alignItems="center" xs={12}>
                    {fields && fields.map((elem, key) => {
                        const dimentions = elem.dimension ? elem.dimension : defaultDimension;
                        const elemProps = elem.props;
                        const inputDefaultProps = elemProps && elemProps.defaultValue ? elemProps.defaultValue : '';
                        const error = state.errors && state.errors.includes(elem.name);
                        const elemSettings = settings;
                        const containerStyle = elem.type == 'checkbox' ? { paddingTop: 0, paddingBottom: 0 } : elem.type != 'hidden' ? { paddingTop: 10, paddingBottom: 10 } : { padding: 0 }
                        const containerClassName = elem.containerClassName || '';

                        return (
                            <Grid key={key} item {...dimentions} style={containerStyle} className={`form-element-row no-left-right-padding ${containerClassName}`}>
                                {textTypes.includes(elem.type) && (
                                    <TextField
                                        error={error}
                                        onChange={handleChange}
                                        showLabel={showLabel}
                                        value={state[elem.name] || inputDefaultProps}
                                        {...{ ...elem, ...elemSettings }}
                                    />
                                )
                                    || elem.type == 'dateYear' && (
                                        <Date
                                            error={error}
                                            value={state[elem.name]}
                                            onChange={onChange}
                                            showLabel={showLabel}
                                            {...elem}
                                        />
                                    )
                                    || elem.type == 'phone' && (
                                        <Phone
                                            error={error}
                                            value={state[elem.name]}
                                            onChange={onChange}
                                            showLabel={showLabel}
                                            {...elem}
                                        />
                                    )
                                    || elem.type == 'wysiwyg' && (
                                        <Wysiwyg
                                            error={error}
                                            value={state[elem.name]}
                                            onChange={onChange}
                                            showLabel={showLabel}
                                            {...elem}
                                        />
                                    )
                                    || selectTypes.includes(elem.type) && (
                                        <Select
                                            error={error}
                                            onChange={handleChange}
                                            showLabel={showLabel}
                                            value={state[elem.name] || inputDefaultProps}
                                            elemProps={elemProps}
                                            list={elem.list}
                                            {...{ ...elem, ...elemSettings }}
                                        />
                                    )
                                    || elem.type == 'img' && (
                                        <Grid container>
                                            {showLabel && <Grid item {...labelSpacing}>{elem.label}</Grid>}

                                            <Grid item {...labelSpacing}>

                                                <div>
                                                    <img src={state[elem.name]} {...elemProps} onChange={onChange} />
                                                </div>
                                            </ Grid>
                                        </ Grid>
                                    )
                                    || elem.type == 'radio' && (
                                        <Radio

                                            error={error}
                                            onChange={handleChange}
                                            showLabel={showLabel}
                                            value={state[elem.name] || inputDefaultProps}
                                            {...{ ...elem, ...elemSettings }}
                                        // list={elem.list}

                                        // name={elem.name}
                                        // label={showLabel ? '' : elem.label}
                                        // value={state[elem.name]}
                                        // list={elem.list} onChange={onChange} {...elemProps}
                                        />
                                        // <Radio name={elem.name} label={showLabel ? '' : elem.label} value={state[elem.name]} list={elem.list} onChange={onChange} {...elemProps} />

                                    )
                                    || elem.type == 'checkbox' && (
                                        <Checkbox name={elem.name} label={elem.label} value={state[elem.name] || []} onChange={onChange} list={elem.list} {...elemProps} />
                                    )
                                    || elem.type == 'upload' && (
                                        <Upload
                                            error={error}
                                            name={elem.name}
                                            defaultValue={state[elem.name]}
                                            label={elem.label}
                                            showLabel={showLabel}
                                            value={state[elem.name]}
                                            onChange={value => onChange(elem.name, value)}
                                            {...{ ...elem, ...elemSettings }}

                                        />
                                    )
                                }
                            </Grid>
                        )
                    }
                    )}
                </Grid>
            </FormControl>
            {children}
        </form>
    )
}

FormGenerator.propTypes = {
    fields: PropTypes.arrayOf(PropTypes.object).isRequired,
    state: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.array,
    settings: PropTypes.object,
    toggleList: PropTypes.func,
    align: PropTypes.string
}

export default withStyles(styles)(FormGenerator);


const excludeValueTypes = ['dateYear', 'upload'];

const FormValidator = ({ fields, state }) => {
    const errors = [];

    if (!fields || !fields.length)
        return false;
    for (let index = 0, elem, value; index < fields.length; index++) {
        elem = fields[index];
        value = state[elem.name];

        if (elem.required) {
            if ((elem.type == 'email' && !isValideEmail(value))) {
                errors.push(elem.name)
            }
            else if (!value || (!value.length && !excludeValueTypes.includes(elem.type))) {
                errors.push(elem.name)
            }
        }
    }
    return (errors);
}

const LeanForm = ({ fields, state }) => {
    const newState = {}
    if (!fields || !fields.length)
        return (newState);
    for (let index = 0, elem, value; index < fields.length; index++) {
        elem = fields[index];
        value = state[elem.name];

        if (state.hasOwnProperty(elem.name))
            newState[elem.name] = value;
    }
    return (newState);
}
export { LeanForm, FormValidator }
