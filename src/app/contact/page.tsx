'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!response.ok) throw new Error('Failed to submit form');

            setSuccess(true);
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            setTimeout(() => setSuccess(false), 5000);
        } catch (err) {
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

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
                            Get in <span className="text-orange-400">Touch.</span>
                        </h1>
                        <p className="text-blue-50/80 text-sm md:text-base font-normal max-w-lg">
                            Have questions or need assistance? We're here to help you empower students and institutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            <main className="flex-grow py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-10"
                    >
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-orange-500 pl-4 uppercase tracking-wider">Contact Information</h2>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                We'd love to hear from you. Whether you have a question about our programs, need assistance with membership, or just want to say hi, our team is ready to answer all your questions.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 text-[#000080]">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Email Us</h3>
                                    <p className="text-slate-900 font-bold">hsgatelangana@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 text-[#000080]">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Call Us</h3>
                                    <p className="text-slate-900 font-bold whitespace-nowrap">040-31607502 | +91 7997819797</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 text-[#000080]">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">State Headquarters</h3>
                                    <p className="text-slate-900 font-bold leading-relaxed">
                                        B-3 F-1, Vigyan Puri Colony,<br />
                                        Vidhya Nagar, Hyderabad,<br />
                                        Telangana-500044
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white rounded-none border border-orange-500 p-8 md:p-10 shadow-lg shadow-blue-900/5"
                    >
                        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                            <Send className="w-6 h-6 text-orange-500" />
                            Send Message
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-slate-200 rounded-none focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-slate-900 font-medium placeholder:text-slate-300"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-slate-200 rounded-none focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-slate-900 font-medium placeholder:text-slate-300"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-slate-200 rounded-none focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-slate-900 font-medium placeholder:text-slate-300"
                                        placeholder="+91 9876543210"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Subject</label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-slate-200 rounded-none focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-slate-900 font-medium"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="General Inquiry">General Inquiry</option>
                                        <option value="Support">Support</option>
                                        <option value="Partnership">Partnership</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-slate-200 rounded-none focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-slate-900 font-medium placeholder:text-slate-300 resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            {error && (
                                <div className="p-4 bg-red-50 text-red-700 border border-red-100 font-bold text-sm">
                                    {error}
                                </div>
                            )}

                            {success && (
                                <div className="p-4 bg-green-50 text-green-700 border border-green-100 font-bold text-sm flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5" />
                                    Message sent! We'll get back to you soon.
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
                                        Sending...
                                    </>
                                ) : success ? (
                                    <>
                                        <CheckCircle className="w-6 h-6" />
                                        Sent
                                    </>
                                ) : (
                                    <>
                                        Send Message <Send className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
