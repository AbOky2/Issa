import axios from "axios";
import { ROOT_URL } from '../config'

function parseRole(roles) {
    return roles.map(r => r.roleName);
}

async function login(form, cb) {
    try {
        const res = await axios.post(ROOT_URL + "/auth/basic", form);
        const user = { ...res.data.user, roles: parseRole(res.data.user.roles) };
        if (cb)
            cb(null, user);
    }
    catch (err) {
        console.error(`error => ${err}`)
    }
}


function logout() {
    // clearToken();
    window.location = "/login";
}

export { login, logout };