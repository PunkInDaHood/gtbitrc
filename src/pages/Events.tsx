import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const Events = () => {
    const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming');

    const upcomingEvents = [
        {
            title: 'Research Methodology & Blockchain Workshop',
            date: '17 May',
            time: '12:30 PM – 1:30 PM',
            location: 'Main Auditorium / Online',
            desc: 'Learn the essentials of research and get introduced to blockchain concepts in this interactive session.',
            category: 'Workshop'
        }
    ];

    const pastEvents = [
        {
            title: 'Freshers’ Fest & Innovation Games',
            date: 'Aug 2024',
            desc: 'Celebrating new beginnings, GTBIRC brought games, fun, and innovation to kick off the academic year.',
            category: 'Social'
        },
        {
            title: 'Advent of AI & Machine Learning Seminar',
            date: 'June 2024',
            desc: 'A seminar on the Fourth Industrial Revolution and AI/ML fundamentals hosted for students.',
            category: 'Seminar'
        },
        {
            title: 'STEM Projects & Freshers Welcome',
            date: 'Aug 2024',
            desc: 'A showcase of student STEM projects, interactive exhibits, and hands-on learning experiences.',
            category: 'Exhibition'
        },
        {
            title: 'Viksit Bharat @2047 Poster Competition',
            date: 'July 2024',
            desc: 'Competition for students to showcase creativity with themes centered on Viksit Bharat.',
            category: 'Competition'
        }
    ];

    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Events</h1>
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={() => setTab('upcoming')}
                            className={`px-6 py-2 rounded-full font-bold transition-all ${tab === 'upcoming'
                                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20'
                                    : 'bg-slate-800 text-slate-400 hover:text-white'
                                }`}
                        >
                            Upcoming
                        </button>
                        <button
                            onClick={() => setTab('past')}
                            className={`px-6 py-2 rounded-full font-bold transition-all ${tab === 'past'
                                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20'
                                    : 'bg-slate-800 text-slate-400 hover:text-white'
                                }`}
                        >
                            Past Showcases
                        </button>
                    </div>
                </div>

                <motion.div
                    key={tab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {tab === 'upcoming' ? (
                        upcomingEvents.map((event, idx) => (
                            <div key={idx} className="bg-slate-800/40 rounded-2xl border border-slate-700 overflow-hidden group hover:border-primary-500/50 transition-all">
                                <div className="aspect-video bg-slate-700 relative overflow-hidden flex items-center justify-center">
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                                    <span className="text-slate-500 italic">Event Banner</span>
                                    <div className="absolute top-4 left-4 px-3 py-1 bg-primary-600 text-white text-xs font-bold rounded-full">
                                        {event.category}
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">{event.title}</h3>
                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center gap-3 text-slate-400 text-sm">
                                            <Calendar className="w-4 h-4 text-primary-500" />
                                            {event.date}
                                        </div>
                                        <div className="flex items-center gap-3 text-slate-400 text-sm">
                                            <Clock className="w-4 h-4 text-primary-500" />
                                            {event.time}
                                        </div>
                                        <div className="flex items-center gap-3 text-slate-400 text-sm">
                                            <MapPin className="w-4 h-4 text-primary-500" />
                                            {event.location}
                                        </div>
                                    </div>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-8">
                                        {event.desc}
                                    </p>
                                    <button className="w-full py-3 bg-slate-700 hover:bg-primary-600 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 group/btn">
                                        Register Now
                                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        pastEvents.map((event, idx) => (
                            <div key={idx} className="bg-slate-800/40 rounded-2xl border border-slate-700 p-8 hover:border-indigo-500/50 transition-all">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="px-3 py-1 bg-slate-700 text-slate-300 text-xs font-bold rounded-full">
                                        {event.category}
                                    </div>
                                    <span className="text-slate-500 text-sm font-medium">{event.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{event.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {event.desc}
                                </p>
                            </div>
                        ))
                    )}
                </motion.div>

                {tab === 'upcoming' && upcomingEvents.length === 1 && (
                    <div className="mt-12 text-center text-slate-500 italic">
                        More events coming soon — check back for updates!
                    </div>
                )}
            </div>
        </div>
    );
};

export default Events;
