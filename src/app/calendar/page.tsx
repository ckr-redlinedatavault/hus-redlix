'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';

// HSGA Event Data for 2026 (Fallback/Initial Data)
const initialHsgaEvents = [
    { date: '2026-01-12', title: 'National Youth Day', description: 'Programs on youth empowerment, leadership workshops, and rallies' },
    { date: '2026-01-26', title: 'Republic Day', description: 'Flag hoisting, march past & parade at schools and colleges' },
    { date: '2026-02-22', title: 'World Scout Day', description: 'Baden Powell Birthday celebration – scouting programs' },
    { date: '2026-02-28', title: 'National Science Day', description: 'Science exhibitions, workshops, and innovation challenges' },
    { date: '2026-03-04', title: 'National Safety Day', description: 'Awareness programs on industrial safety & disaster management' },
    { date: '2026-03-08', title: 'World Women’s Day', description: 'Women’s Day programs conducted by Guides (Girls)' },
    { date: '2026-04-07', title: 'World Health Day', description: 'Health awareness campaigns, blood donation & medical camps' },
    { date: '2026-05-11', title: 'Mother’s Day', description: 'Motivational classes on parental relations, essay writing, debates' },
    { date: '2026-05-31', title: 'Anti-Tobacco Day', description: 'Rallies and awareness campaigns on usage & ban of tobacco' },
    { date: '2026-06-05', title: 'World Environment Day', description: 'Plantation, Clean & Green, Swachh Bharat programs' },
    { date: '2026-06-21', title: 'World Yoga Day', description: 'Yoga events highlighting the necessity of yoga' },
    { date: '2026-06-26', title: 'Intl Day Against Drug Abuse', description: 'Anti-drug awareness campaigns, rallies, and workshops' },
    { date: '2026-08-15', title: 'Indian Independence Day', description: 'Flag hoisting, parades, pyramids & independence-related events' },
    { date: '2026-09-05', title: 'Teachers’ Day', description: 'Teachers’ Day celebrations' },
    { date: '2026-09-16', title: 'World Ozone Day', description: 'Awareness programs on “Save the Earth”' },
    { date: '2026-10-02', title: 'Gandhi Jayanti', description: 'Campaigns & competitions on Gandhiji’s role in freedom struggle' },
    { date: '2026-10-21', title: 'Police Commemoration Day', description: 'Prayers for police officers who sacrificed their lives' },
    { date: '2026-11-14', title: 'Children’s Day', description: 'Children’s Day programs, games, sports & events' },
    { date: '2026-11-26', title: 'HSGA Formation Day', description: 'Scouts & Guides programs, events, pyramids & HSGA scout flag hoisting' },
    { date: '2026-12-01', title: 'World AIDS Day', description: 'Health & medical camps, hospital service & HIV/AIDS awareness' },
    { date: '2026-12-10', title: 'Human Rights Day', description: 'Rallies and motivational classes on human rights' },
];

type CalendarEvent = {
    id?: string;
    date: string;
    title: string;
    description?: string | null;
}

export default function CalendarPage() {
    const [currentDate, setCurrentDate] = useState(new Date()); // Start at current date
    const [events, setEvents] = useState<CalendarEvent[]>(initialHsgaEvents);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const res = await fetch('/api/events');
                if (res.ok) {
                    const dbEvents = await res.json();
                    // Merge DB events with initial events (or replace if preferred)
                    // Here we simply add them to the list. 
                    // In a production app you might want to deduplicate or treat DB as source of truth.
                    // For now, let's treat DB as additional dynamic events.
                    setEvents([...initialHsgaEvents, ...dbEvents]);
                }
            } catch (error) {
                console.error("Failed to fetch calendar events", error);
            }
        };
        fetchEvents();
    }, []);

    const daysInMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const firstDayOfMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const getEventsForDay = (day: number) => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        const dateStr = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        return events.filter(e => e.date === dateStr);
    };

    const renderCalendarDays = () => {
        const totalDays = daysInMonth(currentDate);
        const startDay = firstDayOfMonth(currentDate);
        const days = [];

        // Empty spaces for previous month's days
        for (let i = 0; i < startDay; i++) {
            days.push(<div key={`empty-${i}`} className="h-32 bg-gray-50/50 border border-gray-100"></div>);
        }

        // Days of the month
        for (let i = 1; i <= totalDays; i++) {
            const isToday =
                i === new Date().getDate() &&
                currentDate.getMonth() === new Date().getMonth() &&
                currentDate.getFullYear() === new Date().getFullYear();

            const dayEvents = getEventsForDay(i);

            days.push(
                <div key={i} className={`min-h-[8rem] h-auto border border-gray-100 p-2 relative group hover:bg-orange-50/30 transition-colors ${isToday ? 'bg-orange-50' : 'bg-white'}`}>
                    <span className={`text-sm font-medium w-7 h-7 flex items-center justify-center rounded-full ${isToday ? 'bg-orange-600 text-white' : 'text-gray-700'}`}>
                        {i}
                    </span>

                    <div className="mt-2 space-y-1">
                        {dayEvents.map((event, idx) => (
                            <div key={idx} className="text-xs bg-orange-100 text-orange-800 p-1.5 rounded border border-orange-200">
                                <div className="font-semibold truncate">{event.title}</div>
                                <div className="text-[10px] opacity-80 line-clamp-2 leading-tight">{event.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        return days;
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            {/* Simple Hero Section */}
            <section className="bg-[#000080] pt-10 pb-10 md:pt-15 md:pb-12 relative overflow-hidden">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none"
                    style={{ backgroundImage: `radial-gradient(circle, #fff 0.8px, transparent 0.8px)`, backgroundSize: '24px 24px' }}
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-2xl text-left"
                    >
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight leading-tight">
                            Event <span className="text-orange-400">Calendar.</span>
                        </h1>
                        <p className="text-blue-50/80 text-sm md:text-base font-normal max-w-lg">
                            Stay updated with our official schedule, special events, and community programs for 2026.
                        </p>
                    </motion.div>
                </div>
            </section>

            <main className="max-w-7xl mx-auto px-6 py-10 pb-20 w-full">

                {/* Calendar Controls */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6 bg-white p-6 border border-orange-500 rounded-none shadow-sm z-40 relative">
                    <div className="text-center md:text-left">
                        <h2 className="text-xl font-bold text-slate-900 border-l-4 border-orange-500 pl-4 uppercase tracking-widest">
                            Event Schedule <span className="text-orange-600">2026</span>
                        </h2>
                    </div>

                    <div className="flex items-center gap-4 bg-slate-50 p-2 border border-slate-200 rounded-none">
                        <button onClick={prevMonth} className="px-4 py-2 bg-white border border-slate-200 hover:border-orange-500 hover:text-orange-600 transition-all font-bold text-xs uppercase tracking-widest text-[#000080]">
                            &larr; Prev
                        </button>
                        <span className="font-bold text-[#000080] w-48 text-center text-sm uppercase tracking-widest">
                            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                        </span>
                        <button onClick={nextMonth} className="px-4 py-2 bg-white border border-slate-200 hover:border-orange-500 hover:text-orange-600 transition-all font-bold text-xs uppercase tracking-widest text-[#000080]">
                            Next &rarr;
                        </button>
                    </div>
                </div>

                {/* Calendar Grid Header */}
                <div className="grid grid-cols-7 border border-[#000080] bg-[#000080] text-white text-[10px] font-bold uppercase tracking-[0.2em] text-center py-4">
                    <div>Sun</div>
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                </div>

                {/* Calendar Grid Body */}
                <div className="grid grid-cols-7 border-l border-t border-slate-200 bg-slate-200 gap-[1px]">
                    {renderCalendarDays().map((day, idx) => (
                        <div key={idx} className="bg-white">
                            {React.cloneElement(day as any, {
                                className: (day as any).props.className.replace(/rounded-full|rounded-xl|rounded-md|rounded-lg|rounded-2xl/g, 'rounded-none')
                                    .replace(/border-gray-100/g, 'border-slate-100')
                            })}
                        </div>
                    ))}
                </div>

                {/* Additional Schedule Sections */}
                <div className="mt-20 grid md:grid-cols-2 gap-16">

                    {/* Summer Camps & Exams */}
                    <div className="space-y-10">
                        <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-orange-500 pl-4 uppercase tracking-widest">
                            Summer Camps & Exams
                        </h2>
                        <div className="bg-white border border-slate-200 p-8 space-y-8">
                            {[
                                { title: "Summer Camp & Tour", date: "May – June", desc: "Scheduled in schools/colleges as per Holidays calendar." },
                                { title: "Trekking & Camp Fire", date: "November – December", desc: "Scheduled in schools/colleges as per their interest." },
                                { title: "Service at Pilgrimage", date: "Various Dates", desc: "Volunteering at temples like Yadadri, Medaram, and Bhadradri." },
                                { title: "State & National Programs", date: "As per Govt Guidelines", desc: "Participation in events by Ministry of Youth Affairs & Sports." },
                                { title: "Annual Examination", date: "As per Schedule", desc: "Examinations for Cubs, Bulbuls, Scouters, Guiders, Rangers & Rovers." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 items-start group">
                                    <div className="w-12 h-12 bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-lg border border-orange-100 shrink-0 transition-colors group-hover:bg-[#000080] group-hover:text-white group-hover:border-[#000080]">
                                        {i + 1}
                                    </div>
                                    <div className="space-y-1 pt-1">
                                        <h3 className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors uppercase tracking-wide text-sm">{item.title}</h3>
                                        <p className="text-[10px] text-orange-600 font-bold uppercase tracking-[0.1em]">{item.date}</p>
                                        <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Scouts & Guides Classes */}
                    <div className="space-y-10">
                        <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-orange-500 pl-4 uppercase tracking-widest">
                            Scouts & Guides Classes
                        </h2>
                        <div className="bg-white border border-slate-200 p-8 space-y-8">
                            {[
                                { title: "Class Curriculum", desc: "Pledge, Drill, Motivational Classes, Yoga, Sports, Self Defence & Trekking." },
                                { title: "Monthly Events", desc: "Swatch Bharath, Clean & Green, Traffic Awareness, Medical Camps, Rallies, etc." },
                                { title: "Time-Table", desc: "26 periods per annum, with at least 10 Calendar Programs per year." },
                                { title: "Innovative Classes", desc: "Moral Values, Parental Relations, Indian Heritage, Helping the needy." },
                                { title: "Disaster Management", desc: "Special classes on First Aid, Fire Safety & Disaster Management." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 items-start group">
                                    <div className="w-12 h-12 bg-slate-50 text-slate-400 flex items-center justify-center font-bold text-lg border border-slate-200 shrink-0 transition-colors group-hover:bg-[#000080] group-hover:text-white group-hover:border-[#000080]">
                                        {i + 1}
                                    </div>
                                    <div className="space-y-1 pt-1">
                                        <h3 className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors uppercase tracking-wide text-sm">{item.title}</h3>
                                        <p className="text-sm text-slate-500 leading-relaxed font-medium mt-2">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </main>
            <Footer />
        </div>
    );
}
