import { useState } from 'react';
import PageWrapper from '../components/common/PageWrapper';
import { motion } from 'framer-motion';
import MagneticButton from '../components/common/MagneticButton';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ loading: false, error: null, success: null });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, error: null, success: null });

        try {
            const formDataToSubmit = {
                ...formData,
                access_key: "eb259a93-1bf4-411c-a8f5-5b4687a45958",
                subject: `New Portfolio Message from ${formData.name}`,
                from_name: formData.name
            };

            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formDataToSubmit),
            });

            const data = await res.json();

            if (data.success) {
                setStatus({ loading: false, error: null, success: 'Your message has been sent successfully! I will get back to you soon.' });
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus(prev => ({ ...prev, success: null })), 5000);
            } else {
                throw new Error(data.message || 'Something went wrong');
            }
        } catch (error) {
            setStatus({ loading: false, error: error.message, success: null });
        }
    };

    return (
        <PageWrapper className="min-h-screen py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full dark:bg-[#050505] overflow-hidden flex flex-col justify-center">

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-16 text-center"
            >
                <h2 className="text-sm font-bold tracking-widest uppercase text-purple-500 mb-6 flex items-center justify-center gap-4">
                    <span className="w-12 h-px bg-purple-500"></span>
                    Collaboration
                    <span className="w-12 h-px bg-purple-500"></span>
                </h2>

                <h3 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] mb-6 tracking-tight text-gray-900 dark:text-white">
                    Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Together.</span>
                </h3>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto w-full">

                {/* Form Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="lg:col-span-3"
                >
                    <div className="glass p-8 sm:p-10 rounded-3xl border border-black/5 dark:border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent shadow-2xl relative">
                        {status.success && (
                            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8 p-4 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center gap-3 text-green-400 font-medium">
                                <CheckCircle2 size={20} />
                                {status.success}
                            </motion.div>
                        )}

                        {status.error && (
                            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center gap-3 text-red-400 font-medium">
                                <AlertCircle size={20} />
                                {status.error}
                            </motion.div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="group relative">
                                <input
                                    type="text"
                                    className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-black/5 dark:border-white/10 text-gray-900 dark:text-white placeholder-transparent focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all peer"
                                    placeholder="Name"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                                <label htmlFor="name" className="absolute left-5 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-purple-400 peer-valid:-top-3 peer-valid:text-xs">
                                    Your Name
                                </label>
                            </div>

                            <div className="group relative">
                                <input
                                    type="email"
                                    className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-black/5 dark:border-white/10 text-gray-900 dark:text-white placeholder-transparent focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all peer"
                                    placeholder="Email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                                <label htmlFor="email" className="absolute left-5 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-purple-400 peer-valid:-top-3 peer-valid:text-xs">
                                    Email Address
                                </label>
                            </div>

                            <div className="group relative">
                                <textarea
                                    rows={5}
                                    className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-black/5 dark:border-white/10 text-gray-900 dark:text-white placeholder-transparent focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all peer resize-none"
                                    placeholder="Message"
                                    id="message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                ></textarea>
                                <label htmlFor="message" className="absolute left-5 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-purple-400 peer-valid:-top-3 peer-valid:text-xs dark:bg-[#0a0a0a] px-1 rounded">
                                    Project Details
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={status.loading}
                                className={`w-full relative overflow-hidden group py-4 px-6 rounded-2xl font-bold text-lg transition-all ${status.loading ? 'bg-white/10 text-gray-600 dark:text-gray-400 cursor-not-allowed' : 'bg-white text-black hover:scale-[1.02]'}`}
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    {status.loading ? 'Transmitting...' : 'Send Message'}
                                    {!status.loading && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
                                </span>
                            </button>
                        </form>
                    </div>
                </motion.div>

                {/* Info Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="lg:col-span-2 flex flex-col justify-center space-y-8"
                >
                    <div>
                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Direct Sync</h4>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                            Looking for a frontend engineer, data analyst, or someone to build an immersive digital experience? My inbox is always open.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <MagneticButton href="mailto:pavandoddavarapu7@gmail.com">
                            <div className="flex items-center gap-4 p-4 rounded-2xl glass border border-black/5 dark:border-white/5 hover:bg-white/5 transition-colors group cursor-pointer w-full">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700 dark:text-gray-300"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-medium">Direct Email</p>
                                    <p className="text-gray-900 dark:text-white font-bold group-hover:text-purple-400 transition-colors">pavandoddavarapu7@gmail.com</p>
                                </div>
                            </div>
                        </MagneticButton>

                        <MagneticButton href="https://github.com/pavandoddavarapu">
                            <div className="flex items-center gap-4 p-4 rounded-2xl glass border border-black/5 dark:border-white/5 hover:bg-white/5 transition-colors group cursor-pointer w-full mt-4 block">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700 dark:text-gray-300"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.5-1.4 6.5-7.a5.66 5.66 0 0 0-1.63-3.72A5.74 5.74 0 0 0 18.23 3s-1.3-.4-4 1.4A13.8 13.8 0 0 0 12 4.14a13.8 13.8 0 0 0-3.23.23C6.3 3.4 5 3 5 3a5.74 5.74 0 0 0 1.2 4.28A5.66 5.66 0 0 0 4.6 11.c0 5.6 3.36 6.65 6.5 7a4.8 4.8 0 0 0-1 3.02v4" /><path d="M5 20c-3 1-3-4-7-4" /></svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-medium">Architecture & Code</p>
                                    <p className="text-gray-900 dark:text-white font-bold group-hover:text-purple-400 transition-colors">github.com/pavandoddavarapu</p>
                                </div>
                            </div>
                        </MagneticButton>

                        <MagneticButton href="https://www.linkedin.com/in/pavandoddavarapu/">
                            <div className="flex items-center gap-4 p-4 rounded-2xl glass border border-black/5 dark:border-white/5 hover:bg-white/5 transition-colors group cursor-pointer w-full mt-4 block">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700 dark:text-gray-300"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-medium">Professional Network</p>
                                    <p className="text-gray-900 dark:text-white font-bold group-hover:text-purple-400 transition-colors">linkedin.com/in/pavandoddavarapu</p>
                                </div>
                            </div>
                        </MagneticButton>

                        <MagneticButton href="https://codolio.com/profile/pavandoddavarapu">
                            <div className="flex items-center gap-4 p-4 rounded-2xl glass border border-black/5 dark:border-white/5 hover:bg-white/5 transition-colors group cursor-pointer w-full mt-4 block">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <img src="https://codolio.com/codolio_assets/codolio.svg" className="w-6 h-6 opacity-70 group-hover:opacity-100 scale-110 transition-opacity" alt="Codolio" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-medium">Coding Profile</p>
                                    <p className="text-gray-900 dark:text-white font-bold group-hover:text-purple-400 transition-colors">codolio.com/profile/pavandoddavarapu</p>
                                </div>
                            </div>
                        </MagneticButton>

                        <MagneticButton href="https://leetcode.com/u/pavandodddavarapu7/">
                            <div className="flex items-center gap-4 p-4 rounded-2xl glass border border-black/5 dark:border-white/5 hover:bg-white/5 transition-colors group cursor-pointer w-full mt-4 block">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" className="w-6 h-6 dark:invert opacity-70 group-hover:opacity-100 transition-opacity" alt="LeetCode" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-medium">Algorithms Profile</p>
                                    <p className="text-gray-900 dark:text-white font-bold group-hover:text-purple-400 transition-colors">leetcode.com/u/pavandodddavarapu7</p>
                                </div>
                            </div>
                        </MagneticButton>


                    </div>
                </motion.div>
            </div>

        </PageWrapper>
    );
};

export default Contact;
