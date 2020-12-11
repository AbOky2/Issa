const port = process.env.PORT || 3001;
const ROOT_URL = process.env.ROOT_URL || `http://localhost:${port}`;
const API_URL = `${ROOT_URL}/api/v1`;

export const FORMAT_DATETIME = "YYYY-MM-DD HH:mm";
export { ROOT_URL, API_URL }