import React, { createContext, useState, useEffect } from 'react';
import AuthService from '../services/AuthService';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [isLoaded, setIsLoaded] = useState(true);

    return(
        <div>
            {isLoaded ?
            (
                <AuthContext.Provider value={{
                        authenticated,
                        setAuthenticated
                    }}
                >
                    {children}
                </AuthContext.Provider>
            ) 
            :(<h1>Loading...</h1>)
            }
        </div>
    )
}

export default AuthProvider;