import React from 'react'
import { useContext } from 'react';
import { UserDataContext } from '../context/UserContext'

function Home() {

  const {user} = useContext(UserDataContext)
  // console.log(user);

  return (
    <div>Home</div>
  )
}

export default Home