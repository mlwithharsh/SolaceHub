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
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false)
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);
        

        try {
            await fetch("https://solacehub-bg21.onrender.com/api/advisors", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            setSubmitted(true);

        } catch (err) {
            console.error(err);
            alert("Submission failed");
        }finally {
            setLoading(false);
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
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100">
                        {submitted ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center text-3xl mb-4">
                                    ✓
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-2">Application Submitted Successfully</h3>
                                <p className="text-slate-500">
                                    Thank you for applying to join Solace Hub as an Advisor. <br />
                                    Our team will review your profile and you will receive a verification email shortly with the next steps.
                                </p>
                                <p className="text-slate-500 mt-4 italic">
                                    We appreciate your willingness to support others.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                                <div>
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

                                <div>
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

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                                <div className="text-center pt-4">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className={`w-full py-4 font-bold rounded-xl mt-4 text-white shadow-md transition-all
                                        ${loading? "bg-slate-400 cursor-not-allowed": "bg-teal-600 hover:bg-teal-700 hover:shadow-lg"}`}
                                        >
                                        {loading ? "Submitting..." : "Apply as Advisor"}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section >
    );
};

export default AdvisorForm;
