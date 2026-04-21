import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserLogout = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const logout = async () => {
      const token = localStorage.getItem('token')
 
      if (!token) {
        navigate('/login')
        return
      }

      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/user/logout`, { 
          withCredentials: true 
        })

        if (res.status === 200) {
          localStorage.removeItem('token')
          navigate('/login')
        }
      } catch (error) {
        console.error("Logout failed:", error) 
        localStorage.removeItem('token')
        navigate('/login')
      }
    }

    logout()
  }, [navigate]) // Ensure the effect runs when component mounts

  return (
    <div>Logging out...</div>
  )
}

export default UserLogout