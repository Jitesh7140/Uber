import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserRegister from './pages/UserRegister'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup' 

function App() {
  return (
    <div>  

    <Routes>
      <Route path='/' element={<Home/> } />
      <Route path='/login' element={<UserLogin/> } />
      <Route path='/register' element={<UserRegister/> } />
      <Route path='/captain-login' element={<CaptainLogin/> } />
      <Route path='/captain-register' element={<CaptainSignup/> } />

    </Routes>


    </div>
  )
}

export default App