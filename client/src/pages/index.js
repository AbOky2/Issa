import React from 'react'
import { Grid } from '@material-ui/core'
import ClapIcon from '../assets/img/icons/clap.png'
import Stepper from '../components/elements/stepper'

const menus = [
    { name: 'Garant', icon: ClapIcon },
    { name: 'Recherche', icon: ClapIcon },
    { name: 'Logement', icon: ClapIcon },
    { name: 'Superficie', icon: ClapIcon },
    // { name: 'Mon école', icon: ClapIcon },
    // { name: 'Budget', icon: ClapIcon },
]


const A = ({ handleNext }) => (<p onClick={handleNext}>A</p>)
const B = ({ handleNext, handleBack }) => (<p onClick={handleBack}>B</p>)
const C = ({ handleNext }) => (<p onClick={handleNext}>C</p>)

const HomePage = () => {
    const contents = [A, B, C];

    return (
        <div>
            <h1>Home</h1>
            <Stepper menus={menus} contents={contents} />
        </div>
    )
}
export default HomePage