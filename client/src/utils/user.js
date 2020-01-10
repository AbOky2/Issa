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
const rental_investment = 'rental_investment';
const main_residence = 'main_residence';
const otherObjective = 'other';
const housing_objectiveList = [rental_investment, main_residence, otherObjective];

// student status
const youngActive = 'young-active';
const lastYearStudent = 'last-year-student';
const StudentStatusList = [lastYearStudent, youngActive];

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
    rental_investment,
    main_residence,
    otherObjective,
    youngActive,
    lastYearStudent,


    // Methods
    studentRoleList,
    isAdmin,
    isStudent,
    isRoomer,
    isBuyer,
}