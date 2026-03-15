import { motion } from 'framer-motion';

const languages = [
    { name: "English", proficiency: "Full professional proficiency", level: 100, color: "bg-blue-500" },
    { name: "Hindi", proficiency: "Full professional proficiency", level: 100, color: "bg-purple-500" }
];

const Languages = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-white dark:dark:bg-[#050505]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Languages</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-lg">
                        Languages I speak and my technical proficiency levels in each.
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {languages.map((lang, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-gray-50 dark:bg-white/[0.02] p-6 rounded-2xl border border-gray-100 dark:border-black/5 dark:border-white/5"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{lang.name}</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-600 dark:text-gray-400 font-medium tracking-wide mt-1">{lang.proficiency}</p>
                                </div>
                                <span className="text-2xl font-black text-gray-700 dark:text-gray-300 dark:text-gray-700">{lang.level}%</span>
                            </div>

                            <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-3 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${lang.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.2 }}
                                    className={`h-full rounded-full ${lang.color} relative`}
                                >
                                    <div className="absolute inset-0 bg-white/20 w-full h-full animate-[pulse_2s_ease-in-out_infinite]"></div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Languages;
