import { createContext } from "react"

export const SomeContext = createContext()



export const HookUseContext = ({ children }) => {
    const contextValue = 'dado passado para Home'

    return (
        <SomeContext.Provider value={{ contextValue }}>
            {children}
        </SomeContext.Provider>
    )
}

export default HookUseContext