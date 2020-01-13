const isArray = (arr) => Array.isArray(arr);
const isObject = (obj) => typeof obj === 'object';
const isFn = (functionToCheck) => functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';

const buildFromArray = (datas, label, value) => datas && datas.map(elem => ({ label: elem[label], value: elem[value] }));
const buildToArray = (datas) => {
    const newData = [];

    datas && datas.map(elem => {
        newData.push(elem.value)
    })
    return newData;
}

const toggleArray = (array, name) => {
    let found = false, data;

    if (!isArray(array) || (!name && name != '0'))
        return array;

    data = array.filter((elem) => {
        if (elem == name)
            found = true;

        return elem != name
    });

    if (!found)
        data.push(name)
    return data
}

const isValideEmail = (email) => /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

const toFormData = (form = {}) => {
    const formData = new FormData()
    Object.keys(form).forEach((key) => formData.append(key, form[key]));
    return formData;
}

const renameKey = (o, old_key, new_key) => {
    if (old_key !== new_key) {
        Object.defineProperty(o, new_key, Object.getOwnPropertyDescriptor(o, old_key));
        delete o[old_key];
    }
    return o;
}

const renameObjectKeys = (data, names) => {
    let obj = {};
    if (!data)
        return data;
    names.forEach(elem => {
        obj = { ...obj, ...renameKey(data, ...elem) };
    })
    return obj;
}

const extractValidObjectData = (data, keys) => {
    let obj = {};

    keys && keys.forEach(e => {
        if (isObject(e))
            obj[e.name] = e.validate ? e.validate(data[e.name]) : data[e.name];
        else
            obj[e] = data[e];
    })
    return obj;
}

export { isFn, buildFromArray, buildToArray, toggleArray, isValideEmail, toFormData, isArray, isObject, renameObjectKeys, extractValidObjectData }