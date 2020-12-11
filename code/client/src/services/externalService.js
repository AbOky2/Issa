import axios from "axios";
import { handleHttpErrors } from './index'


const getCities = handleHttpErrors(async (cb) => {
    const query = await axios.get('https://geo.api.gouv.fr/communes?fields=nom,code&format=json&geometry=centre');
    const { data } = query
    return cb ? cb(data) : data
})

export {
    getCities
}