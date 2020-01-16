import axios from "axios";
import { API_URL } from '../config'
import { toFormData } from '../utils/converAndCheck'
import { getRequestConfig, getFormDataRequestConfig, handleHttpErrors } from './index'


const getData = handleHttpErrors(async (cb) => {
    const query = await axios.get(`${API_URL}/admin`, getRequestConfig());
    const { data } = query
    if (cb) {
        cb(data);
    }
})


const getUsers = handleHttpErrors(async (role, cb) => {
    const query = await axios.get(`${API_URL}/admin/users/${role}`, getRequestConfig());
    const { data } = query

    return cb ? cb(data) : data
})


// Properties
const getProperties = handleHttpErrors(async (cb) => {
    const query = await axios.get(`${API_URL}/admin/properties`, getRequestConfig());
    const { data } = query

    return cb ? cb(data) : data
})


const deletePropertie = handleHttpErrors(async (id, cb) => {
    const query = await axios.delete(`${API_URL}/admin/propertie/${id}`, getRequestConfig());
    const { data } = query

    return cb ? cb(data) : data
})


const addPropertie = handleHttpErrors(async (form, cb) => {

    const query = await axios.post(`${API_URL}/admin/propertie`, toFormData(form), getFormDataRequestConfig());
    const { data } = query

    return cb ? cb(data) : data
})


const updatePropertie = handleHttpErrors(async (id, form, cb) => {
    const query = await axios.put(`${API_URL}/admin/propertie/${id}`, form, getRequestConfig());
    const { data } = query

    return cb ? cb(data) : data
})


const swapPosition = handleHttpErrors(async (form, cb) => {
    const query = await axios.put(`${API_URL}/admin/properties/swapPosition`, form, getRequestConfig());
    const { data } = query

    return cb ? cb(data) : data
})


// Partners
const getPartners = handleHttpErrors(async (cb) => {
    const query = await axios.get(`${API_URL}/admin/partners`, getRequestConfig());
    const { data } = query

    return cb ? cb(data) : data
})


const deletePartner = handleHttpErrors(async (id, cb) => {
    const query = await axios.delete(`${API_URL}/admin/partner/${id}`, getRequestConfig());
    const { data } = query

    return cb ? cb(data) : data
})


const addPartner = handleHttpErrors(async (form, cb) => {

    const query = await axios.post(`${API_URL}/admin/partner`, toFormData(form), getFormDataRequestConfig());
    const { data } = query

    return cb ? cb(data) : data
})


const updatePartner = handleHttpErrors(async (id, form, cb) => {
    const query = await axios.put(`${API_URL}/admin/partner/${id}`, form, getRequestConfig());
    const { data } = query

    return cb ? cb(data) : data
})


const swapParnersPosition = handleHttpErrors(async (form, cb) => {
    const query = await axios.put(`${API_URL}/admin/partners/swapPosition`, form, getRequestConfig());
    const { data } = query

    return cb ? cb(data) : data
})


const getZones = handleHttpErrors(async (cb) => {
    const query = await axios.get(`${API_URL}/admin/agency-zone`, getRequestConfig());
    const { data } = query

    return cb ? cb(data) : data
})


const addZone = handleHttpErrors(async (form, cb) => {

    const query = await axios.post(`${API_URL}/admin/agency-zone`, form, getRequestConfig());
    const { data } = query

    return cb ? cb(data) : data
})

const updateZone = handleHttpErrors(async (id, form, cb) => {
    console.log(form)
    const query = await axios.put(`${API_URL}/admin/agency-zone/${id}`, form, getRequestConfig());
    const { data } = query

    return cb ? cb(data) : data
})

const addAgency = handleHttpErrors(async (form, cb) => {

    const query = await axios.post(`${API_URL}/admin/agency`, form, getRequestConfig());
    const { data } = query

    return cb ? cb(data) : data
})

const updateAgency = handleHttpErrors(async (id, form, cb) => {
    const query = await axios.put(`${API_URL}/admin/agency/${id}`, form, getRequestConfig());
    const { data } = query

    return cb ? cb(data) : data
})

const deleteZone = handleHttpErrors(async (id, cb) => {
    const query = await axios.delete(`${API_URL}/admin/agency-zone/${id}`, getRequestConfig());
    const { data } = query

    return cb ? cb(data) : data
})


const deleteAgency = handleHttpErrors(async (id, cb) => {
    const query = await axios.delete(`${API_URL}/admin/agency/${id}`, getRequestConfig());
    const { data } = query

    return cb ? cb(data) : data
})

export {
    getData,

    // Properties
    getProperties,
    deletePropertie,
    updatePropertie,
    getUsers,
    addPropertie,
    swapPosition,

    // Partners
    getPartners,
    deletePartner,
    addPartner,
    updatePartner,
    swapParnersPosition,

    // Partners
    getZones,
    addZone,
    updateZone,
    addAgency,
    updateAgency,
    deleteAgency,
    deleteZone,
};