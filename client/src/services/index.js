import { getToken } from '../utils/storage'

const getRequestConfig = (extra = {}) => ({
    headers: {
        Authorization: "Bearer " + getToken(),
        ...extra
    }
})

const getFormDataRequestConfig = () => getRequestConfig({ 'Content-Type': 'multipart/form-data' });

export { getRequestConfig, getFormDataRequestConfig }