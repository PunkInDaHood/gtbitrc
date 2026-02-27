import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Landmark } from 'lucide-react';
import { useState } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Chapters', path: '/chapters' },
        { name: 'Events', path: '/events' },
        { name: 'Mentor', path: '/mentor' },
        { name: 'Gallery', path: '/gallery' },
    ];

    return (
        <nav className="fixed w-full z-50 pt-6 px-4 md:px-8 pointer-events-none">
            <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
                {/* Logo Section */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-xl rounded-xl overflow-hidden flex items-center justify-center p-1 group-hover:scale-105 transition-transform border border-white/20">
                        <img src="/logo.png" alt="GTBIRC Logo" className="w-full h-full object-contain" />
                    </div>
                </Link>

                {/* Floating Centered Pill Navbar */}
                <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2">
                    <div className="bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-full px-2 py-1.5 flex items-center gap-1 shadow-2xl">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={cn(
                                    "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                    location.pathname === link.path
                                        ? "bg-white text-slate-900 shadow-lg"
                                        : "text-slate-300 hover:text-white hover:bg-white/5"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Right Side: Contact Button & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <Link
                        to="/contact"
                        className="hidden md:block px-6 py-2.5 bg-white text-slate-900 rounded-xl font-bold text-sm hover:bg-slate-100 transition-colors shadow-xl"
                    >
                        Contact Us
                    </Link>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-xl bg-slate-900/40 backdrop-blur-xl border border-white/10 text-white"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                className="md:hidden mt-4 overflow-hidden bg-slate-950/90 backdrop-blur-2xl border border-white/10 rounded-2xl pointer-events-auto"
            >
                <div className="px-4 py-6 space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                                "block px-4 py-2 rounded-xl text-base font-medium",
                                location.pathname === link.path
                                    ? "bg-white text-slate-900"
                                    : "text-slate-300 hover:text-white"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 bg-white text-slate-900 rounded-xl text-center font-bold"
                    >
                        Contact Us
                    </Link>
                </div>
            </motion.div>
        </nav>
    );
};

export default Navbar;
