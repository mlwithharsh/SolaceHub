import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieNotice = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieAccepted');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieAccepted', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6">
            <div className="max-w-4xl mx-auto bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-2xl shadow-2xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm text-slate-300 text-center md:text-left leading-relaxed">
                    We use minimal cookies and analytics to improve your experience. By continuing, you agree to our{' '}
                    <Link to="/privacy" className="text-teal-400 hover:text-teal-300 underline underline-offset-4 transition-colors">
                        Privacy Policy
                    </Link>.
                </div>
                <button
                    onClick={handleAccept}
                    className="whitespace-nowrap bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold py-2.5 px-8 rounded-full transition-all active:scale-95 text-sm"
                >
                    Accept
                </button>
            </div>
        </div>
    );
};

export default CookieNotice;
