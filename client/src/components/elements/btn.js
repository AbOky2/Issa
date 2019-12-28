import React from "react";
import { Grid } from '@material-ui/core';
import { Link } from "react-router-dom";

export default ({ onClick, text = '', redirect = false, href = null, full = true, auto = true, grayColor = false, greenColor = false, opaqueGreenColor, className = '' }) => {
    let fields = { full, auto, grayColor, greenColor, opaqueGreenColor },
        elem;

    className += ' btn-container ' + Object.keys(fields).filter(e => fields[e] == true).join(' ')
    if (href)
        elem = redirect ? <a href={href} target='_blank'>{text}</a> : <Link to={href}>{text}</Link>
    else
        elem = <span>{text}</span>

    return (
        <Grid item container justify='center' alignItems='center' className={className} onClick={onClick}>
            <Grid item container alignItems='center' justify='center' className='btn'>
                <Grid>{elem}</Grid>
            </Grid>
        </Grid>
    )
}