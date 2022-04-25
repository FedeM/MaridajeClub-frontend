import react, { useState } from "react";
import { isAuthenticate } from "../lib/auth";

const AuthContext = react.createContext({})

export function AuthContextProvider({children}) {
    const id = isAuthenticate().id
    const [name, setUserName] = useState(isAuthenticate().name)
    const [email, setUserEmail] = useState(isAuthenticate().email)
    const [photo, setUserPhoto] = useState(isAuthenticate().photo)
    const [phone, setUserPhone] = useState(isAuthenticate().phone)
    const [role, setUserRole] = useState(isAuthenticate().role_id)
    const [address, setUserAddress] = useState(isAuthenticate().address)



    return (
        <AuthContext.Provider value={{
            id,
            name,
            setUserName,
            email,
            setUserEmail,
            photo,
            setUserPhoto,
            phone,
            setUserPhone,
            role,
            setUserRole,
            address,
            setUserAddress
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;