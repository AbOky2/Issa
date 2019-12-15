const token = 'token';
const user = 'user';

const setData = (name, value) => localStorage.setItem(name, JSON.stringify(value))
const getData = (name) => JSON.parse(localStorage.getItem(name));
const clearData = (name) => localStorage.removeItem(name);


const setToken = value => setData(token, value);
const getToken = () => getData(token);
const clearToken = () => clearData(token);

const setUser = value => setData(user, value);
const getUser = () => getData(user);
const clearUser = () => clearData(user);


export {
    setToken,
    getToken,
    clearToken,
    setUser,
    getUser,
    clearUser
};