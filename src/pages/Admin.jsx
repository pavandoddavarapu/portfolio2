import { useEffect, useState } from 'react';
import PageWrapper from '../components/common/PageWrapper';
import { motion } from 'framer-motion';
import { Database, Inbox, User, Mail, Calendar } from 'lucide-react';

const Admin = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const res = await fetch('https://portfolio-x7rl.onrender.com/api/messages');
                const data = await res.json();

                if (res.ok) {
                    setMessages(data.data);
                } else {
                    throw new Error(data.message || 'Failed to fetch messages');
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMessages();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } }
    };

    return (
        <PageWrapper className="min-h-screen py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full dark:bg-[#050505]">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-black/5 dark:border-white/10 pb-8 gap-6"
            >
                <div>
                    <h2 className="text-sm font-bold tracking-widest uppercase text-pink-500 mb-4 flex items-center gap-4">
                        <span className="w-12 h-px bg-pink-500"></span>
                        Command Center
                    </h2>
                    <h3 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white flex items-center gap-4">
                        <Database className="text-purple-400" size={40} />
                        Live Inbox
                    </h3>
                </div>

                <div className="glass px-6 py-3 rounded-xl border border-black/5 dark:border-white/5 flex items-center gap-4">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-sm font-bold tracking-widest uppercase text-gray-600 dark:text-gray-400">System Online</span>
                </div>
            </motion.div>

            {loading ? (
                <div className="flex justify-center py-20">
                    <div className="w-12 h-12 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin"></div>
                </div>
            ) : error ? (
                <div className="glass p-8 rounded-2xl border border-red-500/30 bg-red-500/10 text-red-500 text-center font-medium">
                    {error}
                </div>
            ) : messages.length === 0 ? (
                <div className="glass p-16 rounded-3xl border border-black/5 dark:border-white/5 flex flex-col items-center justify-center text-center">
                    <Inbox size={64} className="text-gray-600 mb-6" />
                    <h4 className="text-2xl font-bold text-gray-600 dark:text-gray-400 mb-2">Inbox is Empty</h4>
                    <p className="text-gray-500">No contact submissions found in the database.</p>
                </div>
            ) : (
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {messages.map((msg, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="glass p-8 rounded-3xl border border-black/5 dark:border-white/10 hover:border-black/10 dark:border-white/20 transition-all duration-300 relative group overflow-hidden bg-gradient-to-br from-white/[0.02] to-transparent"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-pink-500/10 transition-colors duration-500"></div>

                            <div className="flex items-center gap-3 mb-6 border-b border-black/5 dark:border-white/5 pb-6">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-black/5 dark:border-white/10 text-gray-600 dark:text-gray-400">
                                    <User size={20} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white tracking-wide">{msg.name}</h4>
                                    <p className="text-sm text-gray-500 font-medium flex items-center gap-2">
                                        <Mail size={14} /> {msg.email}
                                    </p>
                                </div>
                                <div className="text-right flex flex-col items-end opacity-50">
                                    <Calendar size={16} className="mb-1" />
                                    <p className="text-xs font-mono">{new Date(msg.createdAt).toLocaleDateString()}</p>
                                </div>
                            </div>

                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-light whitespace-pre-wrap">
                                {msg.message}
                            </p>

                            <div className="mt-6 pt-6 border-t border-black/5 dark:border-white/5 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity">
                                <span className="text-xs font-mono bg-white/5 px-3 py-1 rounded-md">ID: {msg._id}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </PageWrapper>
    );
};

export default Admin;
