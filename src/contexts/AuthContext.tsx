import React, {createContext, useState, useMemo} from "react";
import { Context } from "vm";

interface AuthContextType{
    authToken: any,
    setAuthToken: (data: any) => void;
}

interface ContextProps{
    children: React.ReactNode
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: ContextProps) => {
    const [authToken, setAuthToken] = useState<any>();

    const value = useMemo(() => ({authToken, setAuthToken}), [authToken])

    return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>)
}

export {AuthContext}