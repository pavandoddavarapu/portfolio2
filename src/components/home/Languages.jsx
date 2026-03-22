import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const languages = [
    {
        name: "English",
        proficiency: "Full Professional Proficiency",
        skills: { read: true, write: true, speak: true },
        theme: "text-blue-500 border-blue-500/30 bg-blue-500/10"
    },
    {
        name: "Hindi",
        proficiency: "Full Professional Proficiency",
        skills: { read: true, write: true, speak: true },
        theme: "text-purple-500 border-purple-500/30 bg-purple-500/10"
    },
    {
        name: "Telugu",
        proficiency: "Native / Bilingual Proficiency",
        skills: { read: true, write: true, speak: true },
        theme: "text-emerald-500 border-emerald-500/30 bg-emerald-500/10"
    }
];

const Languages = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-white dark:bg-[#050505] border-t border-black/5 dark:border-white/5">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Languages</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-lg">
                        Languages I speak and my practical communication proficiencies.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {languages.map((lang, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`p-6 sm:p-8 rounded-3xl border dark:bg-white/[0.02] bg-gray-50/50 backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-xl ${lang.theme.slice(lang.theme.indexOf('border-'))}`}
                        >
                            <div className="mb-6">
                                <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-1">{lang.name}</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide">{lang.proficiency}</p>
                            </div>

                            <div className="space-y-3">
                                {Object.entries(lang.skills).map(([skill, isActive], idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className={`p-1 rounded-full ${isActive ? lang.theme.split(' ')[0] : 'text-gray-400 dark:text-gray-600'}`}>
                                            <CheckCircle2 size={20} strokeWidth={2.5} />
                                        </div>
                                        <span className={`text-base font-semibold capitalize ${isActive ? 'text-gray-800 dark:text-gray-200' : 'text-gray-400 dark:text-gray-600'}`}>
                                            {skill}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Languages;
