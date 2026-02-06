import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Scheduler = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '25-34',
        date: new Date(),
        timeSlot: '10:00 AM'
    });

    const [submitted, setSubmitted] = useState(false);
    // react connection with db and backend 
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("https://solacehub-bg21.onrender.com/api/sessions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (!res.ok) throw new Error("Failed");

            setSubmitted(true);

        } catch (err) {
            console.error(err);
            alert("Failed to schedule session. Please ensure backend is running.");
        }
    };


    return (
        <section id="schedule" className="py-20 bg-gradient-to-br from-emerald-50 to-teal-100">
            <div className="container mx-auto px-6">
                <div className="relative max-w-2xl mx-auto">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                        <div className="bg-gradient-to-r from-teal-600 to-emerald-600 p-8 text-center">
                            <h2 className="text-2xl font-bold text-white mb-2">Schedule Your Free Session</h2>
                            <p className="text-emerald-50">Talk to someone who truly understands.</p>
                        </div>

                        <div className="p-8 md:p-10 bg-white">
                            {submitted ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center text-3xl mb-4">
                                        ✓
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Session Confirmed</h3>
                                    <p className="text-slate-500">We look forward to speaking with you.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-600 mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                                            placeholder="Enter your name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-600 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                                            placeholder="you@example.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="age" className="block text-sm font-medium text-slate-600 mb-2">
                                            Age Group
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="age"
                                                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all appearance-none cursor-pointer"
                                                value={formData.age}
                                                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                                            >
                                                <option value="18-24">18-24</option>
                                                <option value="25-34">25-34</option>
                                                <option value="35-44">35-44</option>
                                                <option value="45+">45+</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                                ▼
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-600 mb-2">
                                                Preferred Date
                                            </label>
                                            <DatePicker
                                                selected={formData.date}
                                                onChange={(date) => setFormData({ ...formData, date })}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all cursor-pointer"
                                                minDate={new Date()}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="time" className="block text-sm font-medium text-slate-600 mb-2">
                                                Time Slot
                                            </label>
                                            <div className="relative">
                                                <select
                                                    id="time"
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all appearance-none cursor-pointer"
                                                    value={formData.timeSlot}
                                                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                                                >
                                                    <option value="10:00 AM">10:00 AM</option>
                                                    <option value="11:00 AM">10:00 AM</option>
                                                    <option value="12:00 AM">10:00 AM</option>
                                                    <option value="1:00 PM">10:00 AM</option>
                                                    <option value="2:00 PM">2:00 PM</option>
                                                    <option value="3:00 PM">3:00 PM</option>
                                                    <option value="4:00 PM">10:00 AM</option>
                                                    <option value="5:00 PM">10:00 AM</option>
                                                    <option value="6:00 PM">10:00 AM</option>
                                                    <option value="7:00 PM">10:00 AM</option>
                                                    <option value="8:00 PM">10:00 AM</option>
                                                    <option value="9:00 PM">10:00 AM</option>
                                                </select>
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                                    ▼
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-4 font-bold rounded-xl mt-4 bg-teal-600 hover:bg-teal-700 text-white shadow-md hover:shadow-lg transition-all"
                                    >
                                        Schedule Now
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Scheduler;
