import React, { useState } from 'react';

const VisitorGate = () => {
    const [isVisible, setIsVisible] = useState(() => {
        if (typeof window === 'undefined') return false;
        try {
            const consent = localStorage.getItem('solace-consent');
            return !consent;
        } catch {
            console.warn('LocalStorage access denied, showing consent gate by default.');
            return true;
        }
    });
    const [shake, setShake] = useState(false);

    const handleAgree = () => {
        try {
            localStorage.setItem('solace-consent', 'true');
        } catch {
            console.warn('LocalStorage access denied, consent not saved persistently.');
        }
        setIsVisible(false);
    };

    const handleDisagree = () => {
        setShake(true);
        setTimeout(() => setShake(false), 500);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
            <div
                className={`bg-white max-w-lg w-full p-8 text-center rounded-2xl shadow-2xl border border-slate-200 relative overflow-hidden ${shake ? 'animate-bounce' : ''}`}
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-teal-600"></div>

                <h2 className="text-3xl font-bold mb-6 text-slate-800">
                    Welcome to Solace Hub
                </h2>

                <div className="space-y-4 text-slate-600 text-sm mb-8 text-left bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <p className="flex items-start gap-2">
                        <span className="text-teal-500 mt-1">●</span>
                        Solace Hub is a social platform for emotional support, NOT a medical or therapy service.
                    </p>
                    <p className="flex items-start gap-2">
                        <span className="text-teal-500 mt-1">●</span>
                        Our advisors offer emotional support and conversation only. They do not provide diagnosis, treatment, or clinical advice.
                    </p>
                    <p className="flex items-start gap-2">
                        <span className="text-teal-500 mt-1">●</span>
                        Solace Hub is designed for educational and supportive purposes and is not a substitute for professional help.
                    </p>
                    <p className="flex items-start gap-2">
                        <span className="text-teal-500 mt-1">●</span>
                        You must be 18+ years old or have parental consent to use this platform.
                    </p>
                    <p className="flex items-start gap-2 text-red-500 font-semibold">
                        <span className="mt-1">●</span>
                        If you are in a crisis or emergency, please contact your local emergency services immediately.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={handleAgree}
                        className="px-8 py-3 rounded-full font-semibold text-lg bg-teal-600 hover:bg-teal-700 text-white transition-all shadow-lg hover:shadow-teal-900/10"
                    >
                        I Agree & Enter
                    </button>
                    <button
                        onClick={handleDisagree}
                        className="px-8 py-3 rounded-full border border-slate-300 text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors"
                    >
                        I Disagree
                    </button>
                </div>

                {shake && (
                    <p className="mt-4 text-red-500 text-sm">
                        You must agree to continue using Solace Hub.
                    </p>
                )}
            </div>
        </div>
    );
};

export default VisitorGate;
