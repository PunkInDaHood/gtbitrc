import { motion } from 'framer-motion';
import { Instagram, Image as ImageIcon } from 'lucide-react';

const Gallery = () => {
    const images = Array.from({ length: 6 }).map((_, i) => ({
        id: i + 1,
        title: `Event Image ${i + 1}`,
        placeholder: true
    }));

    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Gallery</h1>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Capturing the moments of innovation, teamwork, and success at GTBIRC.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                    {images.map((image, idx) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            className="group aspect-square bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden relative"
                        >
                            <div className="absolute inset-0 flex items-center justify-center bg-slate-900/40 group-hover:bg-slate-900/60 transition-colors z-10">
                                <ImageIcon className="w-12 h-12 text-slate-700 group-hover:text-primary-500/50 transition-colors" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-end p-8">
                                <span className="text-white font-bold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    {image.title}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Instagram Feed Integration Mockup */}
                <section className="bg-slate-800/20 rounded-[3rem] p-12 border border-slate-700 text-center">
                    <div className="mb-12">
                        <Instagram className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Follow our Social Journey</h2>
                        <p className="text-slate-400">@gtbirc_official</p>
                    </div>

                    <div className="bg-slate-900/60 rounded-3xl p-8 border border-slate-800 min-h-[300px] flex items-center justify-center italic text-slate-600">
                        Instagram Feed Widget Placeholder
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Gallery;
