import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen pt-20 pb-10 px-4 md:px-8 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-slate-900 text-center">Privacy Policy</h1>

            <div className="bg-white p-8 md:p-12 space-y-6 text-slate-600 rounded-2xl shadow-xl border border-slate-100">
                <p>Last updated: {new Date().toLocaleDateString()}</p>

                <h2 className="text-2xl text-slate-800 font-semibold">1. Data Collection</h2>
                <p>We collect minimal data necessary to facilitate conversations. This may include email addresses for account creation and chat logs for safety moderation.</p>

                <h2 className="text-2xl text-slate-800 font-semibold">2. Usage of Data</h2>
                <p>Your data is used solely to improve the platform experience and ensure community safety. We do not sell your data to third parties.</p>

                <h2 className="text-2xl text-slate-800 font-semibold">3. Confidentiality</h2>
                <p>While we enforce strict confidentiality rules for Advisors, please be aware that internet communications can never be guaranteed to be completely secure.</p>

                <h2 className="text-2xl text-slate-800 font-semibold">4. Data Deletion</h2>
                <p>You may request full data deletion at any time by contacting our support team.</p>
            </div>

            <div className="mt-8 text-center">
                <a href="/" className="px-6 py-2 rounded-full inline-block text-sm font-semibold bg-slate-200 text-slate-700 hover:bg-slate-300 transition-all border border-slate-300">Back to Home</a>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
