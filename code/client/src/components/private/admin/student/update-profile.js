import React from 'react'
import { Grid } from '@material-ui/core'
import Btn from '../../../elements/btn'
import IconHome from '../../../../assets/img/icons/home.png'

import './card.css'

export default ({ }) => (
    <Grid container className='update-profile'>
        <Grid container item className='flex-reverse text-center'>
            <Grid item className='home-icon mobile-auto'>
                <img src={IconHome} />
            </Grid>
            <Grid item className='home-icon-text mobile-auto'>
                <h2 className='mobile-text-left'>Tu souhaites devenir propriétaires ?</h2>
                <p className='mobile-text-left'>Tu viens de commencer ton nouveau travail. N’attends pas pour devenir propriétaires !</p>
            </Grid>
        </Grid>
        <Grid item xs={12}>

            <Btn text='Mettre à jour mon profil' greenColor />
            <Btn text='Mettre à jour mon profil' opaqueGreenColor className='double-btn' />
        </Grid>
    </Grid>
)