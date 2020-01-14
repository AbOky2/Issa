import axios from "axios";
import { API_URL } from '../config'
import { getRequestConfig } from './index'

async function studentGetData(cb) {
    try {
        const query = await axios.get(`${API_URL}/student`, getRequestConfig());
        const { data } = query
        if (cb) {
            cb(data);
        }
    }
    catch (err) {
        console.error(`error => ${err}`)
    }
}
// Partners
async function getPartners(cb) {
    try {
        const query = await axios.get(`${API_URL}/student/partners`, getRequestConfig());
        const { data } = query

        return cb ? cb(data) : data
    }
    catch (err) {
        console.error(`error => ${err}`)
    }
}

// Properties
async function getProperties(cb) {
    try {
        const query = await axios.get(`${API_URL}/student/properties`, getRequestConfig());
        const { data } = query

        return cb ? cb(data) : data
    }
    catch (err) {
        console.error(`error => ${err}`)
    }
}

async function getZones(cb) {
    try {
        const query = await axios.get(`${API_URL}/student/agency-zone`, getRequestConfig());
        const { data } = query

        return cb ? cb(data) : data
    }
    catch (err) {
        console.error(`error => ${err}`)
    }
}
export { studentGetData, getPartners, getProperties, getZones };