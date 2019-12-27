import React from "react";
import { Grid } from '@material-ui/core'
import { useAuth } from '../../../../context/auth';
import Logo from '../../../../assets/img/logo.png'
import { Link } from "react-router-dom";
import '../header.css'


const Header = () => {
    const { logOut } = useAuth();

    return (
        <header className='student-header'>
            <Grid container xs={12} alignItems='center' className='menu-container'>
                <Grid container item xs={6} alignItems='center'>
                    <div className='logo_container'>
                        <Link to='/dashboard'><img src={Logo} alt='Logo' /></Link>
                    </div>
                </Grid>
                <Grid container item xs={6} alignItems='center' justify='flex-end'>
                    <Grid className='help'><span>Aide</span></Grid>
                    <Grid onClick={logOut} className='pointer'>Déconnexion</Grid>
                </Grid>
            </Grid>
        </header>
    )
}

export default Header