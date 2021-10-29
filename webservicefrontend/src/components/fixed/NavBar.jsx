import React, { useContext } from "react";
import { NavLink, NevLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

export const NavBar = () => {
    const { authenticated } = useContext(AuthContext);
    const history = useHistory();

    const authNavBar = () => {
        return(
            <>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/favorites">favorites</NavLink>
            </>
        )
    }

    const unAuthNavBar = () => {
        return(
            <>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
            </>
        )
    }

    return(
        <div className="navbar">
            { authenticated ? authNavBar() : unAuthNavBar()}
        </div>
    )
}