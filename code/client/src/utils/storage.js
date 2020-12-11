const token = 'token';
const user = 'user';

const isJson = (str) => {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

const getStorage = (name) => localStorage.getItem(name)

const setData = (name, value) => localStorage.setItem(name, JSON.stringify(value))
const getData = (name) => isJson(getStorage(name)) ? JSON.parse(localStorage.getItem(name)) : null;
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
    setUser,
    getUser,

    clearToken,
    clearUser,
};