import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

export const Products = () => {
    const {setAuthenticated} = useContext(AuthContext);

    const logout = () => {
        setAuthenticated(false);
    }

    return(
        <div>
            <button onClick={logout}>Logout</button>
        </div>
    )
}