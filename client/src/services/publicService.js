import axios from "axios";
import { API_URL } from '../config'
import { getRequestConfig } from './index'

async function getZones(cb) {
    try {
        const query = await axios.get(`${API_URL}/public/agency-zone`, getRequestConfig());
        const { data } = query

        return cb ? cb(data) : data
    }
    catch (err) {
        console.error(`error => ${err}`)
    }
}


export {

    // Zones
    getZones,
};