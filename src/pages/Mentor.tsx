import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter } from 'lucide-react';

const Mentor = () => {
    const leader = {
        name: 'Dr. Dipali virmani',
        role: 'Head, Innovation & Research Centre',
        image: '/head_irc.png',
        title: 'Academic Leader & Researcher in Higher Education',
        experience: [
            {
                role: 'Head, Innovation & Research Centre',
                org: 'Guru Tegh Bahadur Institute Of Technology',
                period: 'Jun 2024 - Present · 1 yr 9 mos',
                details: 'Full-time · Delhi, India · On-site'
            },
            {
                role: 'HOD',
                org: 'VIPS-TC',
                period: 'Aug 2021 - Jun 2024 · 2 yrs 11 mos',
                details: 'Vivekanand Institute of Professional Studies'
            },
            {
                role: 'Professor & HOD CSE',
                org: 'BpIT, GGSIP University Delhi',
                period: 'Aug 2001 - Aug 2021 · 20 yrs 1 mo',
                details: 'BPIT, Delhi'
            }
        ]
    };

    return (
        <div className="pt-32 pb-24 min-h-screen bg-slate-950 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">Our Mentor</h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
                        Meet the vision behind GTBIRC's research and innovation initiatives.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-slate-900/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[3rem] overflow-hidden relative group"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />

                    <div className="flex flex-col md:flex-row gap-12 items-center md:items-start relative z-10">
                        <div className="w-64 h-64 flex-shrink-0">
                            <div className="relative w-full h-full">
                                <div className="absolute inset-0 bg-primary-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                                <img
                                    src={leader.image}
                                    alt={leader.name}
                                    className="w-full h-full object-cover rounded-[2.5rem] relative z-10 border-2 border-white/10 shadow-2xl"
                                />
                            </div>
                        </div>

                        <div className="flex-grow text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-black text-white mb-2 uppercase tracking-tight">{leader.name}</h2>
                            <p className="text-primary-400 font-bold uppercase tracking-[0.2em] mb-4 text-sm">{leader.role}</p>
                            <p className="text-xl text-slate-300 font-light mb-8 italic">"{leader.title}"</p>

                            <div className="space-y-8">
                                <h3 className="text-white font-bold uppercase tracking-widest text-xs border-b border-white/10 pb-2">Professional Journey</h3>
                                {leader.experience.map((exp, i) => (
                                    <div key={i} className="relative pl-6 border-l border-white/10">
                                        <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-primary-500" />
                                        <h4 className="text-white font-bold">{exp.role}</h4>
                                        <p className="text-primary-400/80 text-sm font-medium">{exp.org}</p>
                                        <p className="text-slate-400 text-sm mt-1">{exp.period}</p>
                                        <p className="text-slate-500 text-xs mt-1">{exp.details}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center md:justify-start gap-4 mt-12">
                                <a href="#" className="p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors text-slate-400 hover:text-white border border-white/5">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="#" className="p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors text-slate-400 hover:text-white border border-white/5">
                                    <Mail className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Mentor;
