'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { FileText, Download, Search, Loader2 } from 'lucide-react';

interface Doc {
    id: string;
    title: string;
    description: string;
    fileUrl: string;
    category: string;
}

export default function DocumentsPage() {
    const [docs, setDocs] = useState<Doc[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

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
            console.error("Failed to fetch docs");
        } finally {
            setLoading(false);
        }
    };

    const filteredDocs = docs.filter(doc =>
        doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (doc.category && doc.category.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const categories = Array.from(new Set(docs.map(d => d.category || 'Other')));

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
                            Documents & <span className="text-orange-400">Resources.</span>
                        </h1>
                        <p className="text-blue-50/80 text-sm md:text-base font-normal max-w-lg">
                            Download official documents, forms, guides, and other important resources.
                        </p>
                    </motion.div>
                </div>
            </section>

            <main className="flex-grow py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                {/* Search & Filter */}
                <div className="mb-10 max-w-2xl">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search documents..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-none border border-orange-500 shadow-none focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none font-medium text-slate-900"
                        />
                    </div>
                </div>

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <Loader2 className="w-8 h-8 animate-spin text-orange-600 mb-3" />
                        <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Loading resources</p>
                    </div>
                ) : filteredDocs.length === 0 ? (
                    <div className="text-center py-20 bg-slate-50 border border-slate-100 rounded-none">
                        <FileText className="w-12 h-12 mx-auto mb-4 text-slate-300" />
                        <p className="text-slate-500">No documents found matching your search.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredDocs.map((doc) => (
                            <motion.div
                                key={doc.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white rounded-none border border-orange-500 hover:border-orange-600 hover:shadow-sm transition-all p-8 flex flex-col h-full"
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className="p-3 bg-orange-50 text-orange-600">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    {doc.category && (
                                        <span className="text-[10px] font-bold px-3 py-1 bg-slate-100 text-slate-600 uppercase tracking-widest">
                                            {doc.category}
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 leading-tight">{doc.title}</h3>
                                <p className="text-sm text-slate-500 mb-8 flex-grow line-clamp-3 font-medium leading-relaxed">{doc.description}</p>

                                <a
                                    href={doc.fileUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-[#000080] hover:bg-orange-600 text-white font-bold py-4 rounded-none transition-all flex items-center justify-center gap-3 text-sm shadow-lg shadow-blue-900/5 group"
                                >
                                    <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" /> Download Resource
                                </a>
                            </motion.div>
                        ))}
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}
