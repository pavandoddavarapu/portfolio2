import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, Maximize2, Minimize2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TerminalConsole = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMaximized, setIsMaximized] = useState(false);
    const [history, setHistory] = useState([
        { type: "system", content: "Welcome to Pavan's Portfolio Terminal v1.0.0" },
        { type: "system", content: "Type 'help' to see available commands." }
    ]);
    const [input, setInput] = useState('');
    const bottomRef = useRef(null);
    const inputRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [history, isOpen]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();
            const newHistory = [...history, { type: "user", content: `Pavan@visitor:~$ ${input}` }];
            setInput('');

            let response = "";
            switch (cmd) {
                case "help":
                    response = "Available commands: \n- whoami: Learn about me\n- skills: View my technical skills\n- contact: Go to contact page\n- projects: View my projects\n- clear: Clear terminal\n- exit: Close terminal";
                    break;
                case "whoami":
                    response = "I am Doddavarapu Pavan Venkat Kumar, an aspiring ML Engineer and Data Scientist specializing in AI, Machine Learning, and Full-Stack Development.";
                    break;
                case "skills":
                    response = "Tech Stack: Python, Java, C++, SQL, Machine Learning (Scikit-learn, Hugging Face), Full-Stack (React, Node.js), AWS, Docker.";
                    break;
                case "contact":
                    response = "Navigating to /contact...";
                    setTimeout(() => { navigate('/contact'); setIsOpen(false); }, 1000);
                    break;
                case "projects":
                    response = "Navigating to /projects...";
                    setTimeout(() => { navigate('/projects'); setIsOpen(false); }, 1000);
                    break;
                case "clear":
                    setHistory([]);
                    return;
                case "exit":
                    setIsOpen(false);
                    return;
                case "":
                    break;
                default:
                    response = `command not found: ${cmd}. Type 'help' for available commands.`;
            }

            if (response) {
                newHistory.push({ type: "system", content: response });
            }

            setHistory(newHistory);
        }
    };

    return (
        <>
            {/* Toggle Button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 right-24 z-50 p-3 rounded-full bg-green-500/10 text-green-400 border border-green-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(34,197,94,0.3)] flex items-center justify-center ${isOpen ? 'hidden' : 'block'}`}
            >
                <Terminal size={24} />
            </motion.button>

            {/* Terminal Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className={`fixed z-[60] bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-xl border border-gray-200 dark:border-gray-700/50 shadow-2xl overflow-hidden flex flex-col font-mono text-sm ${isMaximized
                            ? 'inset-4 md:inset-10 rounded-2xl'
                            : 'bottom-6 right-6 w-[90vw] md:w-[500px] h-[400px] rounded-xl'
                            }`}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-3 bg-gray-100/50 dark:bg-white/5 border-b border-gray-200 dark:border-white/10 select-none">
                            <div className="flex gap-2">
                                <button onClick={() => setIsOpen(false)} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400" />
                                <button onClick={() => setIsMaximized(!isMaximized)} className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400" />
                                <button onClick={() => setIsMaximized(!isMaximized)} className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400" />
                            </div>
                            <div className="text-gray-600 dark:text-gray-400 text-xs flex items-center gap-2">
                                <Terminal size={14} /> visitor@portfolio: ~
                            </div>
                            <div className="w-10"></div> {/* Spacer for centering */}
                        </div>

                        {/* Body */}
                        <div className="flex-1 p-4 overflow-y-auto text-gray-800 dark:text-gray-300" onClick={() => inputRef.current?.focus()}>
                            {history.map((line, i) => (
                                <div key={i} className="mb-2 whitespace-pre-wrap">
                                    {line.type === "user" ? (
                                        <span className="text-green-600 dark:text-green-400 font-semibold">{line.content}</span>
                                    ) : (
                                        <span className="opacity-90">{line.content}</span>
                                    )}
                                </div>
                            ))}
                            <div className="flex items-center gap-2 mt-2">
                                <span className="text-green-600 dark:text-green-400 font-semibold shrink-0">Pavan@visitor:~$</span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleCommand}
                                    className="flex-1 bg-transparent outline-none border-none text-gray-900 dark:text-gray-200 caret-black dark:caret-white"
                                    spellCheck="false"
                                    autoComplete="off"
                                />
                            </div>
                            <div ref={bottomRef} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default TerminalConsole;
