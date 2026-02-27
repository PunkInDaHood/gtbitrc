import { Link } from 'react-router-dom';
import { Landmark, Instagram, Mail, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-4 group">
                            <div className="w-16 h-16 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform">
                                <img src="/logo.png" alt="GTBIRC Logo" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white uppercase">GTBIRC</span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Empowering the next generation of innovators and researchers through collaboration, creativity, and technical excellence.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="text-slate-400 hover:text-primary-400 transition-colors text-sm">About Us</Link></li>
                            <li><Link to="/events" className="text-slate-400 hover:text-primary-400 transition-colors text-sm">Upcoming Events</Link></li>
                            <li><Link to="/gallery" className="text-slate-400 hover:text-primary-400 transition-colors text-sm">Gallery</Link></li>
                            <li><Link to="/contact" className="text-slate-400 hover:text-primary-400 transition-colors text-sm">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Support</h3>
                        <ul className="space-y-2">
                            <li className="text-slate-400 text-sm">Help Center</li>
                            <li className="text-slate-400 text-sm">Privacy Policy</li>
                            <li className="text-slate-400 text-sm">Terms of Service</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/gtbirc.official?utm_source=qr&igsh=M2t4ZWUyaDR6Z2Nu" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 hover:bg-primary-600 rounded-full transition-all duration-300 text-slate-300 hover:text-white">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-slate-800 hover:bg-primary-600 rounded-full transition-all duration-300 text-slate-300 hover:text-white">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="mailto:contact@gtbirc.com" className="p-2 bg-slate-800 hover:bg-primary-600 rounded-full transition-all duration-300 text-slate-300 hover:text-white">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-slate-900 pt-8 text-center">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} GTBIRC. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
