import { motion } from 'framer-motion';
import { ArrowRight, Zap, Users, Trophy, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="relative overflow-hidden bg-slate-950">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070"
                        alt="Background"
                        className="w-full h-full object-cover opacity-30 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-7xl md:text-[10rem] font-black text-white/10 uppercase tracking-tighter leading-none mb-4 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 select-none">
                            FOR
                        </h1>
                        <div className="relative">
                            <h2 className="text-4xl md:text-7xl font-extrabold text-white mb-8 tracking-tight">
                                <span className="block italic font-light text-primary-400 text-2xl md:text-3xl mb-4">Empowering</span>
                                GTBIT INNOVATORS
                            </h2>
                            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                                Curiosity, creativity, and technical excellence brought to life by the Guru Tegh Bahadur Innovation & Research Club.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/events" className="px-10 py-4 bg-white text-slate-900 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl">
                                    Browse Events
                                </Link>
                                <Link to="/about" className="px-10 py-4 border border-white/20 text-white rounded-full font-bold backdrop-blur-md hover:bg-white/5 transition-all">
                                    Our Story
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Social Icons */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6 z-10">
                    <a href="#" className="p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 text-slate-400 hover:text-white transition-all">
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 text-slate-400 hover:text-white transition-all">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 text-slate-400 hover:text-white transition-all">
                        <Twitter className="w-5 h-5" />
                    </a>
                </div>
            </section>

            {/* Feature Highlights */}
            <section className="py-24 relative z-10 bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-primary-500/50 transition-all"
                        >
                            <div className="w-12 h-12 bg-primary-600/20 rounded-xl flex items-center justify-center mb-6">
                                <Zap className="w-6 h-6 text-primary-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Innovation</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                We push the boundaries of technology and creativity through hands-on projects and experimentation.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-primary-500/50 transition-all"
                        >
                            <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center mb-6">
                                <Users className="w-6 h-6 text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Community</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Join a vibrant ecosystem of like-minded students, mentors, and industry experts.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-primary-500/50 transition-all"
                        >
                            <div className="w-12 h-12 bg-emerald-600/20 rounded-xl flex items-center justify-center mb-6">
                                <Trophy className="w-6 h-6 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Excellence</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Striving for the highest standards in research, development, and competition.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-600/5 mix-blend-overlay" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="bg-slate-900/50 backdrop-blur-2xl border border-white/5 rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
                        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary-500/10 blur-[100px] rounded-full" />

                        <div className="max-w-xl text-center md:text-left">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">Stay Ahead of the Curve</h2>
                            <p className="text-slate-400 text-lg font-light leading-relaxed">
                                Join our monthly newsletter to get exclusive updates on research milestones, upcoming workshops, and innovation opportunities.
                            </p>
                        </div>

                        <div className="w-full max-w-md">
                            <form className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-grow bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white/20 transition-all font-light"
                                />
                                <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-slate-100 transition-colors shadow-xl">
                                    Subscribe
                                </button>
                            </form>
                            <p className="text-slate-500 text-xs mt-4 text-center md:text-left">
                                No spam, only innovation. Unsubscribe at any time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Links Section */}
            <section className="py-24 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="max-w-xl text-left">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Stay Connected</h2>
                            <p className="text-slate-400 mb-8">
                                Follow our journey on Instagram and stay updated with the latest in student-led innovation, workshops, and success stories.
                            </p>
                            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-bold text-white hover:opacity-90 transition-opacity">
                                <Instagram className="w-5 h-5" />
                                Follow on Instagram
                            </a>
                        </div>

                        <div className="w-full max-w-md aspect-square bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 flex items-center justify-center">
                            <span className="text-slate-500 italic">Instagram Feed Integration Preview</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
