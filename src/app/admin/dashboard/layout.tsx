'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = async () => {
        await fetch('/api/admin/logout', { method: 'POST' });
        router.push('/admin/login');
    };

    const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

    const navItems = [
        { name: 'Dashboard', href: '/admin/dashboard' },
        { name: 'Calendar Manager', href: '/admin/dashboard/calendar' },
        {
            name: 'Forms',
            children: [
                { name: 'Student Admission', href: '/admin/dashboard/forms/student-admission' },
                { name: 'Trainer Registration', href: '/admin/dashboard/forms/trainer-registration' }
            ]
        },
        { name: 'Institutional Management', href: '/admin/dashboard/institutions' },
        {
            name: 'Public Content',
            children: [
                { name: 'Contact Inquiries', href: '/admin/dashboard/contact' },
                { name: 'Donation Records', href: '/admin/dashboard/donations' },
                { name: 'Job Board', href: '/admin/dashboard/careers' },
                { name: 'Document Portal', href: '/admin/dashboard/documents' },
            ]
        },
        { name: 'Settings', href: '/admin/dashboard/settings' },
    ];

    const toggleMenu = (name: string) => {
        setExpandedMenu(expandedMenu === name ? null : name);
    };

    return (
        <div className="flex h-screen bg-slate-50 font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-slate-200 flex flex-col z-20">
                <div className="p-8 border-b border-slate-100">
                    <h1 className="text-xl font-bold text-[#000080]">HUSA Admin</h1>
                    <p className="text-[10px] font-bold text-orange-600 mt-1">HSA Telangana Control Room</p>
                </div>

                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    {navItems.map((item) => {
                        // Handle Dropdown Items
                        if (item.children) {
                            const isExpanded = expandedMenu === item.name;
                            const isActive = item.children.some(child => pathname === child.href);

                            return (
                                <div key={item.name} className="space-y-1">
                                    <button
                                        onClick={() => toggleMenu(item.name)}
                                        className={`w-full flex items-center justify-between px-4 py-3 text-sm font-bold transition-all rounded-none ${isActive || isExpanded
                                            ? 'bg-slate-900 text-white'
                                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                            }`}
                                    >
                                        <span className="flex items-center gap-2">
                                            {item.name}
                                        </span>
                                        <svg
                                            className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {isExpanded && (
                                        <div className="bg-slate-50/50 border-l border-slate-200 ml-2">
                                            {item.children.map((child) => {
                                                const isChildActive = pathname === child.href;
                                                return (
                                                    <Link
                                                        key={child.href}
                                                        href={child.href}
                                                        className={`block px-6 py-2.5 text-[13px] font-medium transition-all rounded-none border-b border-slate-100 last:border-0 ${isChildActive
                                                            ? 'text-orange-600 bg-white shadow-sm font-bold'
                                                            : 'text-slate-500 hover:text-slate-900 hover:bg-white'
                                                            }`}
                                                    >
                                                        {child.name}
                                                    </Link>
                                                )
                                            })}
                                        </div>
                                    )}
                                </div>
                            );
                        }

                        // Handle Standard Links
                        const isActive = item.href ? pathname === item.href : false;
                        return (
                            <Link
                                key={item.name}
                                href={item.href || '#'} // Fallback
                                className={`flex items-center px-4 py-3 text-sm font-bold transition-all rounded-none ${isActive
                                    ? 'bg-[#000080] text-white'
                                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-slate-100">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center px-4 py-3 text-[11px] font-bold text-white bg-red-600 hover:bg-red-700 transition-all rounded-none shadow-xl shadow-red-900/10"
                    >
                        Secure Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto bg-slate-50 p-10 relative">
                {/* Global Status Bar or Header could go here */}
                <div className="max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
