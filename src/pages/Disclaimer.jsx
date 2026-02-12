import React from 'react';

const Disclaimer = () => {
    return (
        <div className="min-h-screen pt-20 pb-10 px-4 md:px-8 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-slate-900 text-center">Platform Disclaimer</h1>

            <div className="bg-white p-8 md:p-12 space-y-6 text-slate-600 rounded-2xl shadow-xl border border-slate-100 border-l-4 border-l-pink-500">
                <p className="text-lg text-slate-800">
                    Solace Hub is designed for educational and supportive purposes only.
                </p>

                <p>
                    By using this service, you acknowledge and agree that:
                </p>

                <ul className="list-disc pl-5 space-y-4">
                    <li>Solace Hub is <strong>not a healthcare provider</strong> or medical service.</li>
                    <li>No doctor-patient relationship is formed through the use of this site.</li>
                    <li>Counsellors are volunteers or peer supporters, not necessarily licensed professionals.</li>
                    <li>Reliance on any information provided by Solace Hub or its Counsellors is solely at your own risk.</li>
                </ul>

                <p className="pt-4 font-semibold text-slate-800">
                    In the event of a medical emergency, do not use this platform. Call 911 or your local emergency services immediately.
                </p>
            </div>

            <div className="mt-8 text-center">
                <a href="/" className="px-6 py-2 rounded-full inline-block text-sm font-semibold bg-slate-200 text-slate-700 hover:bg-slate-300 transition-all border border-slate-300">Back to Home</a>
            </div>
        </div>
    );
};

export default Disclaimer;
