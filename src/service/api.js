const API_URL = process.env.REACT_APP_CLARO_VIDEO_API;

console.log("api url", API_URL);
export const getUrl = (endpoint) => {
  return `${API_URL}${endpoint}`;
};