'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';

export default function InstiRegistrationForm() {
    // --- Logic Preserved ---
    const [formData, setFormData] = useState({
        instiName: '',
        instiType: '',
        headName: '',
        phoneNo: '',
        email: '',
        district: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);
    const [successData, setSuccessData] = useState<{ uniqueId: string } | null>(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/forms/insti-registration', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                const data = await res.json();
                setSuccessData(data);
            } else {
                const data = await res.json();
                setError(data.error || 'Failed to submit registration');
            }
        } catch (err) {
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Success View
    if (successData) {
        return (
            <div className="min-h-screen bg-white flex flex-col font-sans">
                <Navbar />
                <div className="flex-grow flex items-center justify-center p-6 bg-slate-50">
                    <div className="bg-white p-12 rounded-none border border-green-500 shadow-xl text-center max-w-md w-full">
                        <div className="w-20 h-20 bg-green-50 text-green-600 rounded-none border border-green-200 flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-2 uppercase tracking-widest">Registration Approved</h2>
                        <p className="text-slate-500 mb-8 font-medium">Your institutional account has been created.</p>

                        <div className="bg-orange-50 border border-orange-100 rounded-none p-6 mb-8">
                            <p className="text-[10px] font-bold text-orange-600 uppercase tracking-[0.2em] mb-2">Unique Institutional ID</p>
                            <p className="text-3xl font-mono font-bold text-slate-900 tracking-wider">{successData.uniqueId}</p>
                        </div>

                        <div className="space-y-4">
                            <Link href="/insti/login" className="block w-full py-4 bg-[#000080] text-white rounded-none hover:bg-orange-600 font-bold uppercase tracking-widest transition-all shadow-lg shadow-blue-900/10">
                                Proceed to Login
                            </Link>
                            <Link href="/" className="block text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em] hover:text-orange-600 transition-colors">
                                Return to Homepage
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            {/* Simple Hero Section */}
            <section className="bg-[#000080] pt-10 pb-10 md:pt-15 md:pb-12 relative overflow-hidden">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none"
                    style={{ backgroundImage: `radial-gradient(circle, #fff 0.8px, transparent 0.8px)`, backgroundSize: '24px 24px' }}
                />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 tracking-tight">
                            Institutional <span className="text-orange-400">Onboarding.</span>
                        </h1>
                        <p className="text-blue-50/80 text-sm md:text-base font-normal max-w-xl">
                            Register your School, College, or Organization to the HSGA Unified Network and empower your students today.
                        </p>
                    </motion.div>
                </div>
            </section>

            <main className="max-w-4xl mx-auto px-6 py-12 w-full">
                <div className="bg-white rounded-none shadow-2xl overflow-hidden border border-orange-500 relative">
                    {/* Accent bar */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-orange-500"></div>

                    <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-10">
                        <section className="space-y-8">
                            <h2 className="text-xl font-bold text-slate-900 border-l-4 border-orange-500 pl-4 uppercase tracking-widest">Institution Profile</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Institution Name <span className="text-red-500">*</span></label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Enter Full Institution Name"
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-none text-slate-900 focus:bg-white focus:border-orange-500 outline-none transition-all font-medium placeholder:text-slate-300"
                                        value={formData.instiName}
                                        onChange={(e) => setFormData({ ...formData, instiName: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Institution Type <span className="text-red-500">*</span></label>
                                    <div className="relative">
                                        <select
                                            required
                                            className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-none text-slate-900 focus:bg-white focus:border-orange-500 outline-none transition-all font-medium appearance-none"
                                            value={formData.instiType}
                                            onChange={(e) => setFormData({ ...formData, instiType: e.target.value })}
                                        >
                                            <option value="">Select Category</option>
                                            <option value="SCHOOL">High School</option>
                                            <option value="COLLEGE">Junior/Degree College</option>
                                            <option value="OTHER">Other Organization</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Authorized Head / Principal Name <span className="text-red-500">*</span></label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Enter Head's Full Name"
                                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-none text-slate-900 focus:bg-white focus:border-orange-500 outline-none transition-all font-medium placeholder:text-slate-300"
                                    value={formData.headName}
                                    onChange={(e) => setFormData({ ...formData, headName: e.target.value })}
                                />
                            </div>
                        </section>

                        <section className="space-y-8">
                            <h2 className="text-xl font-bold text-slate-900 border-l-4 border-orange-500 pl-4 uppercase tracking-widest">Connect Details</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Contact Number <span className="text-red-500">*</span></label>
                                    <input
                                        required
                                        type="tel"
                                        placeholder="10-digit phone number"
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-none text-slate-900 focus:bg-white focus:border-orange-500 outline-none transition-all font-medium placeholder:text-slate-300"
                                        value={formData.phoneNo}
                                        onChange={(e) => setFormData({ ...formData, phoneNo: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Official Email <span className="text-red-500">*</span></label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="institution@example.com"
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-none text-slate-900 focus:bg-white focus:border-orange-500 outline-none transition-all font-medium placeholder:text-slate-300"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">District <span className="text-red-500">*</span></label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="e.g. Hyderabad"
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-none text-slate-900 focus:bg-white focus:border-orange-500 outline-none transition-all font-medium placeholder:text-slate-300"
                                        value={formData.district}
                                        onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Account Password <span className="text-red-500">*</span></label>
                                    <input
                                        required
                                        type="password"
                                        placeholder="Create a secure password"
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-none text-slate-900 focus:bg-white focus:border-orange-500 outline-none transition-all font-medium placeholder:text-slate-300"
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    />
                                </div>
                            </div>
                        </section>

                        {error && (
                            <div className="p-4 bg-red-50 text-red-700 border border-red-100 font-bold text-[10px] uppercase tracking-widest text-center">
                                {error}
                            </div>
                        )}

                        <div className="pt-6 border-t border-slate-100">
                            <button
                                disabled={loading}
                                type="submit"
                                className="w-full bg-[#000080] text-white font-bold py-5 rounded-none hover:bg-orange-600 transition-all disabled:opacity-50 text-[12px] uppercase tracking-[0.3em] shadow-xl shadow-blue-900/10 active:scale-[0.99]"
                            >
                                {loading ? 'Processing Application...' : 'Submit Institutional Application'}
                            </button>
                        </div>

                        <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                            Already have an account? <Link href="/insti/login" className="text-orange-600 hover:underline">Sign In Instead</Link>
                        </p>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}