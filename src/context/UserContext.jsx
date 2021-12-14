import { useContext, createContext, useState } from 'react'

const UserContext = createContext()

// make a provider
const UserProvider = ({children}) => {
    const [user, setUser] = useState('')
    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
}

// make a customer hook
const useUser = () => {
    const context = useContext(UserContext)
    if (context === undefined) {
        throw new Error('call useUser hook within a UserContext Provider');
    }
    return context
}

// export the custom hook and the provider?

export {UserProvider, useUser}