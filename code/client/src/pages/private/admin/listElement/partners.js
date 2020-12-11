import React from "react";
import { Grid } from '@material-ui/core'
import { ReactComponent as LotsIcon } from '../../../../assets/img/svg/partners.svg'
import withAuth from '../../../../lib/withAuth'
import { getPartners, deletePartner, addPartner, updatePartner, swapParnersPosition, } from '../../../../services/adminService'
import CardComp from '../../../../components/private/admin/partnerCard'

import Lot from '../../../../assets/img/lot.png'
import forData from './partnerData'
import Test from './index'

const defaultAddNew = {
    _id: null,
    picture: Lot,
    name: 'aaaa-',
    description: 'bbbb',
    link: 'cccc',
    position: 5
}
const Header = () => (
    <>
        <Grid><span className='header-icon'><LotsIcon /></span></Grid>
        <Grid><h1>Offres partenaires</h1></Grid>
    </>
)
const props = {
    defaultAddNew,
    getData: getPartners,
    deleteData: deletePartner,
    updateData: updatePartner,
    addData: addPartner,
    swapPosition: swapParnersPosition,
    Header,
    CardComp,
    forData: forData.createLot
}

const Dashboard = () => <Test {...props} />

export default withAuth(Dashboard)
