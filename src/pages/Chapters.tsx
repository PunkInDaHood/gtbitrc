import { motion } from 'framer-motion';
import { Globe, Cpu, Zap, Code } from 'lucide-react';

const Chapters = () => {
    const chapters = [
        {
            name: 'Computer Society',
            icon: Cpu,
            desc: 'Focusing on cutting-edge developments in computing, AI, and hardware-software integration.',
            color: 'from-blue-500 to-indigo-600'
        },
        {
            name: 'Robotics & Automation',
            icon: Zap,
            desc: 'Hands-on exploration of mechanical design, control systems, and automated intelligence.',
            color: 'from-amber-500 to-orange-600'
        },
        {
            name: 'Web & App Dev',
            icon: Code,
            desc: 'Building modern interfaces, scalable backends, and innovative digital solutions.',
            color: 'from-emerald-500 to-teal-600'
        },
        {
            name: 'Global Innovation',
            icon: Globe,
            desc: 'Connecting with international research standards and sustainable technology practices.',
            color: 'from-purple-500 to-pink-600'
        }
    ];

    return (
        <div className="pt-32 pb-24 min-h-screen bg-slate-950 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">Our Chapters</h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light">
                        Specialized SIGs (Special Interest Groups) designed to dive deep into specific domains of technology and research.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {chapters.map((chapter, idx) => (
                        <motion.div
                            key={chapter.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-slate-900/40 backdrop-blur-xl border border-white/10 p-10 rounded-[2rem] hover:border-white/20 transition-all group"
                        >
                            <div className={`w-16 h-16 bg-gradient-to-br ${chapter.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                                <chapter.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">{chapter.name}</h3>
                            <p className="text-slate-400 leading-relaxed font-light text-lg">
                                {chapter.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Chapters;
