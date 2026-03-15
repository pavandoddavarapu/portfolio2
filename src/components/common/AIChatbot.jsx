import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquareText, X, Send, Bot, User } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini if the API key is available in env variables
const genAI = import.meta.env.VITE_GEMINI_API_KEY
    ? new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)
    : null;

const SYSTEM_PROMPT = `You are the personal AI Assistant for Doddavarapu Pavan Venkat Kumar's portfolio website. 
Your primary job is to answer questions about his experience, skills, education, and projects in a friendly, conversational, and professional tone.
Keep your answers concise and highly relevant to the question asked. 

Here is everything you need to know about Pavan:
- Name: Doddavarapu Pavan Venkat Kumar (mostly goes by Pavan)
- Role: ML Engineer, Data Scientist, Full-Stack Developer, AI/ML Enthusiast
- Education: B.Tech Computer Science Engineering from Lovely Professional University (LPU), Phagwara, Punjab (Aug 2023 - Jul 2027) with a CGPA of 8.49. 10th and 12th from Jawahar Navodaya Vidyalaya, Yanam.
- Current Roles: MERN Stack Development Intern at Webstack Academy (Mar 2026 - Present); Chief Technical Team Member at SPIRIT Student Organization LPU (Aug 2024 - May 2025).
- Past Roles: ML Intern at Infosys Springboard (Oct - Dec 2025) where he built a loan default prediction ML system improving accuracy by 30% using Streamlit.
- Tech Stack: Python, Java, C++, Machine Learning, Data Science, LangChain, Streamlit, Docker, AWS, React, MongoDB, Express, Node.js, SQL, Scikit-learn, XGBoost, Hugging Face.
- Key Projects: Hospital Load Forecasting (ML, Time-Series), Smart Waste Management System (IoT, LSTM/Prophet), Loan Default Prediction (XGBoost, Streamlit).
- Awards: Winner of AU DevDayT20DSA, Runner Up at Vibecode India (Agentic AI), Winner at Anomaly Hunter League.
- Contact: Email at pavandoddavarapu7@gmail.com, GitHub & LinkedIn under the handle pavandoddavarapu.

If users ask to contact him, direct them to his email. Explain that he is open for opportunities related to AI/ML and software engineering. If you don't know the answer to something, direct the user to check his resume or contact him directly. Do not make up any information.`;

const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: "Hi! I'm Pavan's AI Assistant, powered by Gemini. Ask me anything about his experience, skills, or projects!" }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [chatSession, setChatSession] = useState(null);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (genAI && !chatSession) {
            const model = genAI.getGenerativeModel({
                model: "gemini-2.5-flash",
                systemInstruction: SYSTEM_PROMPT
            });
            setChatSession(model.startChat({ history: [] }));
        }
    }, [chatSession]);

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = input.trim();
        setMessages(prev => [...prev, { type: 'user', text: userMsg }]);
        setInput('');
        setIsTyping(true);

        if (!genAI) {
            setMessages(prev => [...prev, { type: 'bot', text: "I'm currently unable to connect to the Gemini API because the API key is not configured in the `.env` file." }]);
            setIsTyping(false);
            return;
        }

        try {
            const result = await chatSession.sendMessage(userMsg);
            const responseText = result.response.text();
            setMessages(prev => [...prev, { type: 'bot', text: responseText }]);
        } catch (error) {
            console.error("Gemini API Error:", error);
            setMessages(prev => [...prev, { type: 'bot', text: "Sorry, I ran into an issue connecting to my brain. Please try again later!" }]);
        } finally {
            setIsTyping(false);
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
                className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center hover:bg-blue-500 transition-colors ${isOpen ? 'hidden' : 'block'}`}
            >
                <MessageSquareText size={24} />
            </motion.button>

            {/* Chatbot Window Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9, transition: { duration: 0.2 } }}
                        className="fixed bottom-6 right-6 z-[60] w-[90vw] md:w-[350px] h-[500px] bg-[#121212] border border-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-gray-900 dark:text-white">
                            <div className="flex items-center gap-2 font-semibold">
                                <Bot size={20} />
                                AI Assistant
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full text-gray-900 dark:text-white transition-colors">
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages Body */}
                        <div className="flex-1 p-4 overflow-y-auto dark:bg-[#0a0a0a] flex flex-col gap-3">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex gap-2 max-w-[85%] ${msg.type === 'user' ? 'self-end flex-row-reverse' : 'self-start'}`}>
                                    <div className={`p-2 rounded-xl text-sm ${msg.type === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-gray-800 text-gray-800 dark:text-gray-200 rounded-tl-none'}`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex gap-2 max-w-[85%] self-start">
                                    <div className="bg-gray-800 p-3 rounded-xl rounded-tl-none flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSend} className="p-3 bg-[#121212] border-t border-gray-800 flex items-center gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask about Pavan..."
                                className="flex-1 bg-gray-900 border border-gray-700 text-sm text-gray-900 dark:text-white px-4 py-2 rounded-full focus:outline-none focus:border-blue-500"
                            />
                            <button type="submit" disabled={!input.trim()} className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                                <Send size={16} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AIChatbot;
