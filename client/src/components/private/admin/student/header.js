import React, { useState } from "react";
import { Grid } from '@material-ui/core'
import { useAuth } from '../../../../context/auth';
import Logo from '../../../../assets/img/logo.png'
import LoginIcon from '../../../../assets/img/icons/profile.png'
import { Link } from "react-router-dom";
import Drawer from '../../../elements/drawer'
import Divider from '@material-ui/core/Divider';
import Profile from './profile'
import '../header.css'

const LogOUtInfo = ({ logOut, className = '' }) => (
    <Grid container className={`help ${className}`} justify='flex-end'>
        <div>
            <img src={LoginIcon} style={{ width: 16 }} />
            <span>Aide</span>
        </div>
        <div onClick={logOut} className='pointer'>
            <img src={LoginIcon} style={{ width: 16 }} />

            <span>Déconnexion</span>
        </div>
    </Grid>
)


const Header = () => {
    const [state, setState] = useState({ open: false });
    const { logOut, authUser } = useAuth();

    const handleChange = (name, value) => setState({ ...state, [name]: value });

    return (
        <header className='student-header'>
            <Grid container alignItems='center' className='menu-container'>
                <Grid container item xs={6} alignItems='center'>
                    <div className='logo_container'>
                        <Link to='/dashboard'><img src={Logo} alt='Logo' /></Link>
                    </div>
                </Grid>
                <Grid container item xs={6} alignItems='center' justify='flex-end'>
                    <LogOUtInfo logOut={logOut} className='mobile-hide' />
                    <img src={LoginIcon} className='mobile-show profile-icon' onClick={() => handleChange('open', true)} />
                </Grid>
            </Grid>
            <Drawer handleChange={handleChange} open={state.open}>
                <Grid className='profile-container'>
                    <Profile authUser={authUser} />
                </Grid>
                <Divider />
                <Grid className='profile-logout-container'>
                    <LogOUtInfo logOut={logOut} />
                </Grid>
            </Drawer>
        </header>
    )
}

export default Header