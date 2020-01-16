"use strict";

const mongoose = require('mongoose');
const _ = require('lodash');
const DBModel = require('./index')
const { sendMail } = require('../services/mail')
const msg = require('../utils/message')
const { isMajor } = require('../utils/convertAndCheck')
const {
    RoleList,
    StatusList,
    StudentStatusList,
    housing_type_List,
    housing_objectiveList,
    studiesLevelList,
    isStudent,
    Student,
    Active,
    generateSlug,
    isBuyer,
    ucFirst,
    isValidateEmail,
    zoneStatusList,
    Waiting,
} = require('../utils/user');

const bcrypt = require('../utils/bcrypt');

const { Schema } = mongoose;

const mongoSchema = new Schema({
    picture: {
        type: String,
        // required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        unique: true,
        required: () => isStudent(this.role)
    },
    email: {
        type: String,
        required: true,
        unique: true,
        sparse: true,
    },
    school: {
        type: String,
        required: () => isStudent(this.role)
    },
    studiesLevel: {
        type: String,
        enum: studiesLevelList,
        required: () => isStudent(this.role)
    },
    password: {
        type: String,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Date,
        validate: {
            validator: (v) => isMajor(v),
            message: 'is not Major!'
        },
        required: true
    },
    status: {
        type: String,
        enum: StatusList,
        required: true,
    },
    student_status: {
        type: String,
        enum: StudentStatusList,
        required: () => isBuyer(this.role)
    },
    role: {
        type: String,
        enum: RoleList,
        required: true,
    },
    housing_type: {
        type: String,
        enum: housing_type_List,
        required: () => isStudent(this.role)
    },
    housing_objective: {
        type: String,
        enum: housing_objectiveList,
        required: () => isStudent(this.role)
    },
    zones: {
        type: [{
            zoneName: String,
            zoneValue: String,
            status: {
                type: String,
                enum: zoneStatusList,
                default: Waiting
            }
        }],
        required: () => isStudent(this.role)
    },
    budget: {
        type: Number,
    },
    provider: {
        type: String,
    },

    address: {
        streetName: String,
        city: String,
        country: String,
        postalCode: String,
    },
    dateOfBirth: Date,
});

class UserClass extends DBModel {
    static publicFields() {
        return [
            '_id',
            'firstName',
            'lastName',
            'school',
            'phone',
            'email',
            'studiesLevel',
            'slug',
            'role',
            'status',
            'address',
            'dateOfBirth',
            'age',
            'budget',
            'housing_type',
            'housing_objective',
            'StudentStatusList',
        ];
    }


    static async getId(where) {
        const user = await this.findOne(where)
            .select('_id')
            .lean();
        if (!user) {
            return { userId: null };
        }
        return { userId: user._id };
    }


    static async getUserZones(_id) {
        const list = await this.findOne(_id)
            .select('zones')
            .lean();
        return { list };
    }


    static async getIdBySlug({ slug }) {
        return this.getId({ slug });
    }


    static async listStudents(options) {
        const { users: students } = await this.list({ role: Student }, options);
        return { students };
    }


    static async add(options) {
        const { email, firstName, lastName } = options;
        const slug = await generateSlug(this, firstName + lastName);
        const status = Active; // Change to Enum Value

        // console.log(options);
        // return;
        const user = await this.create({ ...options, status, slug });

        if (email) {
            // Send Email
        }

        return { user };
    }

    /**
     * Get a User by its slug
     * @param {Object} params
     * @param {String} params.slug - The slug of the User to get
     */
    static async getBySlug({ slug }) {
        const userDoc = await this.findOne({ slug })
            .select(this.publicFields());
        if (!userDoc) {
            throw new Error(msg.notFound('User'));
        }
        const user = userDoc.toObject();
        return { user };
    }

    /**
     * Get a User by its slug
     * @param {Object} params
     * @param {String} params.slug - The slug of the User to get
     */
    static async getById(_id) {
        let userDoc = null;

        try {
            if (!_id || !(userDoc = await this.findOne({ _id }).select(this.publicFields())))
                throw new Error(msg.notFound('User'));
            return userDoc.toObject();
        } catch (err) {
            throw err
        }
    }

    static async signInOrSignUpViaSocialMedia({
        role,
        email,
        password,
        provider,
        avatarUrl,
        firstName,
        lastName,
    }) {

        let user = await this.findOne({ email });

        if (!user) {
            user = (await this.add({
                role,
                email,
                password,
                firstName,
                provider,
                lastName,
                picture: avatarUrl,
            })).user;
        }
        user = user.toObject();
        return _.pick(user, this.publicFields());
    }


    static async signIn(options) {
        const { email, password } = options;
        let user = await this.findOne({ email });

        if (!user)
            throw new Error(msg.notFound('Email'));
        if (!user.password)
            throw new Error('Account has no password.');

        const isMatch = await bcrypt.compare(password, user.password);
        user = user.toObject();
        if (isMatch)
            return _.pick(user, this.publicFields());
        throw new Error(msg.invalidInfo('password'));
    }


    static async signUp(options) {
        let user = null;

        if (await this.findOne({ email: options.email }))
            throw new Error(msg.alreadyExist('Account'));

        user = (await this.add(options)).user;
        user = user.toObject();
        return _.pick(user, this.publicFields());
    }
}
mongoSchema.loadClass(UserClass);

mongoSchema.pre('save', async function userPreSavePassword() {
    const user = this;

    if (!isValidateEmail(user.email))
        throw 'Invalid email';
    user.firstName = ucFirst(user.firstName)
    user.lastName = ucFirst(user.lastName)
    if (!user.password || !user.isModified('password')) {
        return;
    }
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
});


const User = mongoose.model('User', mongoSchema);

module.exports = User;