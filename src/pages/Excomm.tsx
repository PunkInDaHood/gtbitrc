import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter } from 'lucide-react';

const Excomm = () => {
    const members = [
        {
            name: 'Dr. Sahil Kumar',
            role: 'Faculty Coordinator',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
            bio: 'Leading the vision of GTBIRC with over 15 years of academic and industrial research experience.'
        },
        {
            name: 'Taranjeet Singh',
            role: 'Club President',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
            bio: 'Passionate about AI and community building. Driving the club towards new horizons of innovation.'
        },
        {
            name: 'Jaspreet Kaur',
            role: 'Research Head',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
            bio: 'Focused on sustainable technologies and international research publications.'
        },
        {
            name: 'Harman Preet',
            role: 'Technical Lead',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
            bio: 'Specialist in Web3 and modern software architecture. Enjoys building scalable solutions.'
        }
    ];

    return (
        <div className="pt-32 pb-24 min-h-screen bg-slate-950 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">Executive Committee</h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light">
                        The dedicated team behind the growth and management of Guru Tegh Bahadur Innovation & Research Club.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {members.map((member, idx) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-slate-900 p-6 rounded-[2.5rem] border border-white/5 hover:border-white/20 transition-all group text-center"
                        >
                            <div className="relative w-40 h-40 mx-auto mb-6">
                                <div className="absolute inset-0 bg-primary-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover rounded-[2rem] relative z-10 border-2 border-white/10"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                            <p className="text-primary-400 text-sm font-bold uppercase tracking-widest mb-4">{member.role}</p>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6 italic">
                                "{member.bio}"
                            </p>
                            <div className="flex justify-center gap-3">
                                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-slate-400 hover:text-white">
                                    <Linkedin className="w-4 h-4" />
                                </a>
                                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-slate-400 hover:text-white">
                                    <Twitter className="w-4 h-4" />
                                </a>
                                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-slate-400 hover:text-white">
                                    <Mail className="w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Excomm;
