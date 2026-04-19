import React, { createContext } from 'react'

export const UserDataContext = createContext();

function UserContext({children}) {
    const user = 'jitesh'

  return (
    <UserDataContext.Provider value={user}>
        {children}
    </UserDataContext.Provider>
  )
}

export default UserContext