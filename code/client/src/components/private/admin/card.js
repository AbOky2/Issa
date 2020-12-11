import React from 'react'
import { ReactComponent as AddIcon } from '../../../assets/img/svg/add.svg'
import { Grid } from '@material-ui/core'

const AddCard = ({ text = 'Ajouter un lot', onClick }) => (
    <Grid container item xs={3} ms={4} className='spacing-wrapper add-card'>
        <Grid item container className='content' justify='center' alignItems='center'>
            <Grid item container xs={12} className='submit-container'>
                <Grid item container xs={12} alignItems='center' justify='center' className='add-text'>
                    <Grid><p>{text}</p></Grid>
                </Grid>
                <Grid item container xs={12} alignItems='center' justify='center' className='submit' onClick={onClick}>
                    <Grid><span className='header-icon'><AddIcon /></span></Grid>
                    <Grid><p>Ajouter</p></Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
)
export { AddCard }