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
        <Grid><img src={Avatar} /></Grid>
    </Grid>
    // <div className='dropdownContainer'>


    // </div>
)

const Header = () => {
    const { setAuthTokens, setAuthUser } = useAuth();

    const logOut = () => {
        return (alert('Logout'))
        setAuthTokens(null);
        setAuthUser(null)
    };

    const childList = [{ value: <Link to='/dashboard/buy'>test</Link> }, { value: 'logout', onClick: logOut }]

    return (
        <header>
            <Grid container>
                <Grid item container xs={12} justify='flex-end'>
                    {/* <Grid item container xs={12} alignItems="center" justify='flex-end' className='text-right'> */}
                    <div className='notification'>
                        <Badge badgeContent={4} color="secondary">
                            <img src={Avatar} />
                        </Badge>
                    </div>
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