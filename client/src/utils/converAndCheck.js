const isArray = (arr) => Array.isArray(arr);
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
    // formData.append('name', 'toto');
    return formData;
}


export { isFn, buildFromArray, buildToArray, toggleArray, isValideEmail, toFormData, isArray }