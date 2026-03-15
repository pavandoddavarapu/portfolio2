import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Search, Home, Briefcase, Mail, Award, BookOpen, Terminal, Code, Database, Linkedin, X } from 'lucide-react';

const CommandPalette = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const inputRef = useRef(null);
    const navigate = useNavigate();

    // Setup global shortcut CMD+K or Ctrl+K
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen((prev) => !prev);
            }
            if (e.key === 'Escape' && isOpen) {
                setIsOpen(false);
            }
        };

        const handleCustomOpen = () => setIsOpen(true);

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('open-command-palette', handleCustomOpen);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('open-command-palette', handleCustomOpen);
        };
    }, [isOpen]);

    // Focus input when opened
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        } else {
            setSearch('');
        }
    }, [isOpen]);

    const actions = [
        { id: 'home', title: 'Home', icon: <Home size={16} />, path: '/' },
        { id: 'projects', title: 'Projects', icon: <Code size={16} />, path: '/projects' },
        { id: 'experience', title: 'Experience', icon: <Briefcase size={16} />, path: '/experience' },
        { id: 'education', title: 'Education', icon: <BookOpen size={16} />, action: () => { navigate('/'); window.scrollTo(0, document.body.scrollHeight); setIsOpen(false); } },
        { id: 'certifications', title: 'Certifications', icon: <Award size={16} />, path: '/certifications' },
        { id: 'contact', title: 'Contact Me', icon: <Mail size={16} />, path: '/contact' },
        { id: 'admin', title: 'Command Center', icon: <Terminal size={16} />, path: '/command-center' },
        { id: 'github', title: 'GitHub Profile', icon: <Database size={16} />, action: () => { window.open('https://github.com/Khush2040', '_blank'); setIsOpen(false); } },
        { id: 'linkedin', title: 'LinkedIn Profile', icon: <Linkedin size={16} />, action: () => { window.open('https://www.linkedin.com/in/khushboo0705/', '_blank'); setIsOpen(false); } }
    ];

    const filteredActions = actions.filter((action) =>
        action.title.toLowerCase().includes(search.toLowerCase())
    );

    const handleAction = (action) => {
        if (action.path) {
            navigate(action.path);
            setIsOpen(false);
        } else if (action.action) {
            action.action();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key="overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                />
            )}
            {isOpen && (
                <motion.div
                    key="modal"
                    initial={{ opacity: 0, scale: 0.95, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                    transition={{ duration: 0.2 }}
                    className="fixed top-[20%] left-1/2 -translate-x-1/2 w-[90%] max-w-lg dark:bg-[#0a0a0a] border border-gray-700/50 rounded-2xl shadow-2xl z-[101] overflow-hidden flex flex-col"
                >
                    <div className="flex items-center px-4 py-3 border-b border-gray-800">
                        <Search className="w-5 h-5 text-gray-600 dark:text-gray-400 mr-3" />
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Search pages, commands (Cmd + K)"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="flex-1 bg-transparent border-none outline-none text-gray-900 dark:text-white placeholder-gray-500 text-lg"
                            spellCheck="false"
                        />
                        <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white transition-colors p-1 rounded-md hover:bg-gray-800">
                            <X size={20} />
                        </button>
                    </div>
                    <div className="max-h-72 overflow-y-auto p-2">
                        {filteredActions.length > 0 ? (
                            filteredActions.map((action, index) => (
                                <motion.button
                                    key={action.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.03 }}
                                    onClick={() => handleAction(action)}
                                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-gray-700 dark:text-gray-300 hover:text-white transition-all text-left group"
                                >
                                    <div className="p-2 rounded-lg bg-gray-800/50 group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                                        {action.icon}
                                    </div>
                                    <span className="font-medium">{action.title}</span>
                                    <span className="ml-auto text-xs text-gray-600 group-hover:text-gray-600 dark:text-gray-400">
                                        {action.path ? 'Navigation' : 'Action'}
                                    </span>
                                </motion.button>
                            ))
                        ) : (
                            <div className="text-center py-8 text-gray-500">
                                No results found for "{search}"
                            </div>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CommandPalette;
