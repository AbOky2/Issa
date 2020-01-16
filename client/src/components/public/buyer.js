import React from 'react'
import { Grid } from '@material-ui/core';
import HousingIcon from '../../assets/img/illustrations/budget.svg';
import GraduateIcon from '../../assets/img/illustrations/draduate.svg';
import ActifAchatSituation from '../../assets/img/illustrations/actif_achat_situation.svg';
import YoungGraduateIcon from '../../assets/img/illustrations/diplome.svg';
import StudentRoomIcon from '../../assets/img/illustrations/student-room.svg';
import AllLotIcon from '../../assets/img/illustrations/all-lots.svg';
import T2Icon from '../../assets/img/illustrations/t2.svg';
import T3Icon from '../../assets/img/illustrations/3pieces_achat_logement.svg';
import BedIcon from '../../assets/img/illustrations/bed_achat_logement.svg';
import CouchIcon from '../../assets/img/illustrations/couch_achat_log.svg';
import StudioIcon from '../../assets/img/illustrations/studio_objectif_achat.svg';
import Wrapper, { ListCardWrapper, CustomNumerber, CustomSelect } from './index'
import ReactSelect from '../elements/react-select'
import SignupForm from '../form/signup';
import { extractValidObjectData } from '../../utils/converAndCheck'
import { T2, T3, allHomeSize, studio, StudentHouse, studiesSchoolOBjList, studiesLevelOBjList, youngActive, lastYearStudent, youngGraduate } from '../../utils/user'

const BudgetComp = ({ handlePrev, handleNext, handleChange, data: { budget } }) => {
    const budgetKey = 'budget';
    const increment = 10;

    const handleNextClick = () => handleNext && handleNext()
    const handleUp = () => handleChange(budgetKey, budget + increment);
    const handleDown = () => budget - increment >= 0 && handleChange(budgetKey, budget - increment);

    return (
        <Wrapper handlePrev={handlePrev} handleNext={handleNextClick} img={HousingIcon} alt='Buget' title='Saisis ton budget maximum / mois'>
            <CustomNumerber
                value={budget}
                handleChange={(value) => handleChange(budgetKey, value)}
                handleUp={handleUp}
                handleDown={handleDown}
            />
        </Wrapper>
    )
}


const SearchComp = ({ handlePrev, handleNext, handleChange, data: { zones, zoneList } = {} }) => {
    const handleNextClick = () => zones.length && handleNext && handleNext()

    return (
        <Wrapper
            handlePrev={handlePrev}
            handleNext={handleNextClick}
            img={HousingIcon}
            alt='Buget'
            title='Quelle est ta zone de recherche ?'
        >
            <ReactSelect
                options={zoneList}
                value={zones}
                isClearable={false}
                handleChange={(value) => handleChange('zones', value)}
            />
        </Wrapper>
    )
}

const HouseComp = ({ handlePrev, handleNext, handleChange, data: { housing_type } }) => (
    <ListCardWrapper
        selected={housing_type}
        handleChange={(data) => handleChange('housing_type', data)}
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

const optionDisplay = (list) => list.map(obj => Object.entries(obj).map(([value, name]) => (
    <option key={value} value={value}>{name}</option>
)))

const SchoolComp = ({ handlePrev, handleNext, handleChange, data: { school, studiesLevel } }) => {

    const handleNextClick = () => school && studiesLevel && handleNext && handleNext();

    return (
        <Wrapper handlePrev={handlePrev} handleNext={handleNextClick} img={GraduateIcon} alt='Buget' title='Sélectionne ton école'>
            <Grid className='custom-input select' item xs={12}>
                <CustomSelect
                    value={school}
                    onChange={(e) => handleChange('school', e.target.value)}
                >
                    <option value="" disabled>Ecole</option>
                    {optionDisplay(studiesSchoolOBjList)}
                </CustomSelect>
            </Grid>
            <Grid className='studies-level custom-input select' item xs={12}>
                <CustomSelect
                    value={studiesLevel}
                    onChange={(e) => handleChange('studiesLevel', e.target.value)}
                >
                    <option value="" disabled>Année d'etude</option>
                    {optionDisplay(studiesLevelOBjList)}
                </CustomSelect>
            </Grid>
        </Wrapper>
    )
}

// Buyer
const BuyerStatusComp = ({ handlePrev, handleNext, handleChange, data: { student_status } }) => (
    <ListCardWrapper
        selected={student_status}
        handleChange={(data) => handleChange('student_status', data)}
        handlePrev={handlePrev}
        handleNext={handleNext}
        name='student_status'
        list={[
            { img: GraduateIcon, text: 'Étudiant(e) en dernière année', slug: lastYearStudent },
            { img: YoungGraduateIcon, text: 'Jeune diplômé(e) en recherche d’emploi', slug: youngGraduate },
            { img: ActifAchatSituation, text: 'Jeune actif', slug: youngActive },
        ]}
        title='Je suis :'
    />
)

const BuyerHouseComp = ({ handlePrev, handleNext, handleChange, data: { housing_type } }) => (
    <ListCardWrapper
        selected={housing_type}
        handleChange={(data) => handleChange('housing_type', data)}
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
    const leanData = extractValidObjectData(data, data.post_fields);

    return (
        <Wrapper title='Remplis tes informations'>
            <Grid container justify='center'>
                <Grid item xs={12} sm={6}>
                    <SignupForm data={leanData} handlePrev={handlePrev} handleNext={handleNextClick} />
                </Grid>
            </Grid>
        </Wrapper>
    )
}
export { HouseComp, BudgetComp, SearchComp, SchoolComp, SignUpComp, BuyerStatusComp, BuyerHouseComp }