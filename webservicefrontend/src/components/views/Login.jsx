import React, { useContext, useState } from "react";
import { useHistory } from 'react-router';
import { AuthContext } from '../../context/AuthProvider';
import AuthService from '../../services/AuthService';

export const Login = () => {
    const data = AuthService("/user", "/login");
}