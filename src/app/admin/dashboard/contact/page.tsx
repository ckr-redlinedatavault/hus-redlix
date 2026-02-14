'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Search, Calendar, MessageSquare, Phone } from 'lucide-react';

interface Submission {
    id: string;
    name: string;
    email: string;
    message: string;
    phone?: string;
    subject?: string;
    createdAt: string;
}

export default function ContactSubmissionsPage() {
    const [submissions, setSubmissions] = useState<Submission[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchSubmissions();
    }, []);

    const fetchSubmissions = async () => {
        try {
            const res = await fetch('/api/contact');
            if (res.ok) {
                const data = await res.json();
                setSubmissions(data);
            }
        } catch (error) {
            console.error("Failed to fetch contact submissions");
        } finally {
            setLoading(false);
        }
    };

    const filteredSubmissions = submissions.filter(sub =>
        sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (sub.subject && sub.subject.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="space-y-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200 pb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Contact Inquiries</h1>
                    <p className="text-xs font-medium text-slate-500 mt-2">Management of communication logs and public outreach</p>
                </div>

                <div className="relative group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-orange-500 transition-colors w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Filter by name or subject..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-12 pr-6 py-4 border border-slate-200 rounded-none focus:ring-0 focus:border-[#000080] outline-none text-sm font-medium w-full md:w-80 bg-white transition-all"
                    />
                </div>
            </div>

            {loading ? (
                <div className="text-center py-32 text-slate-400 text-sm font-medium font-sans">Syncing system logs...</div>
            ) : filteredSubmissions.length === 0 ? (
                <div className="text-center py-32 bg-white rounded-none border border-slate-200">
                    <Mail className="w-12 h-12 mx-auto mb-6 text-slate-200" />
                    <p className="text-slate-400 text-sm font-medium">Zero records found in database.</p>
                </div>
            ) : (
                <div className="grid gap-px bg-slate-200 border border-slate-200">
                    {filteredSubmissions.map((sub) => (
                        <motion.div
                            key={sub.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bg-white p-8 group hover:bg-slate-50 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-6">
                                <div className="flex items-start gap-6">
                                    <div className="w-14 h-14 rounded-none bg-slate-900 flex items-center justify-center text-white font-bold text-xl shrink-0 group-hover:bg-[#000080] transition-colors border-b-4 border-orange-500">
                                        {sub.name.charAt(0)}
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold text-slate-900">{sub.name}</h3>
                                        <div className="flex flex-wrap gap-x-6 gap-y-2">
                                            <span className="flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-slate-600 transition-colors">
                                                <Mail className="w-3 h-3 text-orange-600" /> {sub.email}
                                            </span>
                                            {sub.phone && (
                                                <span className="flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-slate-600 transition-colors">
                                                    <Phone className="w-3 h-3 text-orange-600" /> {sub.phone}
                                                </span>
                                            )}
                                            <span className="flex items-center gap-2 text-xs font-bold text-slate-300">
                                                <Calendar className="w-3 h-3" /> {new Date(sub.createdAt).toLocaleDateString()}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {sub.subject && (
                                    <span className="px-4 py-2 bg-orange-50 text-orange-700 border border-orange-200 text-[10px] font-bold rounded-none group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 transition-all">
                                        {sub.subject}
                                    </span>
                                )}
                            </div>

                            <div className="bg-slate-50 p-6 rounded-none border-l-4 border-[#000080] flex gap-4 text-slate-700 text-sm font-medium group-hover:bg-white group-hover:border-orange-500 transition-all">
                                <MessageSquare className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
                                <p className="leading-relaxed">{sub.message}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
}
