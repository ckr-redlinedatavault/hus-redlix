'use client';

import React from 'react';

export default function Footer() {
    return (
        <footer className="w-full bg-orange-600 text-white">
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex justify-center items-center">
                    <p className="text-[12px] md:text-[13px] text-white/90 font-medium tracking-wide text-center">
                        © {new Date().getFullYear()} Hindustan Scouts and Guides Association, Telangana State. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
