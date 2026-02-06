import React from 'react';

const HeroSection = () => {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-50 to-emerald-100">
            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-left space-y-8">
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
                        The Solace Hub: <br />
                        <span className="text-teal-700">Beyond AI, Real Connection</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 max-w-lg">
                        We bridge the gap left by automated responses. Instead of talking to emotionless bots, Solace Hub connects you with empathetic human advisors.
                        If you feel alone or unheard, schedule a free session and talk to someone who truly understands.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#schedule"
                            className="px-8 py-4 rounded-full font-semibold text-lg bg-teal-600 hover:bg-teal-700 text-white transition-all shadow-lg shadow-teal-900/10 hover:shadow-teal-900/20 transform hover:-translate-y-0.5"
                        >
                            Talk to a Human
                        </a>
                        <a
                            href="#overview"
                            className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-teal-600 text-teal-700 hover:bg-teal-50 transition-all"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                <div className="hidden md:flex justify-center items-center relative">
                    <div className="absolute inset-0 bg-teal-200/30 blur-3xl rounded-full scale-110"></div>
                    <div className="relative bg-white/40 backdrop-blur-md p-8 rounded-3xl border border-white/50 shadow-xl max-w-md">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 animate-pulse">
                                    ♥
                                </div>
                                <div className="h-4 bg-slate-200 rounded w-32"></div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-3 bg-slate-200 rounded w-full"></div>
                                <div className="h-3 bg-slate-200 rounded w-5/6"></div>
                                <div className="h-3 bg-slate-200 rounded w-4/6"></div>
                            </div>
                            <div className="pt-4 border-t border-slate-100 text-sm text-slate-500 italic">
                                "Sometimes, you just need to be heard by a real person."
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-200/20 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-teal-200/20 blur-[100px] rounded-full pointer-events-none"></div>
        </section>
    );
};

export default HeroSection;
