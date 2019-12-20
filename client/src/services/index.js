import { getToken } from '../utils/storage'

const getRequestConfig = () => ({
    headers: {
        Authorization: "Bearer " + getToken()
    }
})

const getFormDataRequestConfig = () => ({
    headers: {
        Authorization: "Bearer " + getToken(),
        'Content-Type': 'multipart/form-data'
    }
})
export { getRequestConfig, getFormDataRequestConfig }