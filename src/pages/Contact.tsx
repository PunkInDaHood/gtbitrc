import { motion } from 'framer-motion';
import { Mail, Instagram, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h1>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Have a question or want to collaborate? We'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-12"
                    >
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-6">
                                    <div className="p-4 bg-primary-600/10 rounded-2xl text-primary-500 border border-primary-600/20">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Email Us</h4>
                                        <p className="text-slate-400">contact@gtbirc.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="p-4 bg-indigo-600/10 rounded-2xl text-indigo-500 border border-indigo-600/20">
                                        <Instagram className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Follow Us</h4>
                                        <a href="https://www.instagram.com/gtbirc.official?utm_source=qr&igsh=M2t4ZWUyaDR6Z2Nu" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">@gtbirc.official</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="p-4 bg-emerald-600/10 rounded-2xl text-emerald-500 border border-emerald-600/20">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Location</h4>
                                        <p className="text-slate-400 line-clamp-2">GTBIT Main Campus, New Delhi, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-slate-800/40 rounded-3xl border border-slate-700">
                            <h3 className="text-white font-bold mb-4">Office Hours</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Our student team is available from 10:00 AM to 4:00 PM on weekdays. For urgent queries, please DM us on Instagram.
                            </p>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-slate-800/30 backdrop-blur-sm p-10 rounded-3xl border border-slate-700"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-slate-400 text-sm font-medium mb-2">First Name</label>
                                    <input type="text" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-slate-400 text-sm font-medium mb-2">Last Name</label>
                                    <input type="text" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" placeholder="Doe" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-slate-400 text-sm font-medium mb-2">Email Address</label>
                                <input type="email" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-slate-400 text-sm font-medium mb-2">Subject</label>
                                <select className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors appearance-none">
                                    <option>General Inquiry</option>
                                    <option>Event Registration</option>
                                    <option>Partnership</option>
                                    <option>Feedback</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-slate-400 text-sm font-medium mb-2">Message</label>
                                <textarea rows={4} className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" placeholder="Your message here..."></textarea>
                            </div>
                            <button disabled className="w-full py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 group shadow-lg shadow-primary-600/20">
                                Send Message
                                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
