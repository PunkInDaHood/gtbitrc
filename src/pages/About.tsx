import { motion } from 'framer-motion';
import { BookOpen, Presentation, Globe, Lightbulb } from 'lucide-react';

const About = () => {
    const activities = [
        { icon: <BookOpen />, title: 'Workshops', desc: 'Hands-on sessions on Research, Tech & Innovation.' },
        { icon: <Presentation />, title: 'Guest Lectures', desc: 'Deep insights from industry leaders and academics.' },
        { icon: <Globe />, title: 'Hackathons', desc: 'Competitive environments to solve real-world problems.' },
        { icon: <Lightbulb />, title: 'Project Showcases', desc: 'Platforms for students to exhibit their inventions.' },
    ];

    return (
        <div className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Mission Section */}
                <section className="mb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-primary-500 font-bold uppercase tracking-widest text-sm mb-4">Our Mission</h2>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                                To build a collaborative ecosystem that supports research, innovation, and creativity.
                            </h1>
                            <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                The Guru Tegh Bahadur Innovation & Research Club (GTBIRC) is a vibrant student-led society that sparks innovation and nurtures research talent.
                            </p>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                Through hands-on workshops, technology showcases, and creative events, GTBIRC empowers students with skills for tomorrow, fostering a culture of interdisciplinary learning and technical excellence.
                            </p>
                        </motion.div>

                        <div className="relative">
                            <div className="aspect-square bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 flex items-center justify-center p-12">
                                <div className="w-full h-full border-2 border-dashed border-slate-600 rounded-2xl flex items-center justify-center">
                                    <span className="text-slate-500 italic">Society Activity Visual</span>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 p-8 bg-primary-600 rounded-2xl shadow-xl hidden md:block">
                                <div className="text-4xl font-bold text-white">500+</div>
                                <div className="text-primary-100 text-sm">Engaged Students</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What We Do Section */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">What We Do</h2>
                        <div className="w-20 h-1 bg-primary-600 mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {activities.map((activity, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 bg-slate-800/30 rounded-2xl border border-slate-700 hover:border-primary-500/30 transition-all text-center group"
                            >
                                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-400 group-hover:scale-110 transition-transform">
                                    {activity.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{activity.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {activity.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
