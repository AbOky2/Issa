import React from "react";
import { Link } from "react-router-dom";
import { Grid } from '@material-ui/core'
import DropDownMenu from '../../elements/dropdown';
import Avatar from '../../../assets/img/picture.png'
import Badge from '@material-ui/core/Badge';
import { useAuth } from "../../../context/auth";

import './header.css'


const ProfileMenu = ({ Avatar }) => (
    <Grid container alignItems='center' className='dropdownContainer'>
        <Grid><span>Raphael</span></Grid>
        <Grid><img src={Avatar} alt='Avatar' /></Grid>
    </Grid>
)

const Header = () => {
    const { setAuthTokens, setAuthUser } = useAuth();

    const logOut = () => {
        setAuthTokens(null);
        setAuthUser(null)
    };

    const childList = [{ value: 'logout', onClick: logOut }]

    return (
        <header>
            <Grid container >
                <Grid item container xs={12} alignItems='center' justify='flex-end' className='menu-container'>
                    {/* <Grid item container xs={12} alignItems="center" justify='flex-end' className='text-right'> */}
                    <Grid item className='notification'>
                        <Badge badgeContent={4} color="secondary">
                            <img src={Avatar} alt='Avatar' />
                        </Badge>
                    </Grid>
                    <DropDownMenu
                        menuTitle={<ProfileMenu Avatar={Avatar} />}
                        childList={childList}
                    />
                    {/* </Grid> */}
                </Grid>
            </Grid>
        </header>
    )
}

export default Header