'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Plus, Trash2, Download, Search, X, Loader2, Upload } from 'lucide-react';

interface Doc {
    id: string;
    title: string;
    description: string;
    fileUrl: string;
    category: string;
    createdAt: string;
}

export default function DocumentsManagementPage() {
    const [docs, setDocs] = useState<Doc[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // New Doc Form
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        fileUrl: '',
        category: 'General'
    });

    useEffect(() => {
        fetchDocs();
    }, []);

    const fetchDocs = async () => {
        try {
            const res = await fetch('/api/documents');
            if (res.ok) {
                const data = await res.json();
                setDocs(data);
            }
        } catch (error) {
            console.error("Failed to fetch documents");
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this document?")) return;
        try {
            const res = await fetch(`/api/documents?id=${id}`, { method: 'DELETE' });
            if (res.ok) {
                setDocs(docs.filter(d => d.id !== id));
            }
        } catch (error) {
            console.error("Failed to delete document");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const res = await fetch('/api/documents', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                const newDoc = await res.json();
                setDocs([newDoc.doc, ...docs]);
                setIsModalOpen(false);
                setFormData({ title: '', description: '', fileUrl: '', category: 'General' });
            }
        } catch (error) {
            console.error("Failed to create document");
        } finally {
            setSubmitting(false);
        }
    };

    const filteredDocs = docs.filter(doc =>
        doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (doc.category && doc.category.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="space-y-10 font-sans">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200 pb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Document Management</h1>
                    <p className="text-xs font-medium text-slate-500 mt-2">Archive and distribution of digitized organizational records</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-orange-500 transition-colors w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Filter documents..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-12 pr-6 py-3 border border-slate-200 rounded-none focus:ring-0 focus:border-[#000080] outline-none text-xs font-medium w-full sm:w-64 bg-white transition-all shadow-sm"
                        />
                    </div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center justify-center gap-3 px-6 py-3 bg-[#000080] text-white rounded-none hover:bg-slate-900 transition-all text-xs font-bold shadow-xl shadow-blue-900/10 active:scale-95 whitespace-nowrap"
                    >
                        <Plus className="w-4 h-4 text-orange-400" /> Upload Artifact
                    </button>
                </div>
            </div>

            {loading ? (
                <div className="text-center py-32 text-slate-400 text-xs font-medium">Querying vault registry...</div>
            ) : filteredDocs.length === 0 ? (
                <div className="text-center py-32 bg-white rounded-none border border-slate-200 shadow-sm">
                    <FileText className="w-12 h-12 mx-auto mb-6 text-slate-100" />
                    <p className="text-slate-400 text-xs font-medium">Zero artifacts found in database.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredDocs.map((doc) => (
                        <motion.div
                            key={doc.id}
                            layout
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white p-6 rounded-none border border-slate-200 shadow-sm hover:shadow-xl group transition-all flex flex-col relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-16 h-1 bg-[#000080] group-hover:w-full transition-all duration-500" />

                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-slate-900 text-white rounded-none border-b-2 border-orange-500 group-hover:bg-[#000080] transition-colors">
                                    <FileText className="w-5 h-5" />
                                </div>
                                <button
                                    onClick={() => handleDelete(doc.id)}
                                    className="p-2 text-slate-300 hover:text-red-600 hover:bg-red-50 rounded-none transition-all border border-transparent hover:border-red-100"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </div>

                            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-1">{doc.title}</h3>
                            <span className="text-[10px] font-bold text-slate-500 mb-4 bg-slate-50 px-3 py-1 border border-slate-100 rounded-none w-fit">{doc.category}</span>
                            <p className="text-xs text-slate-500 line-clamp-2 mb-8 flex-grow">{doc.description}</p>

                            <a
                                href={doc.fileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto w-full py-3 bg-slate-900 hover:bg-[#000080] text-white text-xs font-bold flex items-center justify-center gap-3 transition-all rounded-none shadow-lg active:scale-95"
                            >
                                <Download className="w-4 h-4 text-orange-400" /> Verify & Access
                            </a>
                        </motion.div>
                    ))}
                </div>
            )}

            {/* New Doc Modal */}
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
                            className="bg-white rounded-none shadow-2xl w-full max-w-lg overflow-hidden relative z-10 border border-slate-200"
                        >
                            <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-[#000080]">
                                <h2 className="text-xl font-bold text-white">Organization Vault Ingress</h2>
                                <button onClick={() => setIsModalOpen(false)} className="text-white/60 hover:text-white transition-colors p-2 hover:bg-white/10">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="p-10 space-y-8 font-sans">
                                <div className="space-y-2">
                                    <label className="block text-xs font-bold text-slate-400">Artifact Title</label>
                                    <input required type="text" name="title" value={formData.title} onChange={handleInputChange} className="w-full px-5 py-3 border border-slate-200 rounded-none outline-none focus:border-[#000080] text-slate-900 font-bold text-sm bg-slate-50 focus:bg-white transition-all shadow-inner" placeholder="e.g. Strategy Report 2024" />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-xs font-bold text-slate-400">Organizational Category</label>
                                    <select name="category" value={formData.category} onChange={handleInputChange} className="w-full px-5 py-3 border border-slate-200 rounded-none outline-none focus:border-[#000080] text-slate-900 font-bold text-xs bg-slate-50 focus:bg-white transition-all cursor-pointer">
                                        <option>General</option>
                                        <option>Forms</option>
                                        <option>Legal</option>
                                        <option>Reports</option>
                                        <option>Manuals</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-xs font-bold text-slate-400">External Storage Signature (URL)</label>
                                    <div className="relative">
                                        <Upload className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-500" />
                                        <input required type="url" name="fileUrl" value={formData.fileUrl} onChange={handleInputChange} className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-none outline-none focus:border-[#000080] text-slate-900 font-medium text-xs bg-slate-50 focus:bg-white transition-all" placeholder="https://..." />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-xs font-bold text-slate-400">Abstract / Metadata</label>
                                    <textarea name="description" rows={3} value={formData.description} onChange={handleInputChange} className="w-full px-5 py-4 border border-slate-200 rounded-none outline-none focus:border-[#000080] text-slate-700 font-medium text-sm bg-slate-50 focus:bg-white transition-all" placeholder="Brief metadata description concerning the artifact content..."></textarea>
                                </div>

                                <div className="pt-8 border-t border-slate-100 flex justify-end gap-6">
                                    <button type="button" onClick={() => setIsModalOpen(false)} className="px-6 py-3 text-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-all text-xs font-bold">Abort Upload</button>
                                    <button type="submit" disabled={submitting} className="px-10 py-3 bg-[#000080] text-white rounded-none hover:bg-slate-900 transition-all text-xs font-bold flex items-center gap-3 shadow-xl shadow-blue-900/10 active:scale-95">
                                        {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Execute Ingress <Upload className="w-3 h-3 text-orange-400" /></>}
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
