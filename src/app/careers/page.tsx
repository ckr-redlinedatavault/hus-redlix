'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Clock, ChevronRight, Upload, X, Loader2, CheckCircle } from 'lucide-react';

interface Job {
    id: string;
    title: string;
    role: string;
    type: string;
    location: string;
    description: string;
    deadline: string;
}

export default function CareersPage() {
    // Logic and State (Fully Preserved)
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [applyForm, setApplyForm] = useState({
        applicantName: '',
        email: '',
        phone: '',
        resumeUrl: '',
        coverLetter: ''
    });
    const [applying, setApplying] = useState(false);
    const [applySuccess, setApplySuccess] = useState(false);

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const res = await fetch('/api/careers/jobs');
            if (res.ok) {
                const data = await res.json();
                setJobs(data);
            }
        } catch (error) {
            console.error("Failed to fetch jobs");
        } finally {
            setLoading(false);
        }
    };

    const handleApplyChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setApplyForm({ ...applyForm, [e.target.name]: e.target.value });
    };

    const submitApplication = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedJob) return;
        setApplying(true);
        try {
            const payload = { jobId: selectedJob.id, ...applyForm };
            const res = await fetch('/api/careers/apply', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (res.ok) {
                setApplySuccess(true);
                setTimeout(() => {
                    setApplySuccess(false);
                    setSelectedJob(null);
                    setApplyForm({ applicantName: '', email: '', phone: '', resumeUrl: '', coverLetter: '' });
                }, 3000);
            }
        } catch (error) {
            console.error("Error applying:", error);
        } finally {
            setApplying(false);
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
                            Join our team and <span className="text-orange-400">make an impact.</span>
                        </h1>
                        <p className="text-blue-50/80 text-sm md:text-base font-normal max-w-lg">
                            Build your career within the scouting movement. Discover roles that empower the next generation.
                        </p>
                    </motion.div>
                </div>
            </section>

            <main className="flex-grow py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <Loader2 className="w-8 h-8 animate-spin text-orange-600 mb-3" />
                        <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Loading positions</p>
                    </div>
                ) : (
                    <div className="space-y-8">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-6">
                            <h2 className="text-2xl font-semibold text-slate-900">Available roles</h2>
                            <span className="bg-orange-50 text-orange-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{jobs.length} Positions</span>
                        </div>

                        <div className="grid gap-4">
                            {jobs.length === 0 ? (
                                <div className="text-center py-20 border border-slate-100 rounded-none bg-slate-50/30">
                                    <Briefcase className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                                    <p className="text-slate-500">No open positions at the moment.</p>
                                </div>
                            ) : (
                                jobs.map((job) => (
                                    <motion.div
                                        key={job.id}
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="bg-white rounded-none p-6 border border-orange-500 hover:border-orange-600 hover:shadow-sm transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
                                    >
                                        <div className="space-y-2">
                                            <h3 className="text-xl font-semibold text-slate-900">{job.title}</h3>
                                            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500 font-medium">
                                                <span className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-orange-500" /> {job.role}</span>
                                                <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-orange-500" /> {job.type}</span>
                                                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-orange-500" /> {job.location}</span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setSelectedJob(job)}
                                            className="bg-[#000080] hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-none transition-all text-sm flex items-center justify-center gap-2 shadow-sm"
                                        >
                                            View Details <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </motion.div>
                                ))
                            )}
                        </div>
                    </div>
                )}
            </main>

            <Footer />

            {/* Application Modal */}
            <AnimatePresence>
                {selectedJob && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
                            onClick={() => setSelectedJob(null)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.98, y: 10 }}
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden relative z-10 flex flex-col"
                        >
                            <div className="p-6 md:p-10 overflow-y-auto">
                                <button
                                    onClick={() => setSelectedJob(null)}
                                    className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <div className="mb-8 border-b border-slate-100 pb-8">
                                    <h2 className="text-3xl font-bold text-slate-900 mb-2">{selectedJob.title}</h2>
                                    <p className="text-base font-semibold text-orange-600">{selectedJob.type} • {selectedJob.location}</p>
                                    <div className="mt-6 prose prose-slate max-w-none text-slate-600 leading-relaxed whitespace-pre-line">
                                        {selectedJob.description}
                                    </div>
                                </div>

                                <div className="bg-slate-50 p-8 rounded-2xl">
                                    <h3 className="text-xl font-semibold text-slate-900 mb-6">Submit your application</h3>

                                    {applySuccess ? (
                                        <div className="text-center py-8">
                                            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                                            <p className="font-semibold text-slate-900 text-lg">Application successfully submitted!</p>
                                        </div>
                                    ) : (
                                        <form onSubmit={submitApplication} className="space-y-5">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-sm font-semibold text-slate-700">Full name *</label>
                                                    <input required type="text" name="applicantName" value={applyForm.applicantName} onChange={handleApplyChange}
                                                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-none outline-none focus:ring-2 focus:ring-orange-500 text-slate-900 placeholder:text-slate-400 font-medium transition-all"
                                                        placeholder="John Doe" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-sm font-semibold text-slate-700">Email address *</label>
                                                    <input required type="email" name="email" value={applyForm.email} onChange={handleApplyChange}
                                                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-none outline-none focus:ring-2 focus:ring-orange-500 text-slate-900 placeholder:text-slate-400 font-medium transition-all"
                                                        placeholder="john@example.com" />
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm font-semibold text-slate-700">Phone number *</label>
                                                <input required type="tel" name="phone" value={applyForm.phone} onChange={handleApplyChange}
                                                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-none outline-none focus:ring-2 focus:ring-orange-500 text-slate-900 placeholder:text-slate-400 font-medium transition-all"
                                                    placeholder="+91..." />
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm font-semibold text-slate-700">Resume link (GDrive / Dropbox) *</label>
                                                <div className="relative">
                                                    <Upload className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                                    <input required type="url" name="resumeUrl" value={applyForm.resumeUrl} onChange={handleApplyChange}
                                                        className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-none outline-none focus:ring-2 focus:ring-orange-500 text-slate-900 placeholder:text-slate-400 font-medium transition-all"
                                                        placeholder="https://drive.google.com/..." />
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm font-semibold text-slate-700">Cover letter</label>
                                                <textarea name="coverLetter" rows={4} value={applyForm.coverLetter} onChange={handleApplyChange}
                                                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-none outline-none focus:ring-2 focus:ring-orange-500 text-slate-900 placeholder:text-slate-400 font-medium resize-none transition-all"
                                                    placeholder="Tell us about yourself..."></textarea>
                                            </div>

                                            <button type="submit" disabled={applying} className="w-full bg-[#000080] hover:bg-orange-600 text-white font-bold py-4 rounded-none transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-900/10">
                                                {applying ? <Loader2 className="w-5 h-5 animate-spin" /> : "Submit application"}
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}