import React from "react";
import { Grid } from '@material-ui/core'
import './header.css'

export default ({ menus, active, clickableMenu, onClick }) => (
    <Grid container alignItems='center' className='list-menu'>
        {menus.map(({ name, icon }, i) => (
            <Grid key={i} item container justify='center' alignItems='center'
                onClick={() => clickableMenu && onClick && onClick(i)}
                className={`same-width text-center ${i == active ? 'active' : ''} ${clickableMenu ? 'pointer' : ''}`}
            >
                <img src={icon} alt={name} />
                <h3>{name}</h3>
            </Grid>
        ))}
    </Grid>
)