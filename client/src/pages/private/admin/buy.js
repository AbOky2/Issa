import React, { useState, useEffect } from "react";
import { Grid } from '@material-ui/core'
import Avatar from '../../../assets/img/picture.png'
import { ReactComponent as HouseIcon } from '../../../assets/img/svg/house.svg'
import { Roomer, Buyer } from '../../../utils/user'
import './index.css';
import withAuth from '../../../lib/withAuth'
import { AdminContentWrapper } from '../../../components/wrapper'
import UserList from '../../../components/private/admin/user-list'
import { getUsers, deletePropertie } from '../../../services/adminService'

// excel
import { CSVLink } from "react-csv";


const Dashboard = ({ role }) => {
    const [state, setState] = useState({
        filterName: Roomer,
        users: []
    })
    useEffect(() => {
        (async () => {
            const { list } = await getUsers(role)
            handleChange('users', list)
        })()
    }, [])

    const handleChange = (name, value) => setState({ ...state, [name]: value });
    const users = state.users;
    const headerList = [
        { name: 'Profile', size: { xs: 4 } },
        { name: 'Age', size: { xs: 1 } },
        { name: 'Mail', size: { xs: 3 } },
        { name: 'Téléphone', size: { xs: 2 } },
        { name: 'École', size: { xs: 1 } },
        { name: 'Année', size: { xs: 1 } },
    ]
    const csvData = [
        headerList.map(e => e.name),
        ...users.map(e => ([`${e.firstName} ${e.lastName}`, e.age, e.email, e.phone, e.school, e.studiesLevel]))
    ];
    const length = users.length
    console.log(users)
    return (
        <AdminContentWrapper>
            <Grid container direction="row" justify="space-between" alignItems='center' className='spacing header'>
                <Grid item container xs={6} justify="flex-start">
                    <Grid item container alignItems='center'>
                        <Grid><span className='header-icon'><HouseIcon /></span></Grid>
                        <Grid><h1>Utilisateurs {`${state.filterName === Roomer ? 'location' : 'acheteur'} ${length ? `(${length})` : ''}`} </h1></Grid>
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
                                    filename={'students_locataire.csv'}
                                >Exporter</CSVLink>
                            </span>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <UserList
                headerList={headerList}
                contentList={users}
            />
        </AdminContentWrapper>
    )
}

export default withAuth(Dashboard)