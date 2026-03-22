import { motion } from 'framer-motion';
import { BookOpen, FileText, ExternalLink, Sparkles } from 'lucide-react';

const publicationsData = [
    {
        title: "Accepted Research Paper & Upcoming Conference Presentation",
        description: "Official research paper accepted for publication. Excitingly scheduled for a conference presentation on April 24th.",
        icon: FileText,
        color: "text-blue-500 dark:text-blue-400",
        link: "/IEEE.pdf",
        type: "Conference Paper"
    }
];

const PublicationCard = ({ pub, index }) => {
    return (
        <motion.a
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col justify-between p-6 md:p-8 rounded-[24px] border border-gray-200/50 dark:border-black/5 dark:border-white/10 bg-white/40 dark:bg-black/20 backdrop-blur-md shadow-sm hover:shadow-xl transition-all duration-500 h-full overflow-hidden"
        >
            {/* Ambient Background Gradient on Hover */}
            <div className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent transition-opacity duration-500 rounded-[24px] pointer-events-none opacity-0 group-hover:opacity-100 dark:from-${pub.color.split('-')[1]}-500/10`} />

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6 w-full">
                    <div className={`flex shrink-0 items-center justify-center h-14 w-14 rounded-2xl border border-gray-200 dark:border-black/5 dark:border-white/10 shadow-inner ${pub.color} bg-gray-50 dark:bg-white/5 group-hover:scale-110 transition-transform duration-500`}>
                        <pub.icon size={28} strokeWidth={1.5} />
                    </div>
                    <div className="p-2 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 group-hover:text-blue-500 group-hover:bg-blue-50 dark:group-hover:bg-blue-500/20 transition-all duration-300">
                        <ExternalLink size={18} />
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <span className={`text-xs font-bold tracking-[0.15em] uppercase mb-3 ${pub.color}`}>
                        {pub.type}
                    </span>
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white leading-tight mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {pub.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed mt-auto">
                        {pub.description}
                    </p>
                </div>
            </div>

            {/* Glowing Corner Icon */}
            <div className={`absolute -bottom-4 -right-4 opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 scale-50 group-hover:scale-150 transition-all duration-700 pointer-events-none transform rotate-12`}>
                <pub.icon size={120} className={pub.color} />
            </div>
        </motion.a>
    );
};

const Publications = () => {
    return (
        <section className="py-24 relative overflow-hidden flex flex-col items-center justify-center font-sans tracking-tight border-t border-gray-100 dark:border-black/5 dark:border-white/5 bg-gray-50/50 dark:bg-transparent">
            {/* Ambient Lighting */}
            <div className="absolute top-1/4 left-3/4 w-full max-w-4xl h-[400px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="w-full relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8"
                >
                    <div className="flex flex-col text-left">
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 backdrop-blur-md self-start">
                            <Sparkles size={14} className="text-blue-500 animate-pulse" fill="currentColor" />
                            <span className="text-blue-700 dark:text-blue-400 font-semibold text-xs tracking-[0.2em] uppercase">Research & Authorship</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white max-w-2xl leading-[1.1]">
                            Academic <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 drop-shadow-sm">Publications</span>
                        </h2>
                    </div>

                    <p className="text-gray-600 dark:text-gray-600 dark:text-gray-400 max-w-md text-lg leading-relaxed text-left lg:text-right">
                        Sharing knowledge, exploring complex concepts, and contributing to the global research community.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 auto-rows-fr">
                    {publicationsData.map((pub, index) => (
                        <div key={index} className="col-span-1">
                            <PublicationCard pub={pub} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Publications;
