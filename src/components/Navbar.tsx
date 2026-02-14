'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0">
            {/* Increased height slightly to h-20 md:h-24 to accommodate larger logo */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 md:h-24 flex items-center justify-between">

                {/* Logo Section - Increased Size */}
                <Link href="/" className="flex items-center gap-4 flex-shrink-0">
                    {/* Logo dimensions increased from w-11 to w-14/w-16 */}
                    <div className="relative w-14 h-14 md:w-16 md:h-16 flex-shrink-0">
                        <Image
                            src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770199908/1769454781522_pgepvr.png"
                            alt="HSGA Official Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    <div className="flex flex-col border-l-2 border-gray-100 pl-4">
                        <span className="text-[14px] md:text-[16px] font-bold text-[#000080] leading-tight">
                            Hindustan scouts and guides
                        </span>
                        <span className="text-[11px] md:text-[12px] text-orange-600 font-semibold tracking-tight">
                            Association, Telangana State
                        </span>
                    </div>
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-600"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Nav Links - Desktop */}
                <div className="hidden md:flex items-center gap-6 lg:gap-8 text-[13px] lg:text-[14px] text-slate-600 font-medium relative">
                    <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>

                    {/* Forms Dropdown */}
                    <div
                        className="relative group h-full flex items-center"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <button className="flex items-center gap-1 hover:text-orange-600 transition-colors focus:outline-none py-2">
                            Forms
                            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <div
                            className={`absolute top-[calc(100%-15px)] left-0 w-64 bg-white border border-gray-100 shadow-xl rounded-xl p-2 transition-all duration-200 z-50 ${isDropdownOpen ? 'opacity-100 visible translate-y-2' : 'opacity-0 invisible translate-y-0'}`}
                        >
                            <div className="flex flex-col">
                                <span className="px-3 py-1.5 text-[10px] font-bold text-slate-400">Enrollment and logins</span>
                                <Link href="/forms/student-admission" className="px-3 py-2 text-slate-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors">Institutional admission</Link>
                                <Link href="/forms/insti-registration" className="px-3 py-2 text-slate-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors">Institution registration</Link>
                                <Link href="/forms/trainer-registration" className="px-3 py-2 text-slate-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors">Trainer registration</Link>
                                <div className="h-px bg-slate-100 my-1 mx-2"></div>
                                <Link href="/trainer/login" className="px-3 py-2 text-slate-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors">Trainer login</Link>
                                <Link href="/insti/login" className="px-3 py-2 text-slate-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors">Institutional login</Link>
                            </div>
                        </div>
                    </div>

                    <Link href="/calendar" className="hover:text-orange-600 transition-colors">Calendar</Link>
                    <Link href="/careers" className="hover:text-orange-600 transition-colors">Careers</Link>
                    <Link href="/documents" className="hover:text-orange-600 transition-colors">Documents</Link>
                    <Link href="/contact" className="hover:text-orange-600 transition-colors">Contact</Link>

                    <Link href="/admin/login" className="px-5 py-2 bg-[#000080] text-white hover:bg-orange-600 transition-all font-bold text-xs rounded-lg shadow-sm">
                        Admin
                    </Link>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            <div className={`md:hidden fixed inset-0 z-[60] transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
                <div className="absolute right-0 top-0 bottom-0 w-[75%] bg-white shadow-2xl flex flex-col p-6 overflow-y-auto">
                    <div className="flex items-center justify-between mb-8 border-b border-slate-50 pb-4">
                        <span className="font-bold text-[#000080]">Navigation</span>
                        <X className="w-6 h-6 text-slate-400" onClick={() => setIsMobileMenuOpen(false)} />
                    </div>

                    <div className="flex flex-col gap-5 text-base font-medium text-slate-700">
                        <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                        <Link href="/calendar" onClick={() => setIsMobileMenuOpen(false)}>Calendar</Link>
                        <Link href="/careers" onClick={() => setIsMobileMenuOpen(false)}>Careers</Link>
                        <Link href="/contact" className="text-orange-600 font-bold" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                        <Link href="/admin/login" className="w-full py-3 bg-[#000080] text-white rounded-xl text-center font-bold text-sm" onClick={() => setIsMobileMenuOpen(false)}>
                            Admin login
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}