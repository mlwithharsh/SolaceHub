import React from 'react';

const AnalyticsSection = () => {
    return (
        <section className="py-20 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Humans Still Matter</h2>
                        <div className="space-y-6 text-slate-600 leading-relaxed">
                            <p>
                                <strong className="text-teal-700">Research shows validation matters.</strong> Studies in human-computer interaction confirm that people feel more emotionally validated when interacting with humans compared to automated systems.
                            </p>
                            <p>
                                <strong className="text-teal-700">Context over calculation.</strong> AI systems do not possess consciousness, emotional memory, or lived experience. Life guidance requires empathy, tone, and context—traits unique to humans.
                            </p>
                            <p>
                                <strong className="text-teal-700">Healing is human.</strong> Technology can assist, but emotional healing is rooted in connection.
                            </p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-teal-200 shadow-sm hover:shadow-md transition-colors">
                            <div className="text-teal-600 text-3xl mb-2">❤️</div>
                            <h4 className="text-xl font-bold text-slate-800 mb-2">Empathy</h4>
                            <p className="text-sm text-slate-500">Deep emotional understanding that code cannot replicate.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-teal-200 shadow-sm hover:shadow-md transition-colors">
                            <div className="text-teal-600 text-3xl mb-2">🤝</div>
                            <h4 className="text-xl font-bold text-slate-800 mb-2">Trust</h4>
                            <p className="text-sm text-slate-500">Confidential conversations with real people who care.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-teal-200 shadow-sm hover:shadow-md transition-colors">
                            <div className="text-teal-600 text-3xl mb-2">🛡️</div>
                            <h4 className="text-xl font-bold text-slate-800 mb-2">Safety</h4>
                            <p className="text-sm text-slate-500">A judgement-free zone designed for your peace of mind.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-teal-200 shadow-sm hover:shadow-md transition-colors">
                            <div className="text-teal-600 text-3xl mb-2">👂</div>
                            <h4 className="text-xl font-bold text-slate-800 mb-2">Listening</h4>
                            <p className="text-sm text-slate-500">Active listening that validates your feelings instantly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AnalyticsSection;
