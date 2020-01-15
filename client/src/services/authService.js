import axios from "axios";
import { ROOT_URL, API_URL } from '../config'

import { setUser, clearUser, clearToken } from '../utils/storage'
import { getRequestConfig, handleHttpErrors } from './index'


const basicAuth = handleHttpErrors(async (form, cb) => {
    const res = await axios.post(ROOT_URL + "/auth/basic", form, getRequestConfig());
    const user = res.data.user;
    setUser(user);
    if (cb)
        cb(res.data);
})


const signUp = handleHttpErrors(async (form, cb) => {
    const res = await axios.post(ROOT_URL + "/auth/signup", form, getRequestConfig());
    const user = res.data.user;
    setUser(user);
    if (cb)
        cb(res.data);
})


const signIn = handleHttpErrors(async (form, cb) => {
    const res = await axios.post(ROOT_URL + "/auth/signin", form, getRequestConfig());
    const user = res.data.user;

    setUser(user);
    if (cb)
        cb(res.data);
})


const logout = handleHttpErrors(async (cb) => {
    (await axios.get(ROOT_URL + "/auth/logout", getRequestConfig()));
    clearUser();
    clearToken();

    if (cb)
        cb();
})


const socialAuth = handleHttpErrors(async (socialName, cb) => {
    (await axios.get(`${ROOT_URL}/auth/${socialName}`, getRequestConfig()));

    if (cb)
        cb();
})


const getCurrentUser = handleHttpErrors(async () => {
    const data = await axios.get(`${API_URL}/public/currentUser`, getRequestConfig());
    const { data: { user, token } } = data;

    return { user, token }
})


export { basicAuth, signUp, signIn, logout, socialAuth, getCurrentUser }