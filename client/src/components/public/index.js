import React, { useState } from 'react'
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { Grid } from '@material-ui/core'
import { isArray } from '../../utils/converAndCheck'
import { toggleArray } from '../../utils/converAndCheck'
import Btn from '../elements/btn'
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import './index.css'

const useStyles = makeStyles(theme => ({
    formControl: {
        minWidth: 200,
        borderRadius: '4px',
        border: 'solid 4px #f2f2f2',
        backgroundColor: ' #ffffff',
        ['&:focus']: {
            backgroundColor: 'none'
        }
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
const CardList = ({ list, onClick, selected }) => (
    <Grid container className='card-list-container'>
        {list && list.map(({ img, text, alt, slug }, i) => {
            const isSelected = isArray(selected) && selected.includes(slug);
            return (
                <Grid container item key={i} className={`same-width card-list ${isSelected ? 'selected' : ''}`} onClick={() => onClick(slug)}>
                    <Grid item xs={12}>
                        <img src={img} alt={alt} />
                    </Grid>
                    <Grid container item xs={12} alignItems='flex-end'>
                        <h3>{text}</h3>
                    </Grid>
                </Grid>
            )
        })}
    </Grid>
)

const ListCardWrapper = ({ handlePrev, handleNext, name, isMultiple = false, list = [], img, alt, title }) => {
    const [selected, setSelected] = useState([]);

    const handleNextClick = () => {
        if (!selected.length)
            return;
        handleNext && handleNext(name, isMultiple ? selected : selected[0])
    }
    const handleChange = (id) => setSelected(isMultiple ? toggleArray(selected, id) : [id]);

    return (
        <Wrapper handlePrev={handlePrev} handleNext={handleNextClick} img={img} alt={alt || title} title={title}>
            <CardList list={list} onClick={handleChange} selected={selected} />
        </Wrapper>
    )
}

const Wrapper = ({ children, handlePrev, handleNext, img, alt = '', title }) => (
    <Grid container direction="column" justify="center" alignItems="center" className='public-slider-wrapper'>
        {img ? <Grid item className='fullwidth img-container'><img src={img} alt={alt} /></Grid> : ''}
        {title ? <Grid item className='fullwidth'><h2>{title}</h2></Grid> : ''}
        <Grid item>
            {children}
        </Grid>
        <Grid item container xs={12} justify='center' className='btn-wrapper-container'>
            <Grid className='btn-wrapper cancel-container'>{handlePrev ? <Btn text='Annuler' onClick={handlePrev} /> : ''}</Grid>
            <Grid className='btn-wrapper validate-container'>{handleNext ? <Btn text='Valider' onClick={handleNext} /> : ''}</Grid>
        </Grid>
    </Grid>
)

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
const CustomSelect = ({ children, value, onChange }) => {
    const classes = useStyles();

    return (
        <FormControl variant="filled" className={classes.formControl}>
            <Select
                native
                value={value}
                onChange={onChange}
                variant="outlined"
                inputProps={{
                    name: 'age',
                    id: 'filled-age-native-simple',
                }}
            >{children}</Select>
        </FormControl>
    )
}
export default Wrapper
export { ListCardWrapper, CustomNumerber, CustomSelect }