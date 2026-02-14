'use client';

import React from 'react';
import { Settings as SettingsIcon, Shield, Bell, User, Database, Globe } from 'lucide-react';

export default function SettingsPage() {
    return (
        <div className="space-y-12 pb-20">
            <div>
                <h1 className="text-3xl font-bold text-slate-900">System Settings</h1>
                <p className="text-sm font-medium text-slate-500 mt-1">Configure Administrative and Operational parameters</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Security Settings */}
                <div className="bg-white border border-slate-200 rounded-none shadow-sm overflow-hidden">
                    <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center gap-4">
                        <div className="p-2 bg-blue-50 text-blue-600">
                            <Shield className="w-5 h-5" />
                        </div>
                        <h2 className="text-sm font-bold text-slate-900">Security & Authentication</h2>
                    </div>
                    <div className="p-8 space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-bold text-slate-700">Two-Factor Authentication</p>
                                <p className="text-xs text-slate-500">Add an extra layer of security to your account</p>
                            </div>
                            <div className="w-12 h-6 bg-slate-200 rounded-full cursor-not-allowed"></div>
                        </div>
                        <div className="flex items-center justify-between border-t border-slate-50 pt-6">
                            <div>
                                <p className="text-sm font-bold text-slate-700">Password Policy</p>
                                <p className="text-xs text-slate-500">Last updated: 14 Feb 2026</p>
                            </div>
                            <button className="text-xs font-bold text-[#000080] hover:underline">Update</button>
                        </div>
                    </div>
                </div>

                {/* Notification Settings */}
                <div className="bg-white border border-slate-200 rounded-none shadow-sm overflow-hidden">
                    <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center gap-4">
                        <div className="p-2 bg-orange-50 text-orange-600">
                            <Bell className="w-5 h-5" />
                        </div>
                        <h2 className="text-sm font-bold text-slate-900">System Notifications</h2>
                    </div>
                    <div className="p-8 space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-bold text-slate-700">Email Alerts</p>
                                <p className="text-xs text-slate-500">Receive summaries for new submissions</p>
                            </div>
                            <div className="w-12 h-6 bg-green-500 rounded-full relative">
                                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between border-t border-slate-50 pt-6">
                            <div>
                                <p className="text-sm font-bold text-slate-700">Critical Failure Alerts</p>
                                <p className="text-xs text-slate-500">Immediate notification for system errors</p>
                            </div>
                            <div className="w-12 h-6 bg-green-500 rounded-full relative">
                                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Profile Management */}
                <div className="bg-white border border-slate-200 rounded-none shadow-sm overflow-hidden">
                    <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center gap-4">
                        <div className="p-2 bg-purple-50 text-purple-600">
                            <User className="w-5 h-5" />
                        </div>
                        <h2 className="text-sm font-bold text-slate-900">Administrator Profile</h2>
                    </div>
                    <div className="p-8 space-y-6">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-xl border border-slate-200">
                                AD
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-900">Admin User</p>
                                <p className="text-xs text-slate-500">superadmin@hsgatelangana.org</p>
                                <button className="mt-2 text-[10px] font-bold text-orange-600 uppercase tracking-wider">Change Avatar</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Regional Strategy */}
                <div className="bg-white border border-slate-200 rounded-none shadow-sm overflow-hidden">
                    <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center gap-4">
                        <div className="p-2 bg-green-50 text-green-600">
                            <Globe className="w-5 h-5" />
                        </div>
                        <h2 className="text-sm font-bold text-slate-900">Regional Configurations</h2>
                    </div>
                    <div className="p-8 space-y-6">
                        <div>
                            <p className="text-sm font-bold text-slate-700">Operational State</p>
                            <p className="text-xs text-slate-500 mt-1">Primary focus: Telangana State</p>
                        </div>
                        <div className="pt-6 border-t border-slate-50">
                            <p className="text-sm font-bold text-slate-700">District Reach</p>
                            <p className="text-xs text-slate-500 mt-1">All 33 districts active</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Danger Zone */}
            <div className="mt-12 border border-red-200 bg-red-50/30 p-8 rounded-none">
                <div className="flex items-center gap-4 mb-6">
                    <Database className="w-6 h-6 text-red-600" />
                    <h2 className="text-lg font-bold text-slate-900">System Maintenance & Data Control</h2>
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <p className="text-sm font-bold text-slate-800">Clear System Cache</p>
                        <p className="text-xs text-slate-500">Revalidate all active session tokens and logs</p>
                    </div>
                    <button className="px-6 py-3 border border-red-200 text-red-600 text-[10px] font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all shadow-sm">
                        Execute Cache Clear
                    </button>
                </div>
            </div>
        </div>
    );
}
