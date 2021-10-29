import React, { useContext, useState } from "react";
import { useHistory } from 'react-router';
import { AuthContext } from '../../context/AuthProvider';
import AuthService from '../../services/AuthService';

export const Login = () => {
    
    const [formUser, setFormUser] = useState({ username: "", password: ""});
    const { setAuthenticated, setToken } = useContext(AuthContext);
    const history = useHistory();

    const changeUserData = (e) => {
        setFormUser({...formUser, [e.target.name]: e.target.value});
    }

    const loginUser = async (e) => {
        e.preventDefault();
        const token = await AuthService("user", "login", "post", formUser, "header");
        if(token){
            setToken(token);
            setAuthenticated(true);
            history.push("/products");
        }else{
            alert("Token missing");
        }
    }

    return(
        <div className="logview">
            <h1>Login</h1>
            <div className="login">
                <div className="loginwindow">
                    <form onSubmit={loginUser}>
                        <input
                            type="username"
                            name="username"
                            placeholder="Username"
                            onChange={changeUserData}
                        />
                        <br/>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={changeUserData}
                        />
                        <br/>
                        <a href="/register">register</a>
                        <br/>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}