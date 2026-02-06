import React from 'react';

const Contact = () => {
    return (
        <div className="min-h-screen pt-20 pb-10 px-4 md:px-8 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-slate-900 text-center">Contact Solace Hub</h1>

            <div className="bg-white p-8 md:p-10 space-y-6 text-slate-600 rounded-2xl shadow-xl border border-slate-100">
                <p className="text-slate-800">
                    Solace Hub is a social support platform. We welcome feedback, questions about safety, and partnership inquiries.
                </p>

                <p>
                    For urgent emotional or physical safety concerns, please contact your local emergency services first. This contact
                    channel is not monitored in real time and cannot be used for crisis intervention.
                </p>

                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-slate-800">Email</h2>
                    <p>For general questions, feedback, or data privacy requests, reach us at:</p>
                    <p className="text-teal-600 font-semibold">support@solacehub.example</p>
                </div>

                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-slate-800">Partnerships</h2>
                    <p>
                        If you are a mental health organization, community group, or researcher interested in collaboration,
                        you can write to us with “Partnership Inquiry” in the subject line.
                    </p>
                </div>
            </div>

            <div className="mt-8 text-center">
                <a
                    href="/"
                    className="px-6 py-2 rounded-full inline-block text-sm font-semibold bg-slate-200 text-slate-700 hover:bg-slate-300 transition-all border border-slate-300"
                >
                    Back to Home
                </a>
            </div>
        </div>
    );
};

export default Contact;
