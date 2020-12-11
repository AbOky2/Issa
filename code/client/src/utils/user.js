
// Roles
const Admin = 'admin';
const Roomer = 'roomer';
const Buyer = 'buyer';
const studentRoleList = [Roomer, Buyer];

// House types
const T2 = 't2';
const T3 = 't3';
const StudentHouse = 'student-house';
const allHomeSize = 'all';
const studio = 'studio';
const housing_type_List = [T2, T3, StudentHouse, allHomeSize, studio];

// housing objective
const housingObjective = {
    rental_investment: { text: 'Un investissement locatif', icon: 'studio' },
    main_residence: { text: 'Une résidence principale', icon: 't2' },
    other: { text: 'Je ne sais pas', icon: 'allLots' },
}
// student status
const youngActive = 'young-active';
const lastYearStudent = 'last-year-student';
const youngGraduate = 'young-graduate';
const StudentStatusList = [lastYearStudent, youngActive, youngGraduate];

// student studies level
const firstYear = '1ère année';
const secondYear = '2em année';
const thirdYear = '3em année';
const fourthYear = '4em année';
const fiveYear = '5em année';
const sixYearAndMore = '6em année et +';
const studiesLevelOBjList = [{ firstYear }, { secondYear }, { thirdYear }, { fourthYear }, { fiveYear }, { sixYearAndMore }];

// student school
const studiesSchoolOBjList = [{ hec: 'HEC' }, { epitec: 'Epitec' }];

// status
const Active = 'active';
const Inactive = 'inactive';
const StatusList = [Active, Inactive];


const isAdmin = (user) => user && user.role === Admin;
const isStudent = (user) => user && studentRoleList.includes(user.role);
const isRoomer = (user) => user && user.role === Roomer;
const isBuyer = (user) => user && user.role === Buyer;

export {
    // Vars
    Roomer,
    Buyer,
    T2,
    T3,
    StudentHouse,
    allHomeSize,
    studio,
    housingObjective,
    youngActive,
    lastYearStudent,
    youngGraduate,
    studiesLevelOBjList,
    studiesSchoolOBjList,


    // Methods
    studentRoleList,
    isAdmin,
    isStudent,
    isRoomer,
    isBuyer,
}