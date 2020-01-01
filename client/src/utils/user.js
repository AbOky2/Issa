// Roles
const Admin = 'admin';
const Roomer = 'roomer';
const Buyer = 'buyer';
const studentRoleList = [Roomer, Buyer];

const isAdmin = (user) => user && user.role === Admin;
const isStudent = (user) => user && studentRoleList.includes(user.role);
const isRoomer = (user) => user && user.role === Roomer;
const isBuyer = (user) => user && user.role === Buyer;

export {
    // Vars
    Roomer,
    Buyer,


    // Methods
    studentRoleList,
    isAdmin,
    isStudent,
    isRoomer,
    isBuyer,
}