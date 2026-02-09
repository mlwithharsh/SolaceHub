import React, { useState } from 'react';

const AdvisorForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        age: '',
        gender: '',
        linkedin: '',
        email: '',
        contact: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await fetch("https://solacehub-bg21.onrender.com/api/advisors", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            alert("Advisor application submitted ✅");

        } catch (err) {
            console.error(err);
            alert("Submission failed");
        }
    };


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="py-20 relative overflow-hidden bg-slate-50">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Join Solace Hub as an Advisor</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Help us bring real empathy back to a digital world. If you are a good listener with a kind heart, we want you.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto px-4">
                    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-600 mb-2">Full Name <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="fullName"
                                    required
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                                    placeholder="Jane Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-600 mb-2">Age <span className="text-red-500">*</span></label>
                                <input
                                    type="number"
                                    name="age"
                                    required
                                    value={formData.age}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                                    placeholder="30"
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-slate-600 mb-2">
                                Gender <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="gender"
                                required
                                value={formData.gender}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                                <option value="Prefer not to say">Prefer not to say</option>
                            </select>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-slate-600 mb-2">LinkedIn Profile URL <span className="text-red-500">*</span></label>
                            <input
                                type="url"
                                name="linkedin"
                                required
                                value={formData.linkedin}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                                placeholder="https://linkedin.com/in/..."
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <label className="block text-sm font-medium text-slate-600 mb-2">Email Address <span className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-600 mb-2">Contact Number <span className="text-red-500">*</span></label>
                                <input
                                    type="tel"
                                    name="contact"
                                    required
                                    value={formData.contact}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                                    placeholder="+1 (555) 000-0000"
                                />
                            </div>
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="px-10 py-4 font-bold rounded-full bg-teal-600 hover:bg-teal-700 text-white shadow-lg transition-all transform hover:-translate-y-1"
                            >
                                Apply as Advisor
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AdvisorForm;
