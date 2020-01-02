import React from "react";
import { Grid } from '@material-ui/core'
import './header.css'

export default ({ menus }) => (
    <Grid container alignItems='center' className='list-menu'>
        {menus.map(({ name, icon, active }, i) => (
            <Grid key={i} item container justify='center' className={`same-width text-center ${active ? 'active' : ''}`}>
                <img src={icon} alt={name} />
                <h3>{name}</h3>
            </Grid>
        ))}
    </Grid>
)