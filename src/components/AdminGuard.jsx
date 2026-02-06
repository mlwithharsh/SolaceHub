import React from 'react';
import { Navigate } from 'react-router-dom';

/**
 * AdminGuard Component
 * Protects routes by checking for the presence of an adminToken in localStorage.
 * If no token is found, it redirects to the login page.
 */
const AdminGuard = ({ children }) => {
    const token = localStorage.getItem('adminToken');

    if (!token) {
        return <Navigate to="/admin-login" replace />;
    }

    return children;
};

export default AdminGuard;
