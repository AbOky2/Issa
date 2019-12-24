const _ = require('lodash');
const Admin = 'admin';
const Student = 'student';
const Roomer = 'roomer';
const Buyer = 'buyer';
const studentRoleList = [Roomer, Buyer];
const RoleList = [Admin, Student, ...studentRoleList];


// Roles

const Active = 'active';
const Inactive = 'inactive';
const StatusList = [Active, Inactive];

const isAdmin = (user) => user && user.role === Admin;
const isStudent = (user) => user && studentRoleList.includes(user.role);


// Slug
const slugify = (text) => _.kebabCase(text);
const createUniqueSlug = async (Model, slug, count) => {
    const user = await Model.findOne({ slug: `${slug}-${count}` }, 'id');

    if (!user) {
        return `${slug}-${count}`;
    }

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
const ucFirst = (name) => name.charAt(0).toUpperCase() + name.slice(1)
module.exports = {
    // Vars
    Admin,
    Student,
    Active,
    Inactive,

    RoleList,
    StatusList,
    studentRoleList,


    // Methods
    isAdmin,
    isStudent,
    generateSlug,
    ucFirst,
};