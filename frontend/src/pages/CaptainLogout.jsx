import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function CaptainLogout() {

   const navigate = useNavigate()

  useEffect(() => {
    const logout = async () => {
      const token = localStorage.getItem('token')
 
      if (!token) {
        navigate('/captain-login')
        return
      }

      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/captain/logout`, { 
          withCredentials: true 
        })

        if (res.status === 200) {
          localStorage.removeItem('token')
          navigate('/captain-login')
        }
      } catch (error) {
        console.error("Logout failed:", error) 
        localStorage.removeItem('token')
        navigate('/captain-login')
      }
    }

    logout()
  }, [navigate]) // Ensure the effect runs when component mounts



  return (
    <div>CaptainLogout.....</div>
  )
}

export default CaptainLogout