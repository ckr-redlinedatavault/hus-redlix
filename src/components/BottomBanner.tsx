'use client';

import React from 'react';

export default function BottomBanner() {
    return (
        <div className="w-full bg-[#000080] text-white py-6 border-t border-white/5 relative overflow-hidden">
            {/* Subtle background detail */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`, backgroundSize: '20px 20px' }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Left Side: Developer Credit */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <span className="text-[11px] text-blue-200/50 font-medium mb-1 tracking-wide">
                            Technical architecture and development
                        </span>
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-light text-white">Developed by</span>
                            <span className="text-sm font-bold text-orange-500 tracking-tight transition-all hover:text-white cursor-default">
                                Redlix Systems
                            </span>
                        </div>
                    </div>

                    {/* Right Side: Technical Support */}
                    <div className="flex flex-col items-center md:items-end text-center md:text-right">
                        <span className="text-[11px] text-blue-200/50 font-medium mb-1 tracking-wide">
                            Technical support
                        </span>
                        <a
                            href="mailto:help.ckrdatapoint@gmail.com"
                            className="text-[12px] font-semibold text-white hover:text-orange-500 transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-orange-500"
                        >
                            help.ckrdatapoint@gmail.com
                        </a>
                    </div>
                </div>

                {/* Minimalist bottom line */}
                <div className="mt-6 flex justify-center">
                    <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
                </div>
            </div>
        </div>
    );
}