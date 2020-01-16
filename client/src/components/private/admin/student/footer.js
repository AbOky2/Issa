import React from "react";
import { Grid } from '@material-ui/core'
import Logo from '../../../../assets/img/picture.png'
import EmailIcon from '../../../../assets/img/icons/email.png'
import PhoneIcon from '../../../../assets/img/icons/phone.png'
import { isBuyer } from '../../../../utils/user'


import './footer.css'

const CustomLink = ({ children, href }) => href ? <a href={href}>{children}</a> : <>{children}</>
const Column = ({ src, text, href = null }) => (
    <Grid container direction="column" justify="space-between" alignItems="center" className='fullheight'>
        <CustomLink href={href}>
            <Grid item>
                <img src={src} alt='Logo' />
            </Grid>
            <Grid item>
                <p>{text}</p>
            </Grid>
        </CustomLink>
    </Grid>
)

export default ({ userAgent: { firstName = '', lastName = '', role = '', phone = '', email = '' } = {} }) => (
    <footer>
        <Grid container alignItems="center">
            <Grid item className='agent-logo' xs={3} sm='auto'>
                <Grid item container alignItems="center">
                    <Grid item><img src={Logo} alt='Logo' /></Grid>
                    <Grid item className='agent-info'>
                        <p className='mobile-hide'>Ton agent Kit le Nid</p>
                        <h3>{`${firstName} ${firstName}`}</h3>
                    </Grid>
                </Grid>
            </Grid>
            {isBuyer({ role }) && (<Grid item className='icon-list-container' xs={3} sm='auto'>
                <Column src={PhoneIcon} text='Téléphone' href={`tel:${phone}`} />
            </Grid>)}
            <Grid item className='icon-list-container bordered' xs={3} sm='auto'>
                <Column src={EmailIcon} text='Mail' href={`mailto:${email}?Subject=Nouveau%20Message`} />
            </Grid>
        </Grid>
    </footer>
)