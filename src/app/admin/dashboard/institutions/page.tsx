'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '../layout';

type Institution = {
    id: string;
    uniqueId: string;
    instiName: string;
    instiType: string;
    headName: string;
    phoneNo: string;
    email: string;
    district: string;
    status: string;
    trainerId?: string;
};

type Trainer = {
    uniqueId: string;
    fullName: string;
    district: string;
};

export default function AdminInstitutions() {
    const [institutions, setInstitutions] = useState<Institution[]>([]);
    const [trainers, setTrainers] = useState<Trainer[]>([]);
    const [loading, setLoading] = useState(true);
    const [actionLoading, setActionLoading] = useState<string | null>(null);

    const fetchData = async () => {
        try {
            const [instiRes, trainerRes] = await Promise.all([
                fetch('/api/admin/insti'),
                fetch('/api/admin/trainers/approved')
            ]);
            const instiData = await instiRes.json();
            const trainerData = await trainerRes.json();
            setInstitutions(instiData);
            setTrainers(trainerData);
        } catch (err) {
            console.error('Fetch error:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const updateStatus = async (id: string, status: string) => {
        setActionLoading(id);
        try {
            const res = await fetch(`/api/admin/insti/${id}/status`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status }),
            });
            if (res.ok) fetchData();
        } finally {
            setActionLoading(null);
        }
    };

    const assignTrainer = async (id: string, trainerId: string) => {
        setActionLoading(id);
        try {
            const res = await fetch(`/api/admin/insti/${id}/assign-trainer`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ trainerId }),
            });
            if (res.ok) fetchData();
        } finally {
            setActionLoading(null);
        }
    };

    if (loading) return <div className="p-8 text-gray-400 font-medium text-sm">Loading Institutions...</div>;

    return (
        <div className="space-y-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200 pb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Institutional Management</h1>
                    <p className="text-xs font-medium text-slate-500 mt-2">Oversee educational partnerships and academic compliance</p>
                </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-none overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#000080] text-white">
                                <th className="p-6 text-[11px] font-bold">Institution Registry</th>
                                <th className="p-6 text-[11px] font-bold">Identity / Region</th>
                                <th className="p-6 text-[11px] font-bold">Auth Status</th>
                                <th className="p-6 text-[11px] font-bold">Resource Assignment</th>
                                <th className="p-6 text-[11px] font-bold">System Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {institutions.map((insti) => (
                                <tr key={insti.id} className="hover:bg-slate-50 transition-all group">
                                    <td className="p-6">
                                        <p className="font-bold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">{insti.instiName}</p>
                                        <p className="text-xs font-bold text-slate-400 mt-2">ID: {insti.uniqueId}</p>
                                    </td>
                                    <td className="p-6">
                                        <div className="flex flex-col gap-1">
                                            <p className="text-xs font-bold text-slate-700">{insti.instiType}</p>
                                            <p className="text-[11px] font-bold text-slate-400">{insti.district}</p>
                                        </div>
                                    </td>
                                    <td className="p-6">
                                        <span className={`px-3 py-1.5 rounded-none text-[10px] font-bold border ${insti.status === 'APPROVED' ? 'bg-green-50 text-green-700 border-green-200' :
                                            insti.status === 'PENDING' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                                                'bg-red-50 text-red-700 border-red-200'
                                            }`}>
                                            ● {insti.status}
                                        </span>
                                    </td>
                                    <td className="p-6 min-w-[240px]">
                                        {insti.status === 'APPROVED' ? (
                                            <select
                                                disabled={actionLoading === insti.id}
                                                className="w-full bg-slate-50 border border-slate-200 rounded-none px-4 py-3 text-xs font-bold focus:outline-none focus:border-orange-500 hover:bg-white transition-all appearance-none cursor-pointer"
                                                value={insti.trainerId || ''}
                                                onChange={(e) => assignTrainer(insti.id, e.target.value)}
                                                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23cbd5e1'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1rem' }}
                                            >
                                                <option value="">+ Select Trainer</option>
                                                {trainers.map(t => (
                                                    <option key={t.uniqueId} value={t.uniqueId}>
                                                        {t.fullName} [{t.district}]
                                                    </option>
                                                ))}
                                            </select>
                                        ) : (
                                            <p className="text-xs font-bold text-slate-300">Pending System Approval</p>
                                        )}
                                    </td>
                                    <td className="p-6 whitespace-nowrap">
                                        <div className="flex gap-3">
                                            {insti.status === 'PENDING' && (
                                                <>
                                                    <button
                                                        onClick={() => updateStatus(insti.id, 'APPROVED')}
                                                        className="px-4 py-2 bg-slate-900 text-white rounded-none text-[10px] font-bold hover:bg-[#000080] transition-all shadow-xl shadow-blue-900/5 active:scale-95"
                                                    >
                                                        APPROVE
                                                    </button>
                                                    <button
                                                        onClick={() => updateStatus(insti.id, 'DECLINED')}
                                                        className="px-4 py-2 bg-white text-red-600 border border-red-200 rounded-none text-[10px] font-bold hover:bg-red-600 hover:text-white transition-all active:scale-95"
                                                    >
                                                        DECLINE
                                                    </button>
                                                </>
                                            )}
                                            {insti.status !== 'PENDING' && (
                                                <button
                                                    onClick={() => updateStatus(insti.id, 'PENDING')}
                                                    className="px-4 py-2 text-slate-400 hover:text-slate-900 text-[10px] font-bold transition-all border border-transparent hover:border-slate-200"
                                                >
                                                    RESET TO PENDING
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {institutions.length === 0 && (
                        <div className="p-32 text-center bg-white border-t border-slate-100">
                            <p className="text-slate-300 font-bold text-xs">Registry is currently empty</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
