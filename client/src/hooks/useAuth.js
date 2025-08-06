import { useEffect, useState } from "react";
import axios from "axios";

function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    axios
      .get(`${API_URL}/api/auth/verify`, { withCredentials: true })
      .then((res) => {
        if (res.data.valid) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      })
      .catch(() => setIsAuthenticated(false));
  }, []);

  return isAuthenticated;
}

export default useAuth;
