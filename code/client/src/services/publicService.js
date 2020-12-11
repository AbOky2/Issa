import axios from "axios";
import { API_URL } from '../config'
import { getRequestConfig, handleHttpErrors } from './index'

const getZones = handleHttpErrors(async (cb) => {
    const query = await axios.get(`${API_URL}/public/agency-zone`, getRequestConfig());
    const { data } = query

    return cb ? cb(data) : data
})


export {

    // Zones
    getZones,
};