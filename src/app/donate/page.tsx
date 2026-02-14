'use client';

import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';
import { Heart, CreditCard, Loader2, CheckCircle, ShieldCheck } from 'lucide-react';

export default function DonatePage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        amount: '',
        pan: '',
        address: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAmountSelect = (amount: string) => {
        setFormData({ ...formData, amount });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/donation', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!response.ok) throw new Error('Failed to submit donation');

            setSuccess(true);
            setFormData({ name: '', email: '', phone: '', amount: '', pan: '', address: '' });
            setTimeout(() => setSuccess(false), 5000);
        } catch (err) {
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const donationAmounts = ['500', '1000', '2500', '5000'];

    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            {/* Simple Hero Section */}
            <section className="bg-[#000080] pt-10 pb-10 md:pt-15 md:pb-12 relative overflow-hidden">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none"
                    style={{ backgroundImage: `radial-gradient(circle, #fff 0.8px, transparent 0.8px)`, backgroundSize: '24px 24px' }}
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-2xl text-left"
                    >
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight leading-tight">
                            Support our <span className="text-orange-400">Mission.</span>
                        </h1>
                        <p className="text-blue-50/80 text-sm md:text-base font-normal max-w-lg">
                            Your contribution helps us empower more students and institutions. Every donation makes a difference.
                        </p>
                    </motion.div>
                </div>
            </section>

            <main className="flex-grow py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-none border border-orange-500 hover:shadow-sm transition-all overflow-hidden"
                >
                    <div className="p-8 md:p-12">
                        <div className="flex items-center gap-4 mb-10 border-b border-slate-100 pb-6">
                            <div className="p-3 bg-orange-50 text-orange-600">
                                <Heart className="w-6 h-6 fill-current" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">Make a Donation</h2>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-10">
                            {/* Amount Selection */}
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-5 uppercase tracking-wider">Select Amount (INR)</label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                    {donationAmounts.map((amt) => (
                                        <button
                                            key={amt}
                                            type="button"
                                            onClick={() => handleAmountSelect(amt)}
                                            className={`py-4 px-4 rounded-none font-bold border transition-all text-sm uppercase tracking-widest ${formData.amount === amt
                                                ? 'bg-[#000080] text-white border-blue-900 shadow-lg shadow-blue-900/10'
                                                : 'bg-white text-slate-600 border-slate-200 hover:border-orange-500 hover:text-orange-600'
                                                }`}
                                        >
                                            ₹{amt}
                                        </button>
                                    ))}
                                </div>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                                    <input
                                        type="number"
                                        name="amount"
                                        value={formData.amount}
                                        onChange={handleChange}
                                        placeholder="Or enter custom amount"
                                        className="w-full pl-10 pr-4 py-4 border border-slate-200 rounded-none focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-slate-900 font-bold placeholder:font-medium placeholder:text-slate-300"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="border-t border-slate-100" />

                            {/* Personal Details */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-slate-200 rounded-none focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-slate-900 font-medium placeholder:text-slate-300"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-slate-200 rounded-none focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-slate-900 font-medium placeholder:text-slate-300"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        placeholder="+91..."
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-slate-200 rounded-none focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-slate-900 font-medium placeholder:text-slate-300"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="pan" className="text-sm font-bold text-slate-700 uppercase tracking-wider">PAN (For Tax Benefit)</label>
                                    <input
                                        type="text"
                                        id="pan"
                                        name="pan"
                                        placeholder="Optional"
                                        value={formData.pan}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-slate-200 rounded-none focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-slate-900 font-medium placeholder:text-slate-300"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="address" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Billing Address</label>
                                <textarea
                                    id="address"
                                    name="address"
                                    rows={3}
                                    placeholder="Enter your complete address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-slate-200 rounded-none focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-slate-900 font-medium placeholder:text-slate-300 resize-none"
                                ></textarea>
                            </div>

                            <div className="bg-slate-50 p-6 border-l-4 border-orange-500 flex gap-4 text-sm text-slate-600 font-medium">
                                <ShieldCheck className="w-5 h-5 text-orange-600 flex-shrink-0" />
                                <p>Secure Payment: We use encrypted gateways to ensure your transaction is safe.</p>
                            </div>

                            {error && (
                                <div className="p-4 bg-red-50 text-red-700 border border-red-100 font-bold text-sm">
                                    {error}
                                </div>
                            )}

                            {success && (
                                <div className="p-4 bg-green-50 text-green-700 border border-green-100 font-bold text-sm flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5" />
                                    Our team will reach you soon to complete the payment process and provide your receipt.
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading || success}
                                className="w-full bg-[#000080] hover:bg-orange-600 text-white font-bold py-5 px-6 rounded-none transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-900/10 active:scale-[0.99] disabled:opacity-50"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-6 h-6 animate-spin" />
                                        Processing...
                                    </>
                                ) : success ? (
                                    <>
                                        <CheckCircle className="w-6 h-6" />
                                        Request Submitted
                                    </>
                                ) : (
                                    <>
                                        Proceed to Donate <CreditCard className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
}
