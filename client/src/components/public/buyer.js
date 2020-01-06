import React, { useState } from 'react'
import { Grid } from '@material-ui/core';
import HousingIcon from '../../assets/img/illustrations/budget.svg';
import GraduateIcon from '../../assets/img/illustrations/draduate.svg';
import StudentRoomIcon from '../../assets/img/illustrations/student-room.svg';
import StudioIcon from '../../assets/img/illustrations/studio.svg';
import Wrapper, { ListCardWrapper, CustomNumerber } from './index'
import SearchInput from '../../components/formElement/search'
import SignupForm from '../../components/form/signup';


const BudgetComp = ({ handlePrev, handleNext }) => {
    const [budget, setBudget] = useState(500);
    const increment = 10;
    const handleNextClick = () => {
        handleNext && handleNext()
    }
    const handleChange = (value) => setBudget(value);
    const handleUp = () => setBudget(budget => budget + increment);
    const handleDown = () => budget - increment >= 0 && setBudget(budget => budget - increment);

    return (
        <Wrapper handlePrev={handlePrev} handleNext={handleNextClick} img={HousingIcon} alt='Buget' title='Saisis ton budget maximum / mois'>
            <CustomNumerber
                value={budget}
                handleChange={handleChange}
                handleUp={handleUp}
                handleDown={handleDown}
            />
        </Wrapper>
    )
}

const SignUpComp = ({ handlePrev, handleNext }) => {
    const handleNextClick = () => {
        handleNext && handleNext()
    }
    return (
        <Wrapper title='Remplis tes informations'>
            <Grid container justify='center'>
                <Grid item xs={12} sm={6}>
                    <SignupForm handlePrev={handlePrev} handleNext={handleNextClick} />
                </Grid>
            </Grid>
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
        list={[
            { img: StudentRoomIcon, text: 'Une chambre étudiante', alt: 'Une chambre étudiante', slug: 'student-room' },
            { img: StudioIcon, text: 'Un studio', alt: 'Un studio', slug: 'studio' },
            { img: StudentRoomIcon, text: 'Un T2', alt: 'Un T2', slug: 't2' },
            { img: StudioIcon, text: 'Tout m’intéresse !', alt: 'Tout m’intéresse !', slug: 'all' },
        ]}
        title='Sélectionne ton type de location'
    />
)

const SchoolComp = ({ handlePrev, handleNext }) => {
    const handleNextClick = () => {
        handleNext && handleNext()
    }
    return (
        <Wrapper handlePrev={handlePrev} handleNext={handleNextClick} img={GraduateIcon} alt='Buget' title='Quelle est ta zone de recherche ?'>
        </Wrapper>
    )
}
export { HouseComp, BudgetComp, SearchComp, SchoolComp, SignUpComp }