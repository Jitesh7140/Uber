import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

function CaptainProtectedWrapper({ children }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const { setCaptain } = useContext(CaptainDataContext);

  useEffect(() => {
    // 1. Agar token hi nahi hai, to direct login par bhejo
    if (!token) {
      navigate("/captain-login");
      return; 
    }

    // 2. Sirf token hone par hi API call karo
    axios.get(`${import.meta.env.VITE_BASE_URL}/api/captain/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
      if (res.status === 200) {
        setCaptain(res.data.captain);
        setIsLoading(false);
      }
    })
    .catch(err => {
      console.error(err);
      localStorage.removeItem("token");
      navigate('/captain-login');
      setIsLoading(false);
    });

  }, [token, navigate, setCaptain]); // Dependencies add ki

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {children}
    </>
  );
}

export default CaptainProtectedWrapper;