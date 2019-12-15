import axios from "axios";
import { ROOT_URL, API_URL } from '../config'

import { setUser, clearUser, clearToken } from '../utils/storage'
import { getRequestConfig } from './index'

async function basicAuth(form, cb) {
    try {
        const res = await axios.post(ROOT_URL + "/auth/basic", form, getRequestConfig());
        const user = res.data.user;
        setUser(user);
        if (cb)
            cb(res.data);
    }
    catch (err) {
        console.error(`error => ${err}`)
    }
}

async function logout(cb) {
    try {
        (await axios.get(ROOT_URL + "/auth/logout", getRequestConfig()));
        clearUser();
        clearToken();

        if (cb)
            cb();
    }
    catch (err) {
        console.error(`error => ${err}`)
    }
}

async function socialAuth(socialName, cb) {
    try {
        (await axios.get(`${ROOT_URL}/auth/${socialName}`, getRequestConfig()));

        if (cb)
            cb();
    }
    catch (err) {
        console.error(`error => ${err}`)
    }
}

async function getCurrentUser() {
    try {
        const data = await axios.get(`${API_URL}/currentUser`, getRequestConfig());
        const { data: { user, token } } = data;
        console.log(user, token)

        return { user, token }
    }
    catch (err) {
        console.error(`error => ${err}`)
    }
}

export { basicAuth, logout, socialAuth, getCurrentUser };