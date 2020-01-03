import React from 'react'
import { Grid } from '@material-ui/core'
import { ReactComponent as Logo } from '../../assets/img/svg/logo.svg'
import './index.css'

const PublicHeader = () => (
    <Grid container className='public-header' alignItems='center'>
        <Logo />
    </Grid>
)

const AdminContentWrapper = ({ children, className = '' }) => (
    <Grid className={`admin-content-container ${className}`}>{children}</Grid>
)
const PublicContentWrapper = ({ children, className = '' }) => (
    <Grid className={`public-content-container ${className}`}>
        <PublicHeader />
        {children}
    </Grid>
)

export { AdminContentWrapper, PublicContentWrapper }