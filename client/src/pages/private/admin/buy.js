import React, { useState } from "react";
import { Grid } from '@material-ui/core'
import Avatar from '../../../assets/img/picture.png'
import { ReactComponent as HouseIcon } from '../../../assets/img/svg/house.svg'
import { Roomer, Buyer } from '../../../utils/user'
import './index.css';
import withAuth from '../../../lib/withAuth'
import { AdminContentWrapper } from '../../../components/wrapper'
// excel
import { CSVLink } from "react-csv";


const Dashboard = () => {
    const [state, setState] = useState({
        filterName: Roomer,
        users: [
            { avatar: Avatar, firstName: 'Ophelie (Roomer 1)', email: 'ophelie.meunier@gmail.com', lastName: 'Meunier', phone: '06 37 26 17 28 37', schoolName: 'HETIC', status: Roomer },
            { avatar: Avatar, firstName: 'Ophelie (Roomer 2)', email: 'ophelie.meunier@gmail.com', lastName: 'Meunier', phone: '06 37 26 17 28 37', schoolName: 'HETIC', status: Roomer },
            { avatar: Avatar, firstName: 'Ophelie (Roomer 3)', email: 'ophelie.meunier@gmail.com', lastName: 'Meunier', phone: '06 37 26 17 28 37', schoolName: 'HETIC', status: Roomer },
            { avatar: Avatar, firstName: 'Ophelie (Roomer 4)', email: 'ophelie.meunier@gmail.com', lastName: 'Meunier', phone: '06 37 26 17 28 37', schoolName: 'HETIC', status: Roomer },

            { avatar: Avatar, firstName: 'Ophelie (Buyer 1)', email: 'ophelie.meunier@gmail.com', lastName: 'Meunier', phone: '06 37 26 17 28 37', schoolName: 'HETIC', status: Buyer },
            { avatar: Avatar, firstName: 'Ophelie (Buyer 2)', email: 'ophelie.meunier@gmail.com', lastName: 'Meunier', phone: '06 37 26 17 28 37', schoolName: 'HETIC', status: Buyer },
        ]
    })

    const filter = (filterName) => state.users.filter(e => e.status === state.filterName);
    const handleChange = (name, value) => setState({ ...state, [name]: value });

    const users = filter(state.filter);
    const csvData = [
        ['Name', 'Email', 'Phone', 'School'],
        ...users.map(e => ([`${e.firstName} ${e.lastName}`, e.email, e.phone, e.schoolName]))
    ];

    return (
        <AdminContentWrapper>
            <Grid container direction="row" justify="space-between" alignItems='center' className='spacing header'>
                <Grid item container xs={6} justify="flex-start">
                    <Grid item container alignItems='center'>
                        <Grid><span className='header-icon'><HouseIcon /></span></Grid>
                        <Grid><h1>Utilisateurs {`${state.filterName === Roomer ? 'location' : 'acheteur'}`} ({users.length})</h1></Grid>
                    </Grid>
                </Grid>
                <Grid container item xs={6} justify="flex-end">
                    <Grid item container alignItems='center' justify="flex-end">
                        <div className='pointer filter' onClick={() => handleChange('filterName', state.filterName === Roomer ? Buyer : Roomer)}>
                            <span className='icon icon-filter'></span>
                            <span className='header-btn'>Filter</span>
                        </div>
                        <div className='pointer export'>
                            <span className='icon icon-export'></span>
                            <span className='header-btn'>
                                <CSVLink
                                    data={csvData}
                                    filename={`students_${state.filterName === Roomer ? 'locataire' : 'acheteur'}.csv`}
                                >Exporter</CSVLink>
                            </span>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            {users.map((elem, index) => (
                <Grid container item key={index} alignItems="center" justify="center" className='user-list spacing'>
                    <Grid item container alignItems='center' xs={3}>
                        <Grid item>
                            <img src={elem.avatar} alt='Avatar' />
                        </Grid>
                        <Grid item>
                            <span>{`${elem.firstName} ${elem.lastName}`}</span>
                        </Grid>
                    </Grid>
                    <Grid item container alignItems='center' xs={3}>
                        <Grid item>
                            <span className='tiny-icon icon-email'></span>
                        </Grid>
                        <Grid item>
                            <span>{elem.email}</span>
                        </Grid>
                    </Grid>
                    <Grid item container alignItems='center' xs={3}>
                        <Grid item>
                            <span className='tiny-icon icon-phone'></span>
                        </Grid>
                        <Grid item>
                            <span>{elem.phone}</span>
                        </Grid>
                    </Grid>
                    <Grid item container alignItems='center' xs={3}>
                        <Grid item>
                            <span className='tiny-icon icon-graduate'></span>
                        </Grid>
                        <Grid item>
                            <span>{elem.schoolName}</span>
                        </Grid>
                    </Grid>
                </Grid>
            ))}
        </AdminContentWrapper>

        // </WithAuth> 
    )
}

export default withAuth(Dashboard)