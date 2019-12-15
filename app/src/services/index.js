import { getToken } from '../utils/storage'

const getRequestConfig = () => ({
    headers: {
        Authorization: "Bearer " + getToken()
    }
})
export { getRequestConfig }