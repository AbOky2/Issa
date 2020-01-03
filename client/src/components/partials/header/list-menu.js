import React from "react";
import { Grid } from '@material-ui/core'
import './header.css'

export default ({ menus, active, onClick }) => (
    <Grid container alignItems='center' className='list-menu'>
        {menus.map(({ name, icon }, i) => (
            <Grid key={i} onClick={() => onClick && onClick(i)} item container justify='center' alignItems='center' className={`same-width text-center ${i == active ? 'active' : ''}`}>
                <img src={icon} alt={name} />
                <h3>{name}</h3>
            </Grid>
        ))}
    </Grid>
)