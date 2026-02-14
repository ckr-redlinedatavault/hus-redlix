'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full bg-orange-600 text-white">
            {/* Maintained high padding for height, but used smaller text for elegance */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">

                    {/* Branding Section */}
                    <div className="space-y-4">
                        <div className="flex flex-col">
                            {/* Reduced to text-xl */}
                            <h2 className="text-xl font-bold leading-tight">
                                Hindustan scouts and guides
                            </h2>
                            {/* Reduced to text-[12px] */}
                            <span className="text-white text-[12px] font-medium opacity-90 mt-1">
                                Association, Telangana State
                            </span>
                        </div>
                        {/* Reduced to text-[12px] */}
                        <p className="text-white/80 text-[12px] leading-relaxed max-w-xs font-light">
                            Empowering youth through service, unity, and discipline across the state of Telangana.
                            Building leaders for a better tomorrow.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="grid grid-cols-2 gap-8">
                        <div className="flex flex-col gap-2.5">
                            {/* Reduced to text-[13px] */}
                            <span className="text-white font-bold text-[13px] mb-1">Portals</span>
                            <Link href="/admin/login" className="text-white/80 hover:text-white hover:underline text-[12px] font-normal transition-all">Admin login</Link>
                            <Link href="/insti/login" className="text-white/80 hover:text-white hover:underline text-[12px] font-normal transition-all">Institutional login</Link>
                            <Link href="/trainer/login" className="text-white/80 hover:text-white hover:underline text-[12px] font-normal transition-all">Trainer login</Link>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <span className="text-white font-bold text-[13px] mb-1">Explore</span>
                            <Link href="/careers" className="text-white/80 hover:text-white hover:underline text-[12px] font-normal transition-all">Careers</Link>
                            <Link href="/calendar" className="text-white/80 hover:text-white hover:underline text-[12px] font-normal transition-all">Calendar</Link>
                            <Link href="/contact" className="text-white/80 hover:text-white hover:underline text-[12px] font-normal transition-all">Contact us</Link>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="flex flex-col gap-2.5">
                        <span className="text-white font-bold text-[13px] mb-1">Headquarters</span>
                        <p className="text-white/80 text-[12px] leading-relaxed font-normal">
                            B-3 F-1, Vigyan Puri Colony, Vidhya Nagar,<br />
                            Hyderabad, Telangana-500044
                        </p>
                        <div className="pt-1">
                            <p className="text-white font-medium text-[12px]">
                                hsgatelangana@gmail.com
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Reduced to text-[11px] */}
                    <div className="text-[11px] text-white/70 font-medium tracking-wide">
                        © {new Date().getFullYear()} Hindustan scouts and guides association. All rights reserved.
                    </div>

                    <div className="flex items-center gap-8">
                        <Link href="/privacy" className="text-[11px] text-white/70 hover:text-white font-medium transition-colors">Privacy policy</Link>
                        <Link href="/terms" className="text-[11px] text-white/70 hover:text-white font-medium transition-colors">Terms of service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}