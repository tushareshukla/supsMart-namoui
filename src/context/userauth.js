import React, { createContext, useContext, useState } from 'react'
const authContext = createContext(null);


const authProvider = ({children}) => {
    const [userData , setUserData] = useState( JSON.parse(localStorage.getItem("userData")) || {});


  return (
    <authContext.Provider value={{userData ,setUserData}}>
        {children}
    </authContext.Provider>
  )
}
const userAuth = () => useContext(authContext)

export { authProvider , userAuth}