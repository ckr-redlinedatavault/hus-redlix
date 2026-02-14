'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { User, Mail, Phone, FileText, ChevronLeft, Download } from 'lucide-react';

interface Application {
    id: string;
    jobId: string;
    applicantName: string;
    email: string;
    phone: string;
    resumeUrl: string;
    coverLetter?: string;
    createdAt: string;
    jobTitle?: string;
}

export default function ApplicationsPage() {
    const [applications, setApplications] = useState<Application[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchApplications();
    }, []);

    const fetchApplications = async () => {
        try {
            const res = await fetch('/api/careers/apply');
            if (res.ok) {
                const data = await res.json();
                setApplications(data);
            }
        } catch (error) {
            console.error("Failed to fetch applications");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <Link
                    href="/admin/dashboard/careers"
                    className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors"
                >
                    <ChevronLeft className="w-5 h-5" />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Job Applications</h1>
                    <p className="text-slate-500">Review received applications for all positions.</p>
                </div>
            </div>

            {loading ? (
                <div className="text-center py-20 text-slate-500">Loading...</div>
            ) : applications.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-xl border border-slate-200">
                    <FileText className="w-12 h-12 mx-auto mb-4 text-slate-300" />
                    <p className="text-slate-500">No applications received yet.</p>
                </div>
            ) : (
                <div className="grid gap-6">
                    {applications.map((app) => (
                        <motion.div
                            key={app.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">{app.applicantName}</h3>
                                    <p className="text-sm text-blue-600 font-medium mb-1">Applied for: {app.jobTitle || 'Unknown Job'}</p>
                                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500">
                                        <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {app.email}</span>
                                        <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {app.phone}</span>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <a
                                        href={app.resumeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium"
                                    >
                                        <Download className="w-4 h-4" /> View Resume
                                    </a>
                                </div>
                            </div>

                            {app.coverLetter && (
                                <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-600 border border-slate-100 mt-4">
                                    <p className="font-semibold text-slate-900 mb-1">Cover Letter:</p>
                                    <p className="whitespace-pre-line">{app.coverLetter}</p>
                                </div>
                            )}

                            <div className="text-xs text-slate-400 mt-4 text-right">
                                Received on {new Date(app.createdAt).toLocaleDateString()} at {new Date(app.createdAt).toLocaleTimeString()}
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
}
