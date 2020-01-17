import axios from "axios";
import { API_URL } from '../config'
import { toFormData } from '../utils/converAndCheck'
import { getRequestConfig, handleHttpErrors, getFormDataRequestConfig } from './index'


const updateProfile = handleHttpErrors(async (form, cb) => {
    const query = await axios.put(`${API_URL}/student/user`, toFormData(form), getFormDataRequestConfig());
    const { data } = query

    return cb ? cb(data) : data
})

const studentGetData = handleHttpErrors(async (cb) => {
    const query = await axios.get(`${API_URL}/student`, getRequestConfig());
    const { data } = query
    if (cb) {
        cb(data);
    }
})


// Partners
const getPartners = handleHttpErrors(async (cb) => {
    const query = await axios.get(`${API_URL}/student/partners`, getRequestConfig());
    const { data } = query

    return cb ? cb(data) : data
})


// Properties
const getProperties = handleHttpErrors(async (cb) => {
    const query = await axios.get(`${API_URL}/student/properties`, getRequestConfig());
    const { data } = query

    return cb ? cb(data) : data
})


const getZones = handleHttpErrors(async (cb) => {
    const query = await axios.get(`${API_URL}/student/agency-zone`, getRequestConfig());
    const { data } = query

    return cb ? cb(data) : data
})



export { studentGetData, getPartners, getProperties, getZones, updateProfile };