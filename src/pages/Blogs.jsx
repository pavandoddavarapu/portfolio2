import { motion } from 'framer-motion';
import { BookOpen, ArrowUpRight, Brain, Coffee, Target, GraduationCap, TrendingUp, Sparkles, ExternalLink } from 'lucide-react';
import PageWrapper from '../components/common/PageWrapper';

const blogPosts = [
    {
        title: "How Mistakes Become Lessons: Learning the Hard Way",
        description: "Everyone makes mistakes. It’s part of being human. Yet, not everyone stops to ask the important question: What can I learn from this...",
        tag: "Personal Growth",
        date: "Nov 26, 2025",
        icon: <TrendingUp size={20} className="text-blue-400" />,
        link: "https://medium.com/@khushypro"
    },
    {
        title: "A Simple Guide to the OpenxAI Ecosystem",
        description: "AI is everywhere right now - from chatbots that write essays to image generators that can turn your doodle into a masterpiece. But here's...",
        tag: "Tech & AI",
        date: "Aug 14, 2025",
        icon: <Sparkles size={20} className="text-purple-400" />,
        link: "https://medium.com/@khushypro"
    },
    {
        title: "Cognitive Load: The Hidden Reason College Students Procrastinate and Burn Out",
        description: "College life is a mix of assignments, exams, deadlines, club work, social commitments, and future planning. On the outside, it might just...",
        tag: "College Life",
        date: "Jul 16, 2025",
        icon: <GraduationCap size={20} className="text-cyan-400" />,
        link: "https://medium.com/@khushypro"
    },
    {
        title: "The Quiet Side of Success: Why Rest, Reflection, and Routines Matter",
        description: "In a world that glorifies hustle, constant activity, and “grind culture,” it’s easy to forget that success isn’t just about doing more...",
        tag: "Mindset",
        date: "Nov 12, 2025",
        icon: <Coffee size={20} className="text-orange-400" />,
        link: "https://medium.com/@khushypro"
    },
    {
        title: "The Micro-Habit Revolution: Tiny Actions, Massive Results in Your Self-Growth",
        description: "Ever felt overwhelmed by the mountain of self-improvement goals you set? You know you want to be healthier, more productive, and more...",
        tag: "Habits",
        date: "Mar 4, 2025",
        icon: <Target size={20} className="text-green-400" />,
        link: "https://medium.com/@khushypro"
    },
    {
        title: "Why Curiosity Is the Most Underrated Skill You Can Have?",
        description: "When was the last time curiosity took the lead - a random Google search, a book picked up by chance, or a question that refused to fade...",
        tag: "Curiosity",
        date: "Sep 5, 2025",
        icon: <Brain size={20} className="text-pink-400" />,
        link: "https://medium.com/@khushypro"
    }
];

const Blogs = () => {
    return (
        <PageWrapper>
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
                            Knowledge Blogger
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Sharing insights on technology, productivity, learning, and self-improvement.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {blogPosts.map((post, index) => (
                        <motion.a
                            href={post.link}
                            target="_blank"
                            rel="noreferrer"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass p-8 rounded-3xl border border-black/5 dark:border-white/5 hover:border-purple-500/30 hover:bg-white/5 transition-all group flex flex-col h-full shadow-lg relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-colors duration-500 z-0" />

                            <div className="relative z-10 flex-1">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-white/5 rounded-xl border border-black/5 dark:border-white/10 group-hover:scale-110 transition-transform">
                                        {post.icon}
                                    </div>
                                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:text-gray-300 transition-colors">
                                        {post.date}
                                    </span>
                                </div>

                                <span className="inline-block px-3 py-1 bg-purple-500/10 text-purple-300 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                                    {post.tag}
                                </span>

                                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 group-hover:text-black dark:group-hover:text-white transition-colors leading-tight">
                                    {post.title}
                                </h2>

                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-sm">
                                    {post.description}
                                </p>
                            </div>

                            <div className="relative z-10 mt-auto flex items-center text-purple-400 font-bold group-hover:text-cyan-400 transition-colors">
                                Read Article
                                <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                            </div>
                        </motion.a>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="glass p-10 rounded-3xl border border-purple-500/20 text-center max-w-4xl mx-auto shadow-[0_0_40px_rgba(168,85,247,0.1)] relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 opacity-50 z-0 pointer-events-none" />
                    <div className="relative z-10">
                        <BookOpen className="w-12 h-12 text-purple-400 mx-auto mb-6" />
                        <h2 className="text-3xl font-bold mb-4">Want more insights?</h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-xl mx-auto text-lg group-hover:text-black dark:group-hover:text-white transition-colors">
                            Read my articles on building confidence from scratch, the silent power of discipline, and balancing dreams with deadlines.
                        </p>
                        <a
                            href="https://medium.com/@khushypro"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-black hover:bg-gray-200 font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            Explore All Blogs
                            <ExternalLink size={20} />
                        </a>
                    </div>
                </motion.div>
            </section>
        </PageWrapper>
    );
};

export default Blogs;
