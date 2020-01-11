import React, { useState } from 'react'
import { Grid } from '@material-ui/core';
import HousingIcon from '../../assets/img/illustrations/budget.svg';
import GraduateIcon from '../../assets/img/illustrations/draduate.svg';
import ActifAchatSituation from '../../assets/img/illustrations/actif_achat_situation.svg';
import StudentRoomIcon from '../../assets/img/illustrations/student-room.svg';
import AllLotIcon from '../../assets/img/illustrations/all-lots.svg';
import T2Icon from '../../assets/img/illustrations/t2.svg';
import T3Icon from '../../assets/img/illustrations/3pieces_achat_logement.svg';
import BedIcon from '../../assets/img/illustrations/bed_achat_logement.svg';
import CouchIcon from '../../assets/img/illustrations/couch_achat_log.svg';
import StudioIcon from '../../assets/img/illustrations/studio_objectif_achat.svg';
import Wrapper, { ListCardWrapper, CustomNumerber, CustomSelect } from './index'
import SearchInput from '../../components/formElement/search'
import SignupForm from '../../components/form/signup';
import { T2, T3, allHomeSize, studio, StudentHouse, rental_investment, main_residence, otherObjective, youngActive, lastYearStudent } from '../../utils/user'

const BudgetComp = ({ handlePrev, handleNext }) => {
    const [budget, setBudget] = useState(500);
    const increment = 10;
    const handleNextClick = () => {
        console.log('okk')
        handleNext && handleNext('budget', budget)
    }
    const updateChange = (value) => setBudget(value);
    const handleUp = () => setBudget(budget => budget + increment);
    const handleDown = () => budget - increment >= 0 && setBudget(budget => budget - increment);

    return (
        <Wrapper handlePrev={handlePrev} handleNext={handleNextClick} img={HousingIcon} alt='Buget' title='Saisis ton budget maximum / mois'>
            <CustomNumerber
                value={budget}
                handleChange={updateChange}
                handleUp={handleUp}
                handleDown={handleDown}
            />
        </Wrapper>
    )
}

const SearchComp = ({ handlePrev, handleNext }) => {
    const handleNextClick = () => {
        handleNext && handleNext()
    }
    return (
        <Wrapper handlePrev={handlePrev} handleNext={handleNextClick} img={HousingIcon} alt='Buget' title='Quelle est ta zone de recherche ?'>
            <SearchInput />
        </Wrapper>
    )
}

const HouseComp = ({ handlePrev, handleNext }) => (
    <ListCardWrapper
        handlePrev={handlePrev}
        handleNext={handleNext}
        name='housing_type'
        list={[
            { img: StudentRoomIcon, text: 'Une chambre étudiante', slug: StudentHouse },
            { img: StudioIcon, text: 'Un studio', slug: studio },
            { img: T2Icon, text: 'Un T2', slug: T2 },
            { img: AllLotIcon, text: 'Tout m’intéresse !', slug: allHomeSize },
        ]}
        title='Sélectionne ton type de location'
    />
)

const SchoolComp = ({ handlePrev, handleNext }) => {
    const [school, setSchool] = useState(null);

    const handleNextClick = () => {
        handleNext && handleNext('school', school)
    }
    return (
        <Wrapper handlePrev={handlePrev} handleNext={handleNextClick} img={GraduateIcon} alt='Buget' title='Quelle est ta zone de recherche ?'>
            <Grid className='custom-input select' xs={12}>
                <CustomSelect
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                >
                    <option value="" />
                    <option value='hec'>HEC</option>
                    <option value='epitec'>Epitec</option>
                </CustomSelect>
            </Grid>
        </Wrapper>
    )
}

// Buyer
const BuyerStatusComp = ({ handlePrev, handleNext }) => (
    <ListCardWrapper
        handlePrev={handlePrev}
        handleNext={handleNext}
        name='status'
        list={[
            { img: GraduateIcon, text: 'Étudiant(e) en dernière année', slug: lastYearStudent },
            { img: ActifAchatSituation, text: 'Jeune actif', slug: 'studio' },
        ]}
        title='Je suis :'
    />
)

const BuyerHouseComp = ({ handlePrev, handleNext }) => (
    <ListCardWrapper
        handlePrev={handlePrev}
        handleNext={handleNext}
        name='housing_type'
        list={[
            { img: CouchIcon, text: 'Un studio', slug: studio },
            { img: BedIcon, text: 'Un T2 ( 2 pièces )', slug: T2 },
            { img: T3Icon, text: 'T3 et + ( 3 pièces et + )', slug: T3 },
        ]}
        title='Sélectionne ton type de location'
    />
)


// Other
const SignUpComp = ({ handlePrev, handleNext, data }) => {
    const handleNextClick = () => handleNext && handleNext()

    return (
        <Wrapper title='Remplis tes informations'>
            <Grid container justify='center'>
                <Grid item xs={12} sm={6}>
                    <SignupForm data={data} handlePrev={handlePrev} handleNext={handleNextClick} />
                </Grid>
            </Grid>
        </Wrapper>
    )
}
export { HouseComp, BudgetComp, SearchComp, SchoolComp, SignUpComp, BuyerStatusComp, BuyerHouseComp }