import React from 'react';
import logo from '../assets/origa-logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isAdminPath = location.pathname === '/admin';
    const isLoggedIn = !!localStorage.getItem('adminToken');

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Advisor', path: '/advisor' },
        { name: 'Admin', path: '/admin' },
    ];

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        navigate('/admin-login');
    };

    return (
        <nav className="sticky top-0 z-50 bg-solace-bg/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                            <div className="w-8 h-8 bg-solace-neon-green rounded-lg shadow-neon-green flex items-center justify-center">
                                <img
                                    src={logo}
                                    alt="Origa logo"
                                    className="h-320 md:h-360 object-contain"
                                    />
                            </div>
                            <span className="text-white font-bold text-xl tracking-tight">Origa</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-4 ml-10">
                        <div className="flex items-baseline space-x-4">
                            {navLinks.map((link) => {
                                const isActive = location.pathname === link.path;
                                return (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${isActive
                                                ? 'text-solace-neon-green bg-solace-neon-green/10 shadow-[0_0_10px_rgba(16,185,129,0.2)]'
                                                : 'text-solace-text-secondary hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Show Logout only on admin dashboard if logged in */}
                        {isAdminPath && isLoggedIn && (
                            <button
                                onClick={handleLogout}
                                className="ml-4 px-4 py-2 border border-red-500/30 text-red-500 hover:bg-red-500/10 rounded-lg text-sm font-medium transition-all"
                            >
                                Logout
                            </button>
                        )}
                    </div>

                    <div className="md:hidden flex items-center gap-4">
                        <div className="flex space-x-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-xs px-2 py-1 rounded transition-colors ${location.pathname === link.path ? 'text-solace-neon-green bg-solace-neon-green/10' : 'text-solace-text-secondary'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        {isAdminPath && isLoggedIn && (
                            <button
                                onClick={handleLogout}
                                className="text-xs px-2 py-1 bg-red-500/10 text-red-500 rounded"
                            >
                                Logout
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
