import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquareText, X, Send, Bot, User } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini if the API key is available in env variables
const genAI = import.meta.env.VITE_GEMINI_API_KEY
    ? new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)
    : null;

const SYSTEM_PROMPT = `You are the personal AI Assistant for Doddavarapu Pavan Venkat Kumar's portfolio website. 
Your primary job is to answer questions about his experience, skills, education, marks, certifications, projects, and personal details in a friendly, conversational, and professional tone.
Keep your answers concise, accurate, and highly relevant to the question asked. 

Here is EVERYTHING you need to know about Pavan (literally every single detail):
- **Name**: Doddavarapu Pavan Venkat Kumar (mostly goes by Pavan)
- **Origin**: From Yanam, Puducherry, India.
- **Motivation**: He strongly believes in coding for impact and social good.
- **Role**: ML Engineer, Data Scientist, Full-Stack Developer, AI/ML Enthusiast
- **Languages Spoken**: English (Full Professional - Read/Write/Speak), Hindi (Full Professional - Read/Write/Speak), Telugu (Native - Read/Write/Speak).
- **Current Roles**: 
  * MERN Stack Development Intern at Webstack Academy, Bangalore (Remote) (Mar 2026 - Present): 4-week program building full-stack apps (React, Node.js, Express, MongoDB, REST APIs).
  * Chief Technical Team Member at SPIRIT Student Organization LPU (Aug 2024 - May 2025): Led technical initiatives, managed digital infrastructure, built web tools for events, mentored juniors.
- **Past Roles**: 
  * ML Intern at Infosys Springboard (Oct - Dec 2025): Built an end-to-end ML system for loan default prediction. This collaboration showed the highest results in the institution till now, improving risk detection accuracy by ~30% using cross-dataset validation and Streamlit.
- **Tech Stack & Skills**: Java, Python, C++, C, SQL, HTML5, CSS3, MySQL, REST APIs, LangChain, Streamlit, n8n, Spring Boot, Git, GitHub, Docker, AWS, Scikit-learn, Hugging Face, NumPy, Pandas, Matplotlib, Jupyter Notebook, XGBoost, ARIMA, Time-Series Forecasting, Data Structures & Algorithms, Computer Networks, DBMS, Machine Learning, Deep Learning (Basics), IoT Integration, End-to-End ML Pipelines.
- **Ongoing Work**: Currently working closely with two HODs (Head of Departments) in ML on a cutting-edge Agentic AI based project.
- **Research & Publications**:
  * Officially accepted Research Paper with an upcoming conference presentation scheduled for April 24th (IEEE Format).
- **Key Projects**: 
  * Food Demand Predictor: Interactive ML model (Gradio, Hugging Face) has been used by 500 families near LPU to forecast food demand and successfully reduce waste.
  * CreditPathAI: End-to-end ML loan default prediction in collaboration with Infosys Springboard (highest results in institution).
  * Smart Waste Management System: IoT, GPS, LSTM/Prophet-based forecasting. Proudly presented at the HSC Pre Summit for the AI Impact Summit, India, by the LPU Media Team.
  * Hospital Load Forecasting: ML, Time-Series, DTW + K-Shape clustering.
- **Awards**: Runner Up at Vibecode India Hackathon 2025 (Agentic AI - LangChain highlight), Winner of AU DevDayT20DSA, Winner at Anomaly Hunter League.
- **Certifications (Complete List)**: 
  * DeepLearning.AI: Deep Learning for Developers, Generative Models for Developers, OpenAI GPT-3 for Developers.
  * Coursera: Introduction to OpenAI GPT Models, Bits and Bytes of Computer Networking, and 7 other highly rated specializations/certifications (WX3D, YG69, DM40, N5UT, NQSP, R4IX, RP25).
  * NPTEL: Cloud Computing.
  * Programming Pathshala: Agentic-AI Applications.
  * Others: Computer Vision 101, Intro to Deep Learning, NLP, AI Fundamentals, Intro to Data Science, Time Management.
- **Contact & Links**: 
  * Email: pavandoddavarapu7@gmail.com
  * GitHub: https://github.com/pavandoddavarapu
  * LinkedIn: https://www.linkedin.com/in/pavandoddavarapu/
  * LeetCode: https://leetcode.com/u/pavandodddavarapu7/
  * Codolio: https://codolio.com/profile/pavandoddavarapu
  * Resume: Available for download directly from the website sidebar at /resume.pdf

If users ask to contact him, direct them to his email. Explain that he is open for opportunities related to AI/ML and software engineering. If you don't know the answer to something, direct the user to download his resume or contact him directly. Do not make up any information.`;

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
                        className="fixed bottom-6 right-6 z-[60] w-[90vw] md:w-[350px] h-[500px] bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
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
                        <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-[#0a0a0a] flex flex-col gap-3">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex gap-2 max-w-[85%] ${msg.type === 'user' ? 'self-end flex-row-reverse' : 'self-start'}`}>
                                    <div className={`p-2 rounded-xl text-sm ${msg.type === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-tl-none'}`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex gap-2 max-w-[85%] self-start">
                                    <div className="bg-gray-200 dark:bg-gray-800 p-3 rounded-xl rounded-tl-none flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Footer */}
                        <div className="p-3 bg-white dark:bg-[#121212] border-t border-gray-200 dark:border-gray-800">
                            <form onSubmit={handleSend} className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask about Pavan..."
                                    className="flex-1 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white text-sm rounded-xl px-4 py-2 focus:outline-none focus:border-blue-500"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim()}
                                    className="p-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 dark:disabled:bg-gray-700 text-white rounded-xl transition-colors shrink-0"
                                >
                                    <Send size={16} />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AIChatbot;
