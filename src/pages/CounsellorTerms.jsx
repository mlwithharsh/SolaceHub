import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdvisorTerms = () => {
    const navigate = useNavigate();

    const handleAgree = () => {
        navigate('/advisor-join');
    };

    const handleDisagree = () => {
        navigate('/');
    };

    return (
        <div className="min-h-screen pt-20 pb-10 px-4 md:px-8 max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 text-slate-900 text-center">Advisor Ethics & Responsibility</h1>
            <p className="text-slate-500 mb-10 text-center">Please review our code of conduct before applying.</p>

            <div className="bg-white p-8 md:p-12 space-y-8 text-slate-600 w-full rounded-2xl shadow-xl border border-slate-100">
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <h3 className="text-xl font-semibold text-teal-700 mb-3">🚫 Not a Therapist</h3>
                        <p>Advisors are not clinical therapists. You must not diagnose mental health conditions or prescribe treatments.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <h3 className="text-xl font-semibold text-emerald-600 mb-3">🤝 Voluntary Role</h3>
                        <p>This is a voluntary peer-support role. Initially, there is no monetary compensation for basic emotional support chat.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <h3 className="text-xl font-semibold text-teal-600 mb-3">🤐 Confidentiality</h3>
                        <p>You must respect user privacy. Sharing personal user stories or data outside the platform is strictly prohibited.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <h3 className="text-xl font-semibold text-slate-800 mb-3">⚖️ Zero Exploitation</h3>
                        <p>Any form of manipulation, emotional dependency creation, or financial exploitation of vulnerable users will result in immediate ban.</p>
                    </div>
                </div>

                <div className="bg-teal-50 p-6 rounded-xl border border-teal-100 mt-6">
                    <h3 className="text-teal-900 font-semibold mb-2">Mandatory Reporting</h3>
                    <p className="text-sm text-teal-800">If a user expresses immediate intent to harm themselves or others, you must encourage them to contact emergency services and use our "Report Safety Concern" tool immediately.</p>
                </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center w-full max-w-lg">
                <button
                    onClick={handleAgree}
                    className="px-8 py-4 rounded-full font-bold text-lg flex-1 bg-teal-600 hover:bg-teal-700 text-white shadow-lg transition-all"
                >
                    I Agree & Continue
                </button>
                <button
                    onClick={handleDisagree}
                    className="px-8 py-4 rounded-full border border-slate-300 text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors flex-1"
                >
                    I Do Not Agree
                </button>
            </div>
        </div>
    );
};

export default AdvisorTerms;
