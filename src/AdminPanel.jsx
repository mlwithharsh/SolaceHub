import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL; // ✅ production safe

const AdminPanel = () => {
    const [sessions, setSessions] = useState([]);
    const [advisors, setAdvisors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('adminToken');

            if (!token) {
                navigate('/admin-login');
                return;
            }

            try {
                setLoading(true);

                const headers = {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                };

                const [sessionsRes, advisorsRes] = await Promise.all([
                    fetch(`${API}/api/sessions`, { headers }),
                    fetch(`${API}/api/advisors`, { headers })
                ]);

                // expired token
                if (sessionsRes.status === 401 || advisorsRes.status === 401) {
                    localStorage.removeItem('adminToken');
                    navigate('/admin-login');
                    return;
                }

                if (!sessionsRes.ok || !advisorsRes.ok) {
                    throw new Error('Failed to fetch data from the server');
                }

                const sessionsData = await sessionsRes.json();
                const advisorsData = await advisorsRes.json();

                setSessions(sessionsData);
                setAdvisors(advisorsData);

            } catch (err) {
                console.error(err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [navigate]);

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric', month: 'short', day: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-solace-neon-green"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-white p-4 text-center">
                <h2 className="text-2xl font-bold text-red-400 mb-2">Access Error</h2>
                <p className="text-solace-text-secondary">{error}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="mt-6 px-6 py-2 bg-solace-neon-green/20 border border-solace-neon-green/40 rounded-full text-solace-neon-green hover:bg-solace-neon-green/30 transition-all font-medium"
                >
                    Try Again
                </button>
            </div>
        );
    }
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <header className="mb-12">
                <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
                <p className="text-solace-text-secondary">Secured access to session bookings and advisor applications.</p>
            </header>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="glass-panel p-6 border border-white/10 hover:border-solace-neon-green/30 transition-all group">
                    <p className="text-solace-text-secondary text-sm font-medium uppercase tracking-wider mb-1">Total Sessions</p>
                    <p className="text-4xl font-bold text-white group-hover:text-solace-neon-green transition-colors">{sessions.length}</p>
                </div>
                <div className="glass-panel p-6 border border-white/10 hover:border-solace-neon-green/30 transition-all group">
                    <p className="text-solace-text-secondary text-sm font-medium uppercase tracking-wider mb-1">Advisor Applications</p>
                    <p className="text-4xl font-bold text-white group-hover:text-solace-neon-green transition-colors">{advisors.length}</p>
                </div>
            </div>

            {/* Sessions Table */}
            <div className="glass-panel mb-12 border border-white/10 overflow-hidden shadow-2xl">
                <div className="px-6 py-4 border-b border-white/10 bg-white/5 flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-white">Recent Sessions</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-800/50">
                                <th className="px-6 py-4 text-xs font-bold text-solace-neon-green uppercase tracking-widest">Name</th>
                                <th className="px-6 py-4 text-xs font-bold text-solace-neon-green uppercase tracking-widest">Email</th>
                                <th className="px-6 py-4 text-xs font-bold text-solace-neon-green uppercase tracking-widest">Phone</th>
                                <th className="px-6 py-4 text-xs font-bold text-solace-neon-green uppercase tracking-widest">Date / Time</th>
                                <th className="px-6 py-4 text-xs font-bold text-solace-neon-green uppercase tracking-widest text-right">Created</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {sessions.length > 0 ? sessions.map((s) => (
                                <tr key={s.id} className="hover:bg-white/[0.03] transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-white">{s.name}</td>
                                    <td className="px-6 py-4 text-sm text-solace-text-secondary">{s.email}</td>
                                    <td className="px-6 py-4 text-sm text-solace-text-secondary">{s.phone}</td>
                                    <td className="px-6 py-4 text-sm text-white/70">{s.session_date} | {s.time_slot}</td>
                                    <td className="px-6 py-4 text-xs text-slate-500 text-right">{formatDate(s.created_at)}</td>
                                </tr>
                            )) : (
                                <tr><td colSpan="4" className="px-6 py-12 text-center text-solace-text-secondary italic">No sessions found.</td></tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Advisors Table */}
            <div className="glass-panel mb-16 border border-white/10 overflow-hidden shadow-2xl">
                <div className="px-6 py-4 border-b border-white/10 bg-white/5">
                    <h2 className="text-xl font-semibold text-white">Advisor Network</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-800/50">
                                <th className="px-6 py-4 text-xs font-bold text-solace-neon-green uppercase tracking-widest">Full Name</th>
                                <th className="px-6 py-4 text-xs font-bold text-solace-neon-green uppercase tracking-widest">Email</th>
                                <th className="px-6 py-4 text-xs font-bold text-solace-neon-green uppercase tracking-widest">LinkedIn</th>
                                <th className="px-6 py-4 text-xs font-bold text-solace-neon-green uppercase tracking-widest text-right">Applied</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {advisors.length > 0 ? advisors.map((a) => (
                                <tr key={a.id} className="hover:bg-white/[0.03] transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-white">{a.full_name}</td>
                                    <td className="px-6 py-4 text-sm text-solace-text-secondary">{a.email}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <a href={a.linkedin_url} target="_blank" rel="noopener noreferrer" className="text-solace-neon-blue hover:text-solace-neon-blue/80 underline">Profile</a>
                                    </td>
                                    <td className="px-6 py-4 text-xs text-slate-500 text-right">{formatDate(a.created_at)}</td>
                                </tr>
                            )) : (
                                <tr><td colSpan="4" className="px-6 py-12 text-center text-solace-text-secondary italic">No advisor applications yet.</td></tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <footer className="mt-auto py-8 text-center">
                <p className="text-slate-500 text-xs">
                    Powered by <span className="text-slate-400 font-semibold">Origa</span>
                </p>
            </footer>
        </div>
    );
};

export default AdminPanel;
