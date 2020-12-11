import React from "react";
import { Grid } from '@material-ui/core';

export default ({ data = [] }) => (
    <Grid item container className='custom-table'>
        {data.map((elem, i) => (elem[0] && elem[1] ?
            <Grid item container key={i} justify='space-between' className='custom-table-cell-container'>
                <Grid item className='text-left left-side'>{elem[0]}</Grid>
                <Grid item className='text-right right-side'>{elem[1]}</Grid>
            </Grid> : ''
        ))}
    </Grid>
)