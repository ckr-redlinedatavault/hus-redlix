'use client';

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TopBanner from "@/components/TopBanner";
import BottomBanner from "@/components/BottomBanner";

export default function Home() {
  return (
    <div className="h-screen bg-white text-gray-600 flex flex-col font-sans overflow-hidden">
      <TopBanner />
      <Navbar />

      {/* Hero Section - Ultra Compact and Centered */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 bg-white overflow-hidden">
        <div className="max-w-3xl w-full text-center space-y-6">
          {/* Simple Status Badge */}
          <div className="flex justify-center">
            <span className="text-[10px] tracking-wider text-orange-600 font-medium border-b border-orange-100 pb-0.5">
              Official unified system
            </span>
          </div>

          {/* Main Heading - Clean and Light */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-gray-900 leading-[1.15] font-light tracking-tight">
            Hindustan scouts and guides <br />
            <span className="text-orange-600 font-normal">Telangana state</span>
          </h1>

          {/* Description - Compacted */}
          <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed max-w-xl mx-auto">
            A unified platform for empowering youth through service and discipline.
            Manage memberships and resources seamlessly in one secure place.
          </p>

          {/* Buttons - Centered and Slim */}
          <div className="flex flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/get-started"
              className="h-10 px-7 bg-orange-600 hover:bg-orange-700 text-white font-light text-xs transition-colors flex items-center justify-center rounded-sm"
            >
              Get started
            </Link>
            <Link
              href="/about"
              className="h-10 px-7 bg-white hover:bg-gray-50 border border-gray-200 text-gray-500 font-light text-xs transition-colors flex items-center justify-center rounded-sm"
            >
              Learn more
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <BottomBanner />
    </div>
  );
}