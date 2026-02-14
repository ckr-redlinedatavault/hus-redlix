'use client';

import { useState, useEffect } from 'react';

type Event = {
    id: string;
    title: string;
    date: string;
    description: string;
};

export default function CalendarManager() {
    const [events, setEvents] = useState<Event[]>([]);
    const [formData, setFormData] = useState({ title: '', date: '', description: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const res = await fetch('/api/events');
            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Failed to fetch events');
            }

            if (Array.isArray(data)) {
                setEvents(data);
                setError('');
            } else {
                setEvents([]);
                console.error('API returned non-array data:', data);
            }
        } catch (err: any) {
            console.error('Fetch error:', err);
            setError('Could not load events. Database might be syncing.');
            setEvents([]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const res = await fetch('/api/events', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        if (res.ok) {
            setFormData({ title: '', date: '', description: '' });
            fetchEvents();
        }
        setLoading(false);
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this event?')) return;

        const res = await fetch(`/api/events?id=${id}`, {
            method: 'DELETE',
        });

        if (res.ok) {
            fetchEvents();
        }
    };

    return (
        <div className="space-y-8">
            <h1 className="text-2xl font-bold text-slate-900 border-l-4 border-orange-500 pl-4 uppercase tracking-widest">Manage Calendar Events</h1>

            {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-none text-sm border border-red-200 font-bold">
                    {error}
                </div>
            )}

            {/* Add Event Form */}
            <div className="bg-white p-8 rounded-none border border-orange-500 shadow-lg shadow-blue-900/5">
                <h2 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-orange-500"></div>
                    Add New Event
                </h2>
                <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                    <div className="md:col-span-2 space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Event Title</label>
                        <input
                            type="text"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-none outline-none focus:bg-white text-slate-900 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all placeholder:text-slate-300 font-medium"
                            placeholder="e.g. Annual Scout Rally"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Event Date</label>
                        <input
                            type="date"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-none outline-none focus:bg-white text-slate-900 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all font-medium"
                            required
                        />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Description (Optional)</label>
                        <textarea
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-none outline-none focus:bg-white text-slate-900 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all h-32 resize-none placeholder:text-slate-300 font-medium"
                            placeholder="Details about the event..."
                        />
                    </div>
                    <div className="md:col-span-2 pt-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-10 py-4 bg-[#000080] text-white rounded-none hover:bg-orange-600 disabled:opacity-50 font-bold uppercase tracking-widest transition-all w-full md:w-auto shadow-lg shadow-blue-900/10 active:scale-[0.99]"
                        >
                            {loading ? 'Adding...' : 'Add Event to Calendar'}
                        </button>
                    </div>
                </form>
            </div>

            {/* Events List */}
            <div className="bg-white rounded-none border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                    <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">Current Events ({events.length})</h2>
                </div>
                <div className="divide-y divide-slate-100">
                    {events.length === 0 ? (
                        <div className="p-12 text-center text-slate-400 italic">No events found. Add one above!</div>
                    ) : (
                        events.map((event) => (
                            <div key={event.id} className="p-6 flex items-center justify-between hover:bg-orange-50/30 transition-colors group border-l-4 border-transparent hover:border-orange-500">
                                <div className="space-y-2">
                                    <h3 className="font-bold text-slate-900 group-hover:text-orange-700 transition-colors text-lg">{event.title}</h3>
                                    <div className="flex items-center gap-4 text-sm">
                                        <span className="font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-none text-xs border border-orange-100">{event.date}</span>
                                        {event.description && <span className="text-slate-500 text-xs truncate max-w-md font-medium">{event.description}</span>}
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleDelete(event.id)}
                                    className="text-slate-300 hover:text-red-600 hover:bg-red-50 p-3 rounded-none transition-all"
                                    title="Delete Event"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
