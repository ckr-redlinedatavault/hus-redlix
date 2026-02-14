'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Search, Calendar, CreditCard, User, Mail, Phone, MapPin } from 'lucide-react';

interface Donation {
    id: string;
    name: string;
    email: string;
    amount: string;
    pan?: string;
    address?: string;
    phone?: string;
    createdAt: string;
}

export default function DonationSubmissionsPage() {
    const [donations, setDonations] = useState<Donation[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchDonations();
    }, []);

    const fetchDonations = async () => {
        try {
            const res = await fetch('/api/donation');
            if (res.ok) {
                const data = await res.json();
                setDonations(data);
            }
        } catch (error) {
            console.error("Failed to fetch donations");
        } finally {
            setLoading(false);
        }
    };

    const filteredDonations = donations.filter(d =>
        d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (d.pan && d.pan.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="space-y-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200 pb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Donation Records</h1>
                    <p className="text-xs font-medium text-slate-500 mt-2">Financial oversight and donor relations management</p>
                </div>

                <div className="relative group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-orange-500 transition-colors w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Filter by donor or PAN..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-12 pr-6 py-4 border border-slate-200 rounded-none focus:ring-0 focus:border-[#000080] outline-none text-sm font-medium w-full md:w-80 bg-white transition-all shadow-sm group-hover:shadow-md"
                    />
                </div>
            </div>

            {loading ? (
                <div className="text-center py-32 text-slate-400 text-sm font-medium font-sans">Accessing donor vault...</div>
            ) : filteredDonations.length === 0 ? (
                <div className="text-center py-32 bg-white rounded-none border border-slate-200 shadow-sm">
                    <Heart className="w-12 h-12 mx-auto mb-6 text-slate-100" />
                    <p className="text-slate-400 text-sm font-medium">System reports zero contributions.</p>
                </div>
            ) : (
                <div className="bg-white rounded-none border border-slate-200 shadow-sm overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-[#000080] text-white text-[11px] font-bold">
                            <tr>
                                <th className="px-8 py-5">Donor Profile</th>
                                <th className="px-8 py-5">Contribution</th>
                                <th className="px-8 py-5">Digital Contact</th>
                                <th className="px-8 py-5">Compliance Info</th>
                                <th className="px-8 py-5 whitespace-nowrap">Transaction Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {filteredDonations.map((donation) => (
                                <tr key={donation.id} className="hover:bg-slate-50 transition-all group">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-11 h-11 rounded-none bg-slate-900 flex items-center justify-center text-white font-bold group-hover:bg-[#000080] transition-colors border-b-2 border-orange-500">
                                                {donation.name.charAt(0)}
                                            </div>
                                            <span className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{donation.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className="text-lg font-bold text-[#000080]">₹{donation.amount}</span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex flex-col gap-2">
                                            <span className="flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-slate-700 transition-colors">
                                                <Mail className="w-3 h-3 text-orange-600" /> {donation.email}
                                            </span>
                                            {donation.phone && (
                                                <span className="flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-slate-700 transition-colors">
                                                    <Phone className="w-3 h-3 text-orange-600" /> {donation.phone}
                                                </span>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex flex-col gap-2">
                                            {donation.pan && (
                                                <div className="flex items-center gap-2">
                                                    <CreditCard className="w-3 h-3 text-slate-400" />
                                                    <span className="text-xs font-bold text-slate-600">PAN: {donation.pan}</span>
                                                </div>
                                            )}
                                            {donation.address && (
                                                <div className="flex items-center gap-2 max-w-[200px]" title={donation.address}>
                                                    <MapPin className="w-3 h-3 text-slate-400" />
                                                    <span className="text-xs font-medium text-slate-500 truncate">{donation.address}</span>
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-[11px] font-bold text-slate-300">
                                        {new Date(donation.createdAt).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
