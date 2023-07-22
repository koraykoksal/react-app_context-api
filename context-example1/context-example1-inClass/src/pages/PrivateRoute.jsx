import React, { useContext } from 'react'
import { LoginContext } from '../context/LoginContext';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {

    const {user} = useContext(LoginContext);

    return user.email && user.password ? <Outlet/> : <Navigate to="/login"/>

}
