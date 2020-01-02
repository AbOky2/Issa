import React from 'react';
import PropTypes from 'prop-types'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import { FormElementWrapper } from './index'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import './index.css'

const useStyles = makeStyles({
    root: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    icon: {
        position: 'absolute',
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    checkedIcon: {
        backgroundColor: 'white',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,

            backgroundImage: `radial-gradient(#F13F4B,#F13F4B 48%,transparent 52%)`,
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#106ba3',
        },
    },
});

function StyledRadio(props) {
    const classes = useStyles();

    return (
        <Radio
            className={clsx(classes.root, 'checker-container')}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} toto='toto' />}
            {...props}
        />
    );
}

const styles = {
    root: {
        display: 'flex',
    },
    radio: {
        '&$checked': {
            color: 'white',
            backgroundColor: '#06ae88'
        }
    },
};

const RadioType = ({ classes, list, label, showLabel, labelPosition, value, onChange, name = '' }) => (
    <FormElementWrapper value={value} label={label} showLabel={showLabel} labelPosition={labelPosition}>
        <FormControl component="fieldset" className={clsx(classes.formControl, 'fullwidth')}>
            <RadioGroup onChange={onChange(name)} value={value + ''} row className='radio-container'>
                {list && list.map((elem, key) => (
                    <FormControlLabel key={key} value={elem.value + ''}
                        control={
                            <StyledRadio classes={{ root: classes.radio, checked: classes.checked }} />
                        }
                        className={elem.value == value ? 'checked ' : ''}
                        label={elem.name}
                    />
                )
                )}
            </RadioGroup>
        </FormControl>
    </FormElementWrapper>
)

RadioType.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    value: PropTypes.string,
}

export default withStyles(styles)(RadioType)
