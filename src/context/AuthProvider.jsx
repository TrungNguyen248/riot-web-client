import React, {createContext, useEffect, useState} from 'react'
import { getAuth } from "firebase/auth"

const AuthContext = createContext()

function AuthProvider({children}) {
    const [user, setUser] = useState({})

    const auth = getAuth()

    useEffect(() => {
        const unsubcribed = auth.onIdTokenChanged((user) => {
            console.log('[From AuthProvider]', {user})
            if(user?.uid) {
                setUser(user)
            }
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