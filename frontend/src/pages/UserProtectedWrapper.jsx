import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

function UserProtectedWrapper({ children }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Agar token nahi hai, toh direct login par bhejo
    if (!token) {
      navigate("/login");
      return; 
    }

    // console.log("token:" , token);

    // 2. Token hai toh user profile fetch karo
    // CHECK: Yahan route correct hai ya nahi? (captain vs user)
    axios.get(`${import.meta.env.VITE_BASE_URL}/api/user/profile`, { 
      headers: {
        Authorization: `Bearer ${token}`,
      }, 
    })
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data.user);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error("Auth Error:", err); 
        navigate("/login");
        setIsLoading(false);
      });

  }, [token, navigate, setUser]); // Dependencies added

  // 3. Loading state check
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}

export default UserProtectedWrapper;