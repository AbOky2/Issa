// Roles
const Admin = 'admin';
const Roomer = 'roomer';
const Buyer = 'buyer';
const studentRoleList = [Roomer, Buyer];

const isAdmin = (user) => user && user.role === Admin;
const isStudent = (user) => user && studentRoleList.includes(user.role);
export {
    // Vars
    Roomer,
    Buyer,


    // Methods
    studentRoleList,
    isAdmin,
    isStudent,
}