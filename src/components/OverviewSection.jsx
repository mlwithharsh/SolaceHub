import React from 'react';

const OverviewSection = () => {
    const cards = [
        {
            title: "Real Connection",
            description: "You don’t need to talk to bots to feel understood.",
            icon: "❤️"
        },
        {
            title: "Beyond Algorithms",
            description: "AI can search fast, but it cannot feel emotions.",
            icon: "🧠"
        },
        {
            title: "Instant Support",
            description: "When you’re alone, connection should be immediate.",
            icon: "⚡"
        }
    ];

    return (
        <section id="overview" className="py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Solace Hub Exists</h2>
                    <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-slate-50 p-8 text-center rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-teal-100 transition-all duration-300"
                        >
                            <div className="w-16 h-16 bg-teal-50 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">{card.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-teal-600 font-medium">Schedule → Meet → Talk → Feel lighter</p>
                </div>
            </div>
        </section>
    );
};

export default OverviewSection;
