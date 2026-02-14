'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';

export default function TrainerRegistrationForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNo: '',
        email: '',
        district: '',
        password: '',
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [generatedId, setGeneratedId] = useState('');
    const [error, setError] = useState('');

    const patterns = {
        text: /^[a-zA-Z\s\.]+$/,
        phone: /^[6-9]\d{9}$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'phoneNo') {
            if (!/^\d*$/.test(value)) return;
        }
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        if (!patterns.text.test(formData.fullName)) return "Full Name should contain only letters.";
        if (!patterns.phone.test(formData.phoneNo)) return "Phone Number must be a valid 10-digit Indian number.";
        if (!patterns.email.test(formData.email)) return "Please enter a valid email address.";
        if (!patterns.text.test(formData.district)) return "District should contain only letters.";
        return null;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            setLoading(false);
            window.scrollTo(0, 0);
            return;
        }

        try {
            const res = await fetch('/api/forms/trainer-registration', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                const data = await res.json();
                setGeneratedId(data.uniqueId);
                setSuccess(true);
                window.scrollTo(0, 0);
            } else {
                const data = await res.json();
                setError(data.error || 'Registration failed');
            }
        } catch {
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Success View
    if (success) {
        return (
            <div className="min-h-screen bg-white flex flex-col font-sans">
                <Navbar />
                <div className="flex-grow flex items-center justify-center p-6 bg-slate-50">
                    <div className="bg-white p-12 rounded-none border border-green-500 shadow-xl text-center max-w-md w-full">
                        <div className="w-20 h-20 bg-green-50 text-green-600 rounded-none border border-green-200 flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-2 uppercase tracking-widest">Registration Submitted</h2>
                        <p className="text-slate-500 mb-8 font-medium">Please secure your Unique Trainer ID below.</p>

                        <div className="bg-orange-50 border border-orange-100 rounded-none p-6 mb-8 text-center">
                            <p className="text-[10px] font-bold text-orange-600 uppercase tracking-[0.2em] mb-2">Unique Trainer ID</p>
                            <p className="text-3xl font-mono font-bold text-slate-900 tracking-wider uppercase">{generatedId}</p>
                        </div>

                        <div className="bg-blue-50 border border-blue-100 rounded-none p-6 text-left mb-8">
                            <h3 className="text-[10px] font-bold text-blue-800 uppercase tracking-widest mb-3">Next Steps</h3>
                            <ul className="text-[11px] text-blue-700 space-y-3 font-medium">
                                <li className="flex gap-2"><span>•</span> Submit the physical form at the HSGA office.</li>
                                <li className="flex gap-2"><span>•</span> Wait for admin verification & approval.</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <Link href="/trainer/login" className="block w-full py-4 bg-[#000080] text-white rounded-none hover:bg-orange-600 font-bold uppercase tracking-widest transition-all shadow-lg shadow-blue-900/10 active:scale-[0.99]">
                                Go to Trainer Login
                            </Link>
                            <Link href="/" className="block text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em] hover:text-orange-600 transition-colors pt-2">
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
                            Trainer <span className="text-orange-400">Onboarding.</span>
                        </h1>
                        <p className="text-blue-50/80 text-sm md:text-base font-normal max-w-xl">
                            Register as a certified trainer with HSGA Telangana. Join our mission to empower youth through discipline and service.
                        </p>
                    </motion.div>
                </div>
            </section>

            <main className="max-w-4xl mx-auto px-6 py-12 w-full">
                <div className="bg-white rounded-none shadow-2xl overflow-hidden border border-orange-500 relative">
                    {/* Accent bar */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-orange-500"></div>

                    <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-10">

                        {error && (
                            <div className="p-4 bg-red-50 text-red-700 border border-red-100 font-bold text-[10px] uppercase tracking-widest text-center">
                                {error}
                            </div>
                        )}

                        <section className="space-y-8">
                            <h2 className="text-xl font-bold text-slate-900 border-l-4 border-orange-500 pl-4 uppercase tracking-widest">Personal Details</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Full Name <span className="text-red-500">*</span></label>
                                    <input
                                        name="fullName"
                                        required
                                        type="text"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="Enter your legal name"
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-none text-slate-900 focus:bg-white focus:border-orange-500 outline-none transition-all font-medium placeholder:text-slate-300"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Phone Number <span className="text-red-500">*</span></label>
                                    <input
                                        name="phoneNo"
                                        required
                                        type="tel"
                                        value={formData.phoneNo}
                                        onChange={handleInputChange}
                                        placeholder="10-digit mobile"
                                        maxLength={10}
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-none text-slate-900 focus:bg-white focus:border-orange-500 outline-none transition-all font-medium placeholder:text-slate-300"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Email Address <span className="text-red-500">*</span></label>
                                    <input
                                        name="email"
                                        required
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="trainer@example.com"
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-none text-slate-900 focus:bg-white focus:border-orange-500 outline-none transition-all font-medium placeholder:text-slate-300"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">District <span className="text-red-500">*</span></label>
                                    <input
                                        name="district"
                                        required
                                        type="text"
                                        value={formData.district}
                                        onChange={handleInputChange}
                                        placeholder="e.g. Hyderabad"
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-none text-slate-900 focus:bg-white focus:border-orange-500 outline-none transition-all font-medium placeholder:text-slate-300"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Account Password <span className="text-red-500">*</span></label>
                                <input
                                    name="password"
                                    required
                                    type="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder="Create a secure password"
                                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-none text-slate-900 focus:bg-white focus:border-orange-500 outline-none transition-all font-medium placeholder:text-slate-300"
                                />
                            </div>
                        </section>

                        <div className="pt-6 border-t border-slate-100">
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#000080] text-white font-bold py-5 rounded-none hover:bg-orange-600 transition-all disabled:opacity-50 text-[12px] uppercase tracking-[0.3em] shadow-xl shadow-blue-900/10 active:scale-[0.99]"
                            >
                                {loading ? 'Processing Registration...' : 'Submit Trainer Application'}
                            </button>
                        </div>

                        <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                            Already have a Trainer ID? <Link href="/trainer/login" className="text-orange-600 hover:underline">Login to Portal</Link>
                        </p>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}
