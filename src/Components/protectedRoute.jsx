import React from 'react'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({ children }) => {
    const isAuth = localStorage.getItem('token');

    if (!isAuth) {
        return <Navigate to="/login" />;
    } else {
        return children;
    }
}
