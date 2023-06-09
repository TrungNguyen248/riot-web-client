import React, {createContext, useEffect, useState} from 'react'
import { getAuth } from "firebase/auth"
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext()

function AuthProvider({children}) {
    const [user, setUser] = useState({})
    const navigate = useNavigate()

    const auth = getAuth()

    useEffect(() => {
        const unsubcribed = auth.onIdTokenChanged((user) => {
            if(user?.uid) {
                setUser(user)
                localStorage.setItem('accessToken', user.accessToken)
                return
            }
            //reset user info
            setUser({})
            localStorage.clear()
        })
        return () => {
            unsubcribed()
        }
    }, [auth])

    return ( 
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
     );
}

export default AuthProvider;