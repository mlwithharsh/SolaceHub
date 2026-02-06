import React from 'react';

const TermsPage = () => {
    return (
        <div className="min-h-screen pt-20 pb-10 px-4 md:px-8 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 text-center">Terms & Conditions</h1>

            <div className="bg-white p-8 md:p-12 space-y-8 text-slate-600 rounded-2xl shadow-xl border border-slate-100">
                <section>
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">1. Platform Purpose</h2>
                    <p>
                        Solace Hub is a social support platform that connects people with empathetic human advisors for conversation
                        and emotional support. By accessing or using our platform, you agree to be bound by these Terms and Conditions.
                        If you disagree with any part of these terms, you may not access the service.
                    </p>
                </section>

                <div className="h-px bg-slate-200 w-full my-6"></div>

                <section>
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">2. No Medical / Therapy Service</h2>
                    <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                        <p className="text-purple-900 font-medium">
                            IMPORTANT: Solace Hub is NOT a substitute for professional medical advice, diagnosis, or treatment.
                        </p>
                    </div>
                    <p className="mt-4">
                        Our "Advisors" are empathetic listeners, not licensed therapists or clinicians.
                        Always seek the advice of your physician or qualified mental health provider with any questions you may have regarding a medical condition.
                    </p>
                </section>

                <div className="h-px bg-slate-200 w-full my-6"></div>

                <section>
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">3. User Responsibilities</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>You must be at least 18 years of age to use this platform.</li>
                        <li>You agree to interact respectfully with Advisors and other users.</li>
                        <li>You will not use the platform for any illegal or unauthorized purpose.</li>
                        <li>You acknowledge that conversations are for emotional support only.</li>
                    </ul>
                </section>

                <div className="h-px bg-slate-200 w-full my-6"></div>

                <section>
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">4. Privacy & Respect</h2>
                    <p>
                        We respect your privacy and dignity. While we strive to protect your personal information, remember that no method of
                        transmission over the Internet is 100% secure. We do not sell your personal data to third parties and expect all users
                        and advisors to respect each other’s confidentiality.
                    </p>
                </section>

                <div className="h-px bg-slate-200 w-full my-6"></div>

                <section>
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">5. Emergency Disclaimer</h2>
                    <p className="mb-4">
                        If you are feeling suicidal, thinking about hurting yourself, or are concerned that someone you know may be in danger of hurting themselves,
                        call your local emergency numbers immediately.
                    </p>
                    <p className="text-red-500 font-semibold">
                        Solace Hub cannot provide emergency assistance.
                    </p>
                </section>

                <div className="h-px bg-slate-200 w-full my-6"></div>

                <section>
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">6. Platform Limitations</h2>
                    <p>
                        Solace Hub does not guarantee continuous availability, specific advisor matches, or outcomes from conversations.
                        The platform may be updated, paused, or discontinued at any time. Any insights shared by advisors are personal opinions
                        and should not be treated as professional, legal, or medical advice.
                    </p>
                </section>

                <div className="h-px bg-slate-200 w-full my-6"></div>

                <section>
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">7. Updates to Terms</h2>
                    <p>
                        We may modify these terms from time to time to reflect changes in the platform, legal requirements, or safety standards.
                        Your continued use of the platform after changes are published constitutes agreement to the updated terms.
                    </p>
                </section>
            </div>

            <div className="mt-12 text-center">
                <a href="/" className="px-8 py-3 rounded-full inline-block font-semibold bg-teal-600 hover:bg-teal-500 text-white transition-all shadow-lg hover:shadow-teal-900/20">Return to Home</a>
            </div>
        </div>
    );
};

export default TermsPage;
