import { useContext, createContext, useState } from 'react'

const EntryContext = createContext()

// make a provider
const EntryProvider = ({children}) => {
    const [entries, setEntries] = useState([])
    return <EntryContext.Provider value={{entries, setEntries}}>{children}</EntryContext.Provider>
}

// make a customer hook
const useEntry = () => {
    const context = useContext(EntryContext)
    if (context === undefined) {
        throw new Error('call useEntry hook within a EntryContext Provider');
    }
    return context
}

// export the custom hook and the provider?

export {EntryProvider, useEntry}