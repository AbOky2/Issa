import React from "react";
import { Grid } from '@material-ui/core'
import { ReactComponent as LotsIcon } from '../../../../assets/img/svg/lots.svg'
import withAuth from '../../../../lib/withAuth'
import { getProperties, deletePropertie, updatePropertie, addPropertie, swapPosition } from '../../../../services/adminService'
import CardComp from '../../../../components/private/admin/propertieCard'
import Lot from '../../../../assets/img/lot.png'
import forData from './propertieData'
import Test from './index'

const defaultAddNew = {
    _id: null,
    picture: Lot,
    name: 'aaaa-',
    description: 'bbbb',
    dimension: 'cccc',
    address: 'dddd',
    nb_available: 1,
    location_date: 'e',
    position: 5
}
const Header = () => (
    <>
        <Grid><span className='header-icon'><LotsIcon /></span></Grid>
        <Grid><h1>Lots Nexity</h1></Grid>
    </>
)
const props = {
    defaultAddNew,
    getData: getProperties,
    deleteData: deletePropertie,
    updateData: updatePropertie,
    addData: addPropertie,
    swapPosition,
    Header,
    CardComp,
    forData: forData.createLot
}

const Dashboard = () => <Test {...props} />

export default withAuth(Dashboard)
