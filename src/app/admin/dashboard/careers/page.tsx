'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Plus, Trash2, Users, Calendar, MapPin, X, Loader2 } from 'lucide-react';

interface Job {
    id: string;
    title: string;
    role: string;
    type: string;
    location: string;
    description: string;
    deadline: string;
    active: boolean;
    createdAt: string;
}

export default function JobsManagementPage() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    // New Job Form State
    const [formData, setFormData] = useState({
        title: '',
        role: '',
        type: 'Full-time',
        location: '',
        description: '',
        deadline: ''
    });

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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this job posting?")) return;
        try {
            const res = await fetch(`/api/careers/jobs?id=${id}`, { method: 'DELETE' });
            if (res.ok) {
                setJobs(jobs.filter(job => job.id !== id));
            }
        } catch (error) {
            console.error("Failed to delete job");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const res = await fetch('/api/careers/jobs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                const newJob = await res.json();
                setJobs([newJob.job, ...jobs]);
                setIsModalOpen(false);
                setFormData({ title: '', role: '', type: 'Full-time', location: '', description: '', deadline: '' });
            }
        } catch (error) {
            console.error("Failed to create job");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="space-y-10 font-sans">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200 pb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Career Opportunities</h1>
                    <p className="text-xs font-medium text-slate-500 mt-2">Manage organizational talent acquisition and job postings</p>
                </div>

                <div className="flex gap-4">
                    <Link
                        href="/admin/dashboard/careers/applications"
                        className="flex items-center gap-3 px-6 py-3 bg-white text-slate-900 rounded-none hover:bg-slate-50 transition-all text-xs font-bold border border-slate-200"
                    >
                        <Users className="w-4 h-4 text-orange-600" /> View Candidates
                    </Link>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center gap-3 px-6 py-3 bg-[#000080] text-white rounded-none hover:bg-slate-900 transition-all text-xs font-bold shadow-xl shadow-blue-900/10 active:scale-95"
                    >
                        <Plus className="w-4 h-4 text-orange-400" /> Dispatch New Posting
                    </button>
                </div>
            </div>

            {loading ? (
                <div className="text-center py-32 text-slate-400 text-sm font-medium">Querying active roles...</div>
            ) : jobs.length === 0 ? (
                <div className="text-center py-32 bg-white rounded-none border border-slate-200 shadow-sm">
                    <Briefcase className="w-12 h-12 mx-auto mb-6 text-slate-100" />
                    <p className="text-slate-400 text-sm font-medium">Zero active opportunities detected.</p>
                </div>
            ) : (
                <div className="grid gap-px bg-slate-200 border border-slate-200 shadow-sm">
                    {jobs.map((job) => (
                        <motion.div
                            key={job.id}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bg-white p-8 group hover:bg-slate-50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-8"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{job.title}</h3>
                                    <span className={`text-[10px] font-bold px-3 py-1 rounded-none border ${job.active ? 'bg-green-50 text-green-700 border-green-200' : 'bg-slate-50 text-slate-500 border-slate-200'}`}>
                                        {job.active ? '● Active' : '○ Closed'}
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-x-8 gap-y-2">
                                    <span className="flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-slate-600 transition-colors">
                                        <Briefcase className="w-3 h-3 text-orange-600" /> {job.role}
                                    </span>
                                    <span className="flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-slate-600 transition-colors">
                                        <MapPin className="w-3 h-3 text-orange-600" /> {job.location || 'Remote HQ'}
                                    </span>
                                    <span className="flex items-center gap-2 text-xs font-bold text-slate-300">
                                        <Calendar className="w-3 h-3" /> System Deadline: {job.deadline || 'OPEN'}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => handleDelete(job.id)}
                                    className="p-3 text-slate-300 hover:text-red-600 hover:bg-red-50 transition-all border border-transparent hover:border-red-100 rounded-none active:scale-90"
                                    title="Deactivate & Delete"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

            {/* New Job Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
                            onClick={() => setIsModalOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="bg-white rounded-none shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative z-10 border border-slate-200"
                        >
                            <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-[#000080]">
                                <h2 className="text-xl font-bold text-white">Personnel Acquisition Dispatch</h2>
                                <button onClick={() => setIsModalOpen(false)} className="text-white/60 hover:text-white transition-colors p-2 hover:bg-white/10">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="p-10 space-y-8 font-sans">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="block text-xs font-bold text-slate-400">Job Designation</label>
                                        <input required type="text" name="title" value={formData.title} onChange={handleInputChange} className="w-full px-5 py-3 border border-slate-200 rounded-none outline-none focus:border-[#000080] text-slate-900 font-bold text-sm bg-slate-50 focus:bg-white transition-all" placeholder="e.g. Chief Technologist" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-xs font-bold text-slate-400">Operational Department</label>
                                        <input required type="text" name="role" value={formData.role} onChange={handleInputChange} className="w-full px-5 py-3 border border-slate-200 rounded-none outline-none focus:border-[#000080] text-slate-900 font-bold text-sm bg-slate-50 focus:bg-white transition-all" placeholder="e.g. Operations" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="block text-xs font-bold text-slate-400">Employment Framework</label>
                                        <select name="type" value={formData.type} onChange={handleInputChange} className="w-full px-5 py-3 border border-slate-200 rounded-none outline-none focus:border-[#000080] text-slate-900 font-bold text-xs bg-slate-50 focus:bg-white transition-all cursor-pointer">
                                            <option>Full-time</option>
                                            <option>Part-time</option>
                                            <option>Contract</option>
                                            <option>Internship</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-xs font-bold text-slate-400">Physical Location / Zone</label>
                                        <input type="text" name="location" value={formData.location} onChange={handleInputChange} className="w-full px-5 py-3 border border-slate-200 rounded-none outline-none focus:border-[#000080] text-slate-900 font-bold text-sm bg-slate-50 focus:bg-white transition-all" placeholder="e.g. Remote / Bengaluru" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-xs font-bold text-slate-400">Submission Threshold (Date)</label>
                                    <input type="date" name="deadline" value={formData.deadline} onChange={handleInputChange} className="w-full px-5 py-3 border border-slate-200 rounded-none outline-none focus:border-[#000080] text-slate-900 font-bold text-sm bg-slate-50 focus:bg-white transition-all" />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-xs font-bold text-slate-400">Strategic Objectives (Description)</label>
                                    <textarea required name="description" rows={5} value={formData.description} onChange={handleInputChange} className="w-full px-5 py-4 border border-slate-200 rounded-none outline-none focus:border-[#000080] text-slate-700 font-medium text-sm bg-slate-50 focus:bg-white transition-all" placeholder="Describe the mission requirements and core responsibilities..."></textarea>
                                </div>

                                <div className="pt-8 border-t border-slate-100 flex justify-end gap-6">
                                    <button type="button" onClick={() => setIsModalOpen(false)} className="px-6 py-3 text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-all text-xs font-bold">Abort Mission</button>
                                    <button type="submit" disabled={submitting} className="px-10 py-3 bg-[#000080] text-white rounded-none hover:bg-slate-900 transition-all text-xs font-bold flex items-center gap-3 shadow-xl shadow-blue-900/10 active:scale-95">
                                        {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Dispatch Posting <Briefcase className="w-3 h-3 text-orange-400" /></>}
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
