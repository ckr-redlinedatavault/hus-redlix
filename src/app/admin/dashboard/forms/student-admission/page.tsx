'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

type Submission = {
    id: string;
    district: string;
    schoolName: string;
    studentName: string;
    className: string;
    phoneNo: string;
    studentSignature: string;
    principalSignature: string;
    seal: string;
    createdAt: string;
};

export default function StudentAdmissionAdmin() {
    const [submissions, setSubmissions] = useState<Submission[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedSub, setSelectedSub] = useState<Submission | null>(null);

    useEffect(() => {
        fetchSubmissions();
    }, []);

    const fetchSubmissions = async () => {
        try {
            const res = await fetch('/api/forms/student-admission');
            if (res.ok) {
                const data = await res.json();
                setSubmissions(data);
            }
        } catch (error) {
            console.error('Failed to fetch', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-8">
            <h1 className="text-2xl font-bold text-slate-900 border-l-4 border-orange-500 pl-4 uppercase tracking-widest">Student Admissions Received</h1>

            {loading ? (
                <div className="text-slate-500 font-medium">Loading submissions...</div>
            ) : (
                <div className="bg-white rounded-none border border-orange-500 overflow-hidden shadow-lg shadow-blue-900/5">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-[#000080] text-white font-bold uppercase text-[10px] tracking-[0.2em]">
                                <tr>
                                    <th className="px-6 py-5">Date</th>
                                    <th className="px-6 py-5">Student Name</th>
                                    <th className="px-6 py-5">School</th>
                                    <th className="px-6 py-5">District</th>
                                    <th className="px-6 py-5">Class</th>
                                    <th className="px-6 py-5">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {submissions.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} className="px-6 py-12 text-center text-slate-400 italic">No submissions yet.</td>
                                    </tr>
                                ) : (
                                    submissions.map((sub) => (
                                        <tr key={sub.id} className="hover:bg-orange-50/50 transition-colors group">
                                            <td className="px-6 py-4 text-slate-500 whitespace-nowrap font-medium">
                                                {new Date(sub.createdAt).toLocaleDateString()}
                                            </td>
                                            <td className="px-6 py-4 font-bold text-slate-900 group-hover:text-orange-600 transition-colors uppercase">{sub.studentName}</td>
                                            <td className="px-6 py-4 text-slate-600 font-medium">{sub.schoolName}</td>
                                            <td className="px-6 py-4 text-slate-600 font-medium">{sub.district}</td>
                                            <td className="px-6 py-4 text-slate-600 font-medium">{sub.className}</td>
                                            <td className="px-6 py-4">
                                                <button
                                                    onClick={() => setSelectedSub(sub)}
                                                    className="px-4 py-2 bg-[#000080] text-white font-bold uppercase text-[10px] tracking-widest hover:bg-orange-600 transition-all rounded-none"
                                                >
                                                    View Details
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Detail Modal/Overlay */}
            {selectedSub && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-none shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 relative border-t-8 border-orange-500">
                        <button
                            onClick={() => setSelectedSub(null)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-orange-500 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>

                        <h2 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-orange-500 pl-4 uppercase tracking-widest">Application Details</h2>

                        <div className="grid md:grid-cols-2 gap-8 mb-10 bg-slate-50 p-6 border border-slate-100">
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Student Name</label>
                                <p className="text-slate-900 font-bold uppercase">{selectedSub.studentName}</p>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">School Name</label>
                                <p className="text-slate-900 font-bold">{selectedSub.schoolName}</p>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Class</label>
                                <p className="text-slate-900 font-bold">{selectedSub.className}</p>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Phone No</label>
                                <p className="text-[#000080] font-bold">{selectedSub.phoneNo}</p>
                            </div>
                            <div className="space-y-1 md:col-span-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">District</label>
                                <p className="text-slate-900 font-bold">{selectedSub.district}</p>
                            </div>
                        </div>

                        <h3 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-[0.2em] flex items-center gap-2">
                            <span className="w-2 h-2 bg-orange-500"></span>
                            Signatures & Documents
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="border border-slate-200 bg-slate-50 p-4 rounded-none transition-all hover:border-orange-200">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.1em] text-center mb-3">Student Signature</p>
                                {selectedSub.studentSignature && (
                                    <div className="bg-white p-2 border border-slate-100">
                                        <img src={selectedSub.studentSignature} alt="Student Signature" className="max-h-32 mx-auto object-contain" />
                                    </div>
                                )}
                            </div>
                            <div className="border border-slate-200 bg-slate-50 p-4 rounded-none transition-all hover:border-orange-200">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.1em] text-center mb-3">Principal Signature</p>
                                {selectedSub.principalSignature && (
                                    <div className="bg-white p-2 border border-slate-100">
                                        <img src={selectedSub.principalSignature} alt="Principal Signature" className="max-h-32 mx-auto object-contain" />
                                    </div>
                                )}
                            </div>
                            <div className="border border-slate-200 bg-slate-50 p-4 rounded-none transition-all hover:border-orange-200">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.1em] text-center mb-3">School Seal</p>
                                {selectedSub.seal && (
                                    <div className="bg-white p-2 border border-slate-100">
                                        <img src={selectedSub.seal} alt="Seal" className="max-h-32 mx-auto object-contain" />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="mt-10 flex justify-end">
                            <button
                                onClick={() => setSelectedSub(null)}
                                className="px-8 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold uppercase text-[10px] tracking-widest transition-all rounded-none"
                            >
                                Close Admission Details
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
