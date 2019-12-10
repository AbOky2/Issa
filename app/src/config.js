const port = process.env.PORT || 3001;
const ROOT_URL = process.env.ROOT_URL || `http://localhost:${port}`;
const ENV_API_TLS = process.env.API_TLS;
const API_TLS = ENV_API_TLS || "http://";
const API_PATH = "/api/";

export const API_URL = `${API_TLS}${ROOT_URL}${API_PATH}`;
export const FORMAT_DATETIME = "YYYY-MM-DD HH:mm";
export { ROOT_URL }
export const PHOTOGRAPH = "photograph",
    SELLER = "seller",
    MANAGER = "manager",
    ADMIN = "admin"