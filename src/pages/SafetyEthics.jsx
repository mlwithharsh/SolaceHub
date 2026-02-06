import React from 'react';

const SafetyEthics = () => {
    return (
        <div className="min-h-screen pt-20 pb-10 px-4 md:px-8 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-slate-900 text-center">Safety & Ethics</h1>

            <div className="bg-white p-8 md:p-12 space-y-6 text-slate-600 rounded-2xl shadow-xl border border-slate-100">
                <div className="bg-teal-50 p-6 rounded-lg mb-8 border border-teal-100">
                    <h2 className="text-xl font-bold text-teal-700 mb-2">Human-First Approach</h2>
                    <p className="text-slate-700">
                        We believe in the power of human connection. Every interaction on Solace Hub is guided by respect, empathy, and dignity.
                    </p>
                </div>

                <section>
                    <h3 className="text-2xl text-slate-800 font-semibold mb-2">Zero Tolerance Policy</h3>
                    <p>We have zero tolerance for:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li>Harassment of any kind.</li>
                        <li>Hate speech or discrimination.</li>
                        <li>Predatory behavior.</li>
                        <li>Attempts to solicit money or services.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-2xl text-slate-800 font-semibold mt-6 mb-2">Reporting Mechanisms</h3>
                    <p>Users can report any concerning behavior directly within the chat interface. Our trust & safety team reviews all reports within 24 hours.</p>
                </section>
            </div>

            <div className="mt-8 text-center">
                <a href="/" className="px-6 py-2 rounded-full inline-block text-sm font-semibold bg-slate-200 text-slate-700 hover:bg-slate-300 transition-all border border-slate-300">Back to Home</a>
            </div>
        </div>
    );
};

export default SafetyEthics;
