import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-12 mt-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold text-white mb-4">Solace Hub</h3>
                        <p className="text-slate-400 max-w-sm mb-6">
                            A safe space for human connection. We prioritize emotional support, dignity, and digital wellness.
                        </p>
                        <p className="text-sm text-slate-500 border-l-2 border-slate-700 pl-4">
                            Solace Hub is a support platform, not a medical service.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Platform</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li>
                                <Link
                                    to="/advisor-terms"
                                    className="hover:text-teal-400 hover:underline underline-offset-4 transition-colors"
                                >
                                    Join as Advisor
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="hover:text-teal-400 hover:underline underline-offset-4 transition-colors"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Legal & Safety</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li>
                                <Link
                                    to="/terms-and-conditions"
                                    className="hover:text-teal-400 hover:underline underline-offset-4 transition-colors"
                                >
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/privacy"
                                    className="hover:text-teal-400 hover:underline underline-offset-4 transition-colors"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/safety"
                                    className="hover:text-teal-400 hover:underline underline-offset-4 transition-colors"
                                >
                                    Safety & Ethics
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/advisor-terms"
                                    className="hover:text-teal-400 hover:underline underline-offset-4 transition-colors"
                                >
                                    Advisor Ethics
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/disclaimer"
                                    className="hover:text-teal-400 hover:underline underline-offset-4 transition-colors"
                                >
                                    Disclaimer
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} Solace Hub</p>
                    <p>Solace Hub is a support platform, not a medical service.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
