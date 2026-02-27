import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const Events = () => {
    const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming');

    const upcomingEvents = [
        {
            title: 'More events coming soon!',
            date: 'TBA',
            time: 'TBA',
            location: 'TBA',
            desc: 'Check back for updates on our next workshops and seminars.',
            category: 'General'
        }
    ];

    const pastEvents = [
        {
            title: 'MOU Signing with Classavatar',
            date: '2 Dec 2024',
            desc: 'Strategic partnership between GTBIT and Classavatar (Vrexbot Tech. Pvt. Ltd.) to enhance learning and innovation.',
            category: 'Partnership'
        },
        {
            title: 'GTBIRC Lab Inauguration',
            date: '29 Oct 2024',
            desc: 'Official opening of the Innovation and Research Centre Lab, a dedicated space for student exploration.',
            category: 'Milestone'
        },
        {
            title: 'Newsletter Launch (Jan-July 2024)',
            date: '29 Oct 2024',
            desc: 'Launch of the bi-annual newsletter showcasing GTBIRC achievements and insights.',
            category: 'Publication'
        },
        {
            title: 'AI for Semiconductor Design Workshop',
            date: '23 Oct 2024',
            desc: 'Hands-on workshop on AI for Semiconductor Design and Manufacturing, bridging hardware and software.',
            category: 'Workshop'
        },
        {
            title: 'Faculty Development Program: Advance Excel',
            date: '14-19 Oct 2024',
            desc: '"Advance Excel with Data Visualization" in collaboration with EICT Academy, IIT Kanpur for faculty growth.',
            category: 'Education'
        },
        {
            title: 'AI for Cyber Security (VR Workshop)',
            date: '14 Oct 2024',
            desc: 'Hands-on workshop using META Quest 3 VR headsets to explore security in virtual environments.',
            category: 'Technology'
        },
        {
            title: 'GTB-IJTIS Journal Release',
            date: 'Oct 2024',
            desc: 'Release of the International Journal of Technological Innovation and Sustainability (IJTIS) October issue.',
            category: 'Publication'
        },
        {
            title: 'STC by NITTTR: Deep Learning',
            date: '2-6 Sep 2024',
            desc: 'Short Term Course on "Deep Learning for Learning Applications" in collaboration with NITTTR.',
            category: 'Course'
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
