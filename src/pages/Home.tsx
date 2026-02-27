import { motion } from 'framer-motion';
import { ArrowRight, Zap, Users, Trophy, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="relative overflow-hidden pt-16">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center pt-20 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/40 to-slate-900" />
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary-600/20 blur-[120px] rounded-full" />
                    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex justify-center mb-8">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                                className="w-32 h-32 md:w-48 md:h-48 bg-white rounded-[2rem] p-4 shadow-2xl shadow-primary-500/20 flex items-center justify-center border border-white/10"
                            >
                                <img src="/logo.png" alt="GTBIRC Logo" className="w-full h-full object-contain" />
                            </motion.div>
                        </div>
                        <span className="inline-block px-3 py-1 rounded-full bg-primary-600/10 text-primary-400 text-xs font-bold uppercase tracking-widest mb-6 border border-primary-600/20">
                            Welcome to GTBIRC
                        </span>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight">
                            Your Place in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-indigo-500">Innovation!</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                            The Guru Tegh Bahadur Innovation & Research Club brings curiosity, creativity, and technical exploration to life. We equip students with practical skills and a community of innovators.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/events" className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2 group shadow-lg shadow-primary-600/25">
                                See Events
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/about" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-all">
                                Learn More
                            </Link>
                        </div>
                    </motion.div>
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
