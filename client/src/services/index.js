import { getToken } from '../utils/storage'
import { toast } from 'react-toastify';

const getRequestConfig = (extra = {}) => ({
    headers: {
        Authorization: "Bearer " + getToken(),
        ...extra
    }
})

const getFormDataRequestConfig = () => getRequestConfig({ 'Content-Type': 'multipart/form-data' });

const handleHttpErrors = (fn) => async function () {
    try {
        await fn(...arguments);
    } catch (err) {
        const { response } = err;
        let msg = null

        if (response && response.data)
            msg = response.data.message;

        if (msg)
            toast.warn(msg);
    }
}

export { getRequestConfig, getFormDataRequestConfig, handleHttpErrors }