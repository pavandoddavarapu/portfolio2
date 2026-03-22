import { motion } from 'framer-motion';
import { Database, BarChart3, BrainCircuit, Blocks, Cloud, Network } from 'lucide-react';

const services = [
    {
        title: "Data Engineering & ETL",
        description: "Designing and implementing efficient data pipelines using Python, SQL, and Informatica (ETL). Focused on data cleaning, schema design, query optimization, and structured storage.",
        icon: <Database size={32} className="text-blue-400" />,
        color: "from-blue-500/20 to-blue-500/5",
        border: "hover:border-blue-500/50"
    },
    {
        title: "Data Analytics & Visualization",
        description: "Transforming complex datasets into clear business insights using Power BI, Tableau, and Excel. Delivering KPI dashboards, analytical reporting, and performance tracking systems.",
        icon: <BarChart3 size={32} className="text-purple-400" />,
        color: "from-purple-500/20 to-purple-500/5",
        border: "hover:border-purple-500/50"
    },
    {
        title: "Applied AI & Machine Learning",
        description: "Building data-driven models using Python and Scikit-learn. Working on feature engineering, model evaluation, data preprocessing, and insight interpretation within pipelines.",
        icon: <BrainCircuit size={32} className="text-pink-400" />,
        color: "from-pink-500/20 to-pink-500/5",
        border: "hover:border-pink-500/50"
    },
    {
        title: "Full-Stack Data Systems",
        description: "Developing backend-driven applications using the MERN stack to support scalable data storage architectures. Understanding APIs, data flows, and how scalable systems are architected.",
        icon: <Blocks size={32} className="text-emerald-400" />,
        color: "from-emerald-500/20 to-emerald-500/5",
        border: "hover:border-emerald-500/50"
    },
    {
        title: "Cloud & Deployment Foundations",
        description: "Deploying applications and data systems with awareness of Cloud environments, version control workflows, containerization basics, and CI/CD principles for production readiness.",
        icon: <Cloud size={32} className="text-amber-400" />,
        color: "from-amber-500/20 to-amber-500/5",
        border: "hover:border-amber-500/50"
    },
    {
        title: "Data Architecture & Modeling",
        description: "Designing structured, scalable data systems supporting reliable analytics. Focused on relational schema design, star/snowflake fundamentals, indexing strategies, query optimization, and structuring databases for OLTP use-cases.",
        icon: <Network size={32} className="text-cyan-400" />,
        color: "from-cyan-500/20 to-cyan-500/5",
        border: "hover:border-cyan-500/50"
    }
];

const Services = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-gray-50 dark:bg-[#0a0a0f] border-t border-gray-100 dark:border-white/5">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-[600px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-[500px] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-blue-500 dark:text-blue-400 font-semibold tracking-wider uppercase text-sm mb-3 block">What I Do</span>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                        Engineer Data. Build Systems. Deliver Insights.
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        Designing scalable data pipelines, analytics systems, and full-stack applications that transform raw data into reliable, actionable intelligence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`p-8 rounded-3xl glass border border-black/5 dark:border-white/5 transition-all duration-300 ${service.border} relative overflow-hidden bg-white/40 dark:bg-black/20`}
                        >
                            {/* Card top subtle gradient */}
                            <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${service.color} opacity-50 pointer-events-none`}></div>

                            <div className="relative z-10">
                                <div className="mb-6 p-4 rounded-full bg-white dark:bg-white/5 inline-block backdrop-blur-md shadow-sm dark:shadow-none border border-black/5 dark:border-white/10">
                                    {service.icon}
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            {/* Decorative element on hover */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-black/5 dark:bg-white/5 rounded-full blur-2xl group-hover:bg-black/10 dark:group-hover:bg-white/10 transition-colors"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
