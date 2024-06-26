import { createContext, useContext, useState } from 'react'
const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const [userData , setUserData] = useState( JSON.parse(localStorage.getItem("userData")) || {});


  return (
    <AuthContext.Provider value={{userData ,setUserData}}>
        {children}
    </AuthContext.Provider>
  )
}
const userAuth = () => useContext(AuthContext)

export { AuthProvider , userAuth}