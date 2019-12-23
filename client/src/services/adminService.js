import axios from "axios";
import { API_URL } from '../config'
import { toFormData } from '../utils/converAndCheck'
import { getRequestConfig, getFormDataRequestConfig } from './index'

async function getData(cb) {
    try {
        const query = await axios.get(`${API_URL}/admin`, getRequestConfig());
        const { data } = query
        if (cb) {
            cb(data);
        }
    }
    catch (err) {
        console.error(`error => ${err}`)
    }
}

async function getUsers(role, cb) {
    try {
        const query = await axios.get(`${API_URL}/admin/users/${role}`, getRequestConfig());
        const { data } = query

        return cb ? cb(data) : data
    }
    catch (err) {
        console.error(`error => ${err}`)
    }
}

async function getProperties(cb) {
    try {
        const query = await axios.get(`${API_URL}/admin/properties`, getRequestConfig());
        const { data } = query

        return cb ? cb(data) : data
    }
    catch (err) {
        console.error(`error => ${err}`)
    }
}

async function deletePropertie(id, cb) {
    try {
        const query = await axios.delete(`${API_URL}/admin/propertie/${id}`, getRequestConfig());
        const { data } = query

        return cb ? cb(data) : data
    }
    catch (err) {
        console.error(`error => ${err}`)
    }
}

async function addPropertie(form, cb) {

    try {
        const query = await axios.post(`${API_URL}/admin/propertie`, toFormData(form), getFormDataRequestConfig());
        const { data } = query

        return cb ? cb(data) : data
    }
    catch (err) {
        console.error(`error => ${err}`)
    }
}

async function updatePropertie(id, form, cb) {
    try {
        console.log(form)
        const query = await axios.put(`${API_URL}/admin/propertie/${id}`, form, getRequestConfig());
        const { data } = query

        return cb ? cb(data) : data
    }
    catch (err) {
        console.error(`error => ${err}`)
    }
}

async function swapPosition(form, cb) {
    try {
        const query = await axios.put(`${API_URL}/admin/properties/swapPosition`, form, getRequestConfig());
        const { data } = query

        return cb ? cb(data) : data
    }
    catch (err) {
        console.error(`error => ${err}`)
    }
}

export { getData, getProperties, deletePropertie, updatePropertie, getUsers, addPropertie, swapPosition };