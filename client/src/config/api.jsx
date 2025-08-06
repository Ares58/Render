// client/src/config/api.js
const API_BASE_URL = import.meta.env.PROD
  ? "https://render-jrih.onrender.com" // Render backend URL'inizi buraya yazın
  : "http://localhost:5000";

export default API_BASE_URL;
