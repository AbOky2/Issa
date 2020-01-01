import React from "react";
import { Grid } from '@material-ui/core'
import { useAuth } from '../../../../context/auth';
import Logo from '../../../../assets/img/picture.png'
import { Link } from "react-router-dom";
import EmailIcon from '../../../../assets/img/icons/email.png'
import TchatIcon from '../../../../assets/img/icons/tchat.png'
import PhoneIcon from '../../../../assets/img/icons/phone.png'

import './footer.css'

const Column = ({ src, text }) => (
    <Grid container direction="column" justify="space-between" alignItems="center" className='fullheight'>
        <Grid item>
            <img src={src} alt='Logo' />
        </Grid>
        <Grid item>
            <p>{text}</p>
        </Grid>
    </Grid>
)

export default ({ userAgent: { firstName = '', lastName = '' } = {} }) => (
    <footer>
        <Grid container xs={12} alignItems="center">
            <Grid item className='agent-logo'>
                <Grid item container alignItems="center">
                    <Grid item ><img src={Logo} alt='Logo' /></Grid>
                    <Grid item>
                        <p>Ton agent Kit le Nid</p>
                        <h3>{`${firstName} ${firstName}`}</h3>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className='icon-list-container'>
                <Column src={PhoneIcon} text='Téléphone' />
            </Grid>
            <Grid item className='icon-list-container bordered'>
                <Column src={EmailIcon} text='Mail' />
            </Grid>
            <Grid item className='icon-list-container'>
                <Column src={TchatIcon} text='Chat' />
            </Grid>
        </Grid>
    </footer>
)