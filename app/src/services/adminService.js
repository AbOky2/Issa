import axios from "axios";
import { API_URL } from '../config'
import { setUser, clearUser } from '../utils/storage'
import { getRequestConfig } from './index'

async function getData(cb) {
    try {
        (await axios.get(`${API_URL}/admin`, getRequestConfig()));
        if (cb) {
            cb();
        }
    }
    catch (err) {
        console.error(`error => ${err}`)
    }
}

export { getData };