import React from "react";
import { Grid } from '@material-ui/core';
import Logo from '../../../../assets/img/picture.png'
import './profile.css'
import CustomTable from '../../../elements/table'
import Btn from '../../../elements/btn'

export default ({ authUser: { firstName = '', lastName = '', age = '', school = '' } = {} }) => {
    const tableData = [
        ['École', school],
        ['Profession', 'Chef de projet'],
        ["Période d'essai", <span className='icon-valide'></span>]
    ];
    const onClick = () => {
        console.log('onClick')
    }
    return (
        <Grid container>
            <Grid item className='profile-heading-container'>
                <img src={Logo} alt='User' />
                <h1 className='bold'>{`${firstName} ${lastName}`}</h1>
                <p>{age}</p>
            </Grid>
            <CustomTable data={tableData} />
            <Btn onClick={onClick} text='Modifier mon profile' grayColor auto={true} />
        </Grid>
    )
}

