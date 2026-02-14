'use client';

import React from 'react';

export default function TopBanner() {
    return (
        <div className="w-full bg-[#000080] text-white py-1.5 px-4 border-b border-white/10 relative">
            <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
                {/* Secured Label - Maximum Boldness */}
                <span className="text-[11px] font-black text-orange-500 whitespace-nowrap">
                    Secured system
                </span>

                {/* Visual Divider */}
                <div className="w-px h-3 bg-white/30" />

                {/* Description - High Contrast Bold */}
                <p className="text-[11px] font-bold text-white tracking-tight">
                    All data is monitored and secured in real-time.
                </p>
            </div>
        </div>
    );
}