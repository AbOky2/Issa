const _ = require('lodash');
const Admin = 'admin';
const Roomer = 'roomer';
const Buyer = 'buyer';
const Student = 'student';
const studentRoleList = [Roomer, Buyer];
const RoleList = [Admin, ...studentRoleList];

// House types
const T2 = 't2';
const T3 = 't3';
const StudentHouse = 'student-house';
const allHomeSize = 'all';
const studio = 'studio';
const housing_type_List = [T2, T3, StudentHouse, allHomeSize, studio];

// housing objective
const rental_investment = 'rental_investment';
const main_residence = 'main_residence';
const otherObjective = 'other';
const housing_objectiveList = [rental_investment, main_residence, otherObjective];

// student status
const youngActive = 'young-active';
const lastYearStudent = 'last-year-student';
const youngGraduate = 'young-graduate';
const StudentStatusList = [lastYearStudent, youngActive, youngGraduate];

// status
const Active = 'active';
const Inactive = 'inactive';
const StatusList = [Active, Inactive];

// status
const Waiting = 'waiting';
const Done = 'done';
const zoneStatusList = [Waiting, Done];

// student studies level
const levelList = {
    firstYear: '1ère année',
    secondYear: '2em année',
    thirdYear: '3em année',
    fourthYear: '4em année',
    fiveYear: '5em année',
    sixYearAndMore: '6em année et +'
}
const studiesLevelList = Object.keys(levelList);
// const studiesLevelOBjList = studiesLevelList.map(name => ({ [name]: levelList[name] }));

// Methods
const isAdmin = (user) => user && user.role === Admin;
const isStudent = (user) => user && studentRoleList.includes(user.role);
const isBuyer = (user) => user && user.role === Buyer;
const isRoomer = (user) => user && user.role === Roomer;

// Other


// Slug
const slugify = (text) => _.kebabCase(text);
const createUniqueSlug = async (Model, slug, count) => {
    const user = await Model.findOne({ slug: `${slug}-${count}` }, 'id');

    if (!user)
        return `${slug}-${count}`;

    return createUniqueSlug(Model, slug, count + 1);
}

const generateSlug = async (Model, name, filter = {}) => {
    const origSlug = slugify(name);

    const user = await Model.findOne(Object.assign({ slug: origSlug }, filter), 'id');

    if (!user) {
        return origSlug;
    }

    return createUniqueSlug(Model, origSlug, 1);
}
const ucFirst = (name) => name.charAt(0).toUpperCase() + name.slice(1);
const isValidateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
module.exports = {
    // Vars
    Admin,
    Student,
    Active,
    Inactive,
    Waiting,
    studiesLevelList,

    RoleList,
    StatusList,
    StudentStatusList,
    studentRoleList,
    housing_type_List,
    zoneStatusList,
    housing_objectiveList,


    // Methods
    isAdmin,
    isStudent,
    Roomer,
    isBuyer,
    generateSlug,
    ucFirst,
    isValidateEmail,
    isRoomer
};