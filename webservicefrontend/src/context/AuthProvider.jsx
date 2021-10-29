import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [token, setToken] = useState("");
    const [isLoaded, setIsLoaded] = useState(true);

    return(
        <div>
            <AuthContext.Provider value={{
                    authenticated,
                    setAuthenticated,
                    token,
                    setToken
                }}
            >
                {children}
            </AuthContext.Provider>
            
        </div>
    )
}

export default AuthProvider;