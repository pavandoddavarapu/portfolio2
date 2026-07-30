import PageWrapper from '../components/common/PageWrapper';
import { Github, ExternalLink, Code2, Cpu, Database, Shield, Zap, GitBranch, Server, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import MagneticButton from '../components/common/MagneticButton';

// ─── Speak Up! Featured Project ──────────────────────────────────────────────
const SpeakUpFeatured = () => {
    const architectureHighlights = [
        {
            icon: <Zap size={18} />,
            title: 'Async AI Queue',
            desc: 'PostgreSQL-backed task queue returns taskId in <100ms; client polls /api/status every 2s — eliminating mobile network timeouts on 5–15s AI calls',
            color: 'from-yellow-400 to-orange-500'
        },
        {
            icon: <GitBranch size={18} />,
            title: 'Multi-Provider Failover',
            desc: 'Groq Whisper → Gemini 2.0 Flash Lite automatic fallback with per-key 429 rotation across multiple Groq API keys — zero single point of failure',
            color: 'from-blue-400 to-cyan-500'
        },
        {
            icon: <Database size={18} />,
            title: 'Dual-DB Strategy',
            desc: 'PostgreSQL for relational ACID data (sessions, queue, users) + Firebase Firestore for sub-second real-time collaborative room state — each chosen for what it does best',
            color: 'from-purple-400 to-pink-500'
        },
        {
            icon: <Shield size={18} />,
            title: 'Production Security',
            desc: 'CSP, HSTS, X-Frame-Options, Permissions-Policy via vercel.json · Server-side Firebase token verification · Custom in-memory sliding-window rate limiter (no Redis)',
            color: 'from-green-400 to-emerald-500'
        },
        {
            icon: <Cpu size={18} />,
            title: 'Serverless Architecture',
            desc: '11 Vercel Serverless Functions (Node.js ESM) · Auto-scaling · Singapore region · Cold-start idempotent DB migrations via ALTER TABLE IF NOT EXISTS on boot',
            color: 'from-rose-400 to-red-500'
        },
        {
            icon: <Server size={18} />,
            title: 'Smart Caching Layers',
            desc: 'In-memory 75-image cache · DB-level daily content cache (AI called once/day max) · CDN edge s-maxage=86400 on /api/daily · Background async cache refill',
            color: 'from-indigo-400 to-violet-500'
        },
    ];

    const techStack = [
        { label: 'Runtime', value: 'Node.js ESM · Vercel Serverless' },
        { label: 'AI', value: 'Groq Whisper · Llama 3.1 · Gemini 2.0 Flash Lite' },
        { label: 'Auth', value: 'Firebase Auth · Google Identity Toolkit REST' },
        { label: 'Databases', value: 'PostgreSQL (pg pool=3) · Firebase Firestore' },
        { label: 'Frontend', value: 'Vanilla JS · MediaRecorder API · PWA · 7-theme CSS' },
        { label: 'Infra', value: 'Vercel · GitHub CI/CD · Jitsi Meet (GD rooms)' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.08 } }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 18 } }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="mb-24 relative"
        >
            {/* Ambient glow */}
            <div className="absolute -inset-4 bg-gradient-to-br from-violet-500/10 via-pink-500/5 to-cyan-500/10 blur-3xl rounded-[40px] pointer-events-none" />

            <div className="relative rounded-3xl overflow-hidden border border-white/10 dark:border-white/[0.07] bg-white/[0.02] dark:bg-black/30 backdrop-blur-sm">

                {/* Header banner */}
                <div className="relative px-8 pt-10 pb-8 bg-gradient-to-br from-violet-950/60 via-indigo-950/40 to-transparent border-b border-white/[0.07]">
                    {/* Decorative grid lines */}
                    <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                    <div className="relative flex flex-col md:flex-row md:items-start gap-6 justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-violet-500/20 border border-violet-400/40 text-violet-300">
                                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse inline-block" />
                                    Featured Project · Live in Production
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 border border-emerald-400/30 text-emerald-300">
                                    <Globe size={11} /> speakupai.me
                                </span>
                            </div>
                            <h3 className="text-4xl sm:text-5xl font-black text-white mb-3 tracking-tight">
                                🎤 Speak Up!
                            </h3>
                            <p className="text-lg text-gray-300 font-light max-w-2xl leading-relaxed">
                                AI-powered English speaking practice platform — built with a <span className="text-white font-semibold">production-grade async processing pipeline</span>, multi-provider AI failover, real-time group discussion rooms, and a serverless architecture that scales to zero.
                            </p>
                        </div>

                        {/* CTA buttons */}
                        <div className="flex flex-col gap-3 shrink-0 md:items-end">
                            <a
                                href="https://speakupai.me"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 text-white font-bold text-sm hover:from-violet-400 hover:to-pink-400 transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]"
                            >
                                <ExternalLink size={16} /> Live Demo
                            </a>
                            <a
                                href="https://github.com/pavandoddavarapu/english-project-testing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                            >
                                <Github size={16} /> Source Code
                            </a>
                        </div>
                    </div>
                </div>

                {/* Architecture highlights grid */}
                <div className="px-8 py-8">
                    <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-6 flex items-center gap-3">
                        <span className="w-8 h-px bg-gray-600 inline-block" />
                        System Design Highlights
                        <span className="w-8 h-px bg-gray-600 inline-block" />
                    </p>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
                    >
                        {architectureHighlights.map((item, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className="group relative p-5 rounded-2xl bg-white/[0.03] dark:bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-300`} />
                                <div className="relative">
                                    <div className={`inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br ${item.color} bg-opacity-20 mb-3 text-white shadow-lg`}>
                                        {item.icon}
                                    </div>
                                    <h4 className="text-sm font-bold text-white mb-2">{item.title}</h4>
                                    <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Tech stack row */}
                    <div className="border-t border-white/[0.06] pt-6">
                        <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-4">Technology Stack</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {techStack.map((item, i) => (
                                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                                    <span className="text-xs font-bold text-gray-500 shrink-0 w-16">{item.label}</span>
                                    <span className="text-xs text-gray-300 leading-relaxed">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Engineering decisions callout */}
                    <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-violet-500/[0.07] to-pink-500/[0.07] border border-violet-400/[0.15]">
                        <p className="text-xs font-bold tracking-widest uppercase text-violet-400 mb-2">Key Engineering Decision</p>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            <span className="text-white font-semibold">Why async queue over synchronous AI calls?</span> — Speech analysis via Groq Whisper + LLM scoring takes 5–15s. A synchronous serverless HTTP call would timeout on mobile. The queue decouples submission from processing: client gets taskId in &lt;100ms, polls /api/status every 2s while a stall-detection mechanism auto-retriggers stalled workers after 12s.
                        </p>
                    </div>
                </div>

                {/* Tags footer */}
                <div className="px-8 pb-8 flex flex-wrap gap-2">
                    {['Node.js ESM', 'Vercel Serverless', 'PostgreSQL', 'Firebase Firestore', 'Groq Whisper', 'Gemini 2.0', 'Llama 3.1', 'Vanilla JS', 'PWA', 'MediaRecorder API', 'Rate Limiting', 'Async Queue', 'Multi-Provider AI', 'Jitsi Meet'].map(tag => (
                        <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-gray-300 font-medium">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};
// ─── Aegis Clinical AI Featured Project ───────────────────────────────────────
const AegisFeatured = () => {
    const architectureHighlights = [
        {
            icon: <Cpu size={18} />,
            title: 'Multi-Agent LangGraph Orchestration',
            desc: 'Dynamic hub-and-spoke graph: Orchestration Planner evaluates intent after every node, routing adaptively across 9 specialized agents (Query → Retrieve → Evidence Eval → Contradiction → Reason → Validate → Supervisor) — no static router',
            color: 'from-pink-400 to-rose-500'
        },
        {
            icon: <Database size={18} />,
            title: 'Quad-Database Architecture',
            desc: 'Qdrant (dense vector + BM25 sparse hybrid) · Neo4j (medical knowledge graph, Cypher) · PostgreSQL (telemetry vault) · Redis (Celery task queues + session caching) — each solving a fundamentally different data problem',
            color: 'from-cyan-400 to-blue-500'
        },
        {
            icon: <Shield size={18} />,
            title: 'Clinical Safety Guardrails',
            desc: 'PII anonymization (HIPAA) before any LLM call · Evidence hierarchy scoring (RCTs > case reports) · Cross-source contradiction detection · Drug-drug interaction warnings · Freshness engine flags studies >5 years old',
            color: 'from-emerald-400 to-teal-500'
        },
        {
            icon: <GitBranch size={18} />,
            title: 'Adaptive Retry & Reflection Loop',
            desc: 'Supervisor Agent monitors validation score threshold; on failure routes to Reflection Agent which critiques and replans retrieval strategy — self-healing execution with max-retry guard and full audit trail logging',
            color: 'from-violet-400 to-purple-500'
        },
        {
            icon: <Zap size={18} />,
            title: 'SSE Streaming + Startup Warmup',
            desc: 'POST /analyze/stream/ pushes real-time agent node events via Server-Sent Events (SSE) · FastAPI lifespan startup pre-warms Neo4j connections + SentenceTransformers embeddings — eliminates cold-start latency entirely',
            color: 'from-yellow-400 to-amber-500'
        },
        {
            icon: <Server size={18} />,
            title: 'Production Observability',
            desc: 'Prometheus metrics · Per-request workflow trace (agent order + latency) · LangSmith native tracing (LANGCHAIN_TRACING_V2) · PostgreSQL telemetry vault for confidence scores, validation history, contradiction reports',
            color: 'from-orange-400 to-red-500'
        },
    ];

    const agentRoster = [
        { name: 'Orchestration Planner', role: 'Hub · intent eval · decides next agent' },
        { name: 'Query Agent', role: 'Medical acronym expansion · sub-query synthesis' },
        { name: 'Retrieval Agent', role: 'Hybrid Qdrant + Neo4j graph path search' },
        { name: 'Research Agent', role: 'Live PubMed · ClinicalTrials · Wikipedia (asyncio.gather)' },
        { name: 'Evidence Evaluator', role: 'Hierarchy scoring · freshness filter · weak-source pruning' },
        { name: 'Contradiction Analyzer', role: 'Cross-source conflict · drug interaction alerts' },
        { name: 'Reasoning Agent', role: 'Evidence-grounded clinical synthesis report' },
        { name: 'Validation Agent', role: 'Hallucination check · guideline compliance scoring' },
        { name: 'Supervisor Agent', role: 'QA router → reflect/retry or finalize + audit log' },
    ];

    const techStack = [
        { label: 'Orchestration', value: 'LangGraph (adaptive hub-and-spoke statechart)' },
        { label: 'Backend', value: 'FastAPI · Python 3.10+ · Uvicorn · Pydantic v2' },
        { label: 'Frontend', value: 'Next.js 16 App Router · TypeScript · TailwindCSS · Framer Motion' },
        { label: 'Vector DB', value: 'Qdrant — dense + BM25 sparse hybrid retrieval' },
        { label: 'Graph DB', value: 'Neo4j — medical ontology Cypher traversal' },
        { label: 'Infra', value: 'Docker Compose · Redis · PostgreSQL · LangSmith · Prometheus' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.07 } }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 18 } }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="mb-24 relative"
        >
            <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/10 via-teal-500/5 to-emerald-500/10 blur-3xl rounded-[40px] pointer-events-none" />

            <div className="relative rounded-3xl overflow-hidden border border-white/10 dark:border-white/[0.07] bg-white/[0.02] dark:bg-black/30 backdrop-blur-sm">

                {/* Header */}
                <div className="relative px-8 pt-10 pb-8 bg-gradient-to-br from-cyan-950/60 via-teal-950/40 to-transparent border-b border-white/[0.07]">
                    <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                    <div className="relative flex flex-col md:flex-row md:items-start gap-6 justify-between">
                        <div>
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-cyan-500/20 border border-cyan-400/40 text-cyan-300">
                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse inline-block" />
                                    Featured Project · Multi-Agent AI System
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/15 border border-teal-400/30 text-teal-300">
                                    ⚕️ Clinical Intelligence · Phase 13
                                </span>
                            </div>
                            <h3 className="text-4xl sm:text-5xl font-black text-white mb-3 tracking-tight">
                                ⚕️ Aegis Clinical AI
                            </h3>
                            <p className="text-lg text-gray-300 font-light max-w-2xl leading-relaxed">
                                <span className="text-white font-semibold">Conversational Adaptive Multi-Agent Clinical Intelligence Platform</span> — a physician decision-support copilot coordinating 9 specialized AI agents via LangGraph, performing hybrid RAG, knowledge-graph traversal, live medical research, multimodal analysis, and hallucination-checked synthesis inside strict HIPAA-aligned safety guardrails.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 shrink-0 md:items-end">
                            <a
                                href="https://github.com/pavandoddavarapu/aegis_agenticAi_capstone"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold text-sm hover:from-cyan-400 hover:to-teal-400 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
                            >
                                <Github size={16} /> Source Code
                            </a>
                        </div>
                    </div>
                </div>

                {/* Architecture highlights */}
                <div className="px-8 py-8">
                    <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-6 flex items-center gap-3">
                        <span className="w-8 h-px bg-gray-600 inline-block" />
                        System Design Highlights
                        <span className="w-8 h-px bg-gray-600 inline-block" />
                    </p>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
                    >
                        {architectureHighlights.map((item, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className="group relative p-5 rounded-2xl bg-white/[0.03] dark:bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-300`} />
                                <div className="relative">
                                    <div className={`inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br ${item.color} bg-opacity-20 mb-3 text-white shadow-lg`}>
                                        {item.icon}
                                    </div>
                                    <h4 className="text-sm font-bold text-white mb-2">{item.title}</h4>
                                    <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Agent roster */}
                    <div className="border-t border-white/[0.06] pt-6 mb-6">
                        <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-4">Agent Roster — 9 Specialized Nodes</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                            {agentRoster.map((agent, i) => (
                                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                                    <div>
                                        <p className="text-xs font-bold text-white">{agent.name}</p>
                                        <p className="text-[11px] text-gray-500 mt-0.5">{agent.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tech stack */}
                    <div className="border-t border-white/[0.06] pt-6">
                        <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-4">Technology Stack</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {techStack.map((item, i) => (
                                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                                    <span className="text-xs font-bold text-gray-500 shrink-0 w-24">{item.label}</span>
                                    <span className="text-xs text-gray-300 leading-relaxed">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Engineering decision */}
                    <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-cyan-500/[0.07] to-teal-500/[0.07] border border-cyan-400/[0.15]">
                        <p className="text-xs font-bold tracking-widest uppercase text-cyan-400 mb-2">Key Engineering Decision</p>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            <span className="text-white font-semibold">Why 4 databases instead of 1?</span> — Each is purpose-built for what it does best: Qdrant handles high-dimensional semantic search with BM25 hybrid sparse recall; Neo4j traverses medical ontology paths (disease → drug → interaction) structurally impossible in SQL; Redis provides microsecond session caching + Celery queuing; PostgreSQL stores structured telemetry with full SQL aggregation for dashboards. No single DB does all of this well.
                        </p>
                    </div>
                </div>

                {/* Tags footer */}
                <div className="px-8 pb-8 flex flex-wrap gap-2">
                    {['LangGraph', 'FastAPI', 'Next.js', 'Qdrant', 'Neo4j', 'PostgreSQL', 'Redis', 'LangSmith', 'Docker', 'Python 3.10+', 'TypeScript', 'SSE Streaming', 'BM25 Hybrid RAG', 'Pydantic v2', 'Prometheus', 'Multi-Agent AI', 'HIPAA Guardrails', 'PubMed API'].map(tag => (
                        <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-gray-300 font-medium">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

// ─── Regular Projects ─────────────────────────────────────────────────────────
const Projects = () => {
    const projects = [
        {
            title: 'CreditPathAI',
            description: 'End-to-end Machine Learning system for predicting loan defaults in collaboration with Infosys Springboard. It has shown the highest results in the institution till now, proving its immense data-driven impact.',
            tags: ['Python', 'Machine Learning', 'Streamlit', 'Data Science'],
            url: 'https://github.com/springboardmentor891v/CreditPathAI_Oct_Batch/tree/pavan_doddavarapu',
            color: 'from-emerald-500/20 to-teal-500/20',
            image: '/projects/credit_path_ai.png'
        },
        {
            title: 'Smart Waste Management System',
            description: 'IoT and ML-based solution utilizing LSTM/Prophet models to predict waste patterns. It was proudly presented at the HSC Pre Summit for the AI Impact Summit, India, by the LPU Media Team.',
            tags: ['IoT', 'Machine Learning', 'Python', 'LSTM', 'Prophet'],
            url: 'https://github.com/pavandoddavarapu/smart-waste-management-system',
            color: 'from-purple-500/20 to-pink-500/20',
            image: '/projects/smart_waste_management.png'
        },
        {
            title: 'Food Demand Predictor',
            description: 'Driven by a passion for social good, this interactive machine learning model predicts and forecasts food demand. It has been used by 500 families near LPU to successfully reduce food waste.',
            tags: ['Python', 'Machine Learning', 'Gradio', 'Hugging Face'],
            url: 'https://github.com/pavandoddavarapu/food-demand-predictor',
            color: 'from-blue-500/20 to-yellow-500/20',
            image: '/projects/food_demand_predictor.png'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
    };

    return (
        <PageWrapper className="min-h-screen py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full dark:bg-[#050505] overflow-hidden">

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-20 text-center md:text-left"
            >
                <h2 className="text-sm font-bold tracking-widest uppercase text-blue-500 mb-6 flex items-center justify-center md:justify-start gap-4">
                    <span className="w-12 h-px bg-blue-500"></span>
                    Portfolio
                </h2>

                <h3 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] mb-6 tracking-tight text-gray-900 dark:text-white">
                    Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Works.</span>
                </h3>

                <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light max-w-2xl mx-auto md:mx-0">
                    Production-deployed systems and ML models — featuring async AI pipelines, multi-provider failover, serverless architecture, and data-driven solutions with real-world impact.
                </p>
            </motion.div>

            {/* ─── Featured: Speak Up! ─── */}
            <SpeakUpFeatured />

            {/* ─── Featured: Aegis Clinical AI ─── */}
            <AegisFeatured />

            {/* ─── Section divider ─── */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-12 flex items-center gap-4"
            >
                <span className="w-12 h-px bg-blue-500 inline-block" />
                <h2 className="text-sm font-bold tracking-widest uppercase text-blue-500">More Projects</h2>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {projects.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="group relative flex flex-col h-full rounded-3xl overflow-hidden glass border border-black/5 dark:border-white/5 hover:border-black/10 dark:border-white/20 transition-all duration-500 hover:-translate-y-2 bg-gradient-to-b from-white/[0.03] to-transparent"
                    >
                        {/* Glow Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none`}></div>

                        {item.image && (
                            <div className="relative w-full h-52 bg-black/20 overflow-hidden z-0 border-b border-black/5 dark:border-white/5">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out opacity-80 group-hover:opacity-100" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#f9fafb] dark:from-[#0a0a0a] to-transparent pointer-events-none opacity-80 dark:opacity-90"></div>
                            </div>
                        )}

                        <div className={`relative flex flex-col h-full z-10 ${item.image ? 'p-8 pt-2' : 'p-8'}`}>
                            {!item.image && (
                                <div className="w-14 h-14 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center mb-8 group-hover:bg-black/10 dark:group-hover:bg-white/10 transition-colors">
                                    <Code2 className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" size={28} />
                                </div>
                            )}

                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-block w-fit">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 hover:text-blue-400 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300 flex items-center gap-2 cursor-pointer">
                                    {item.title} <ExternalLink size={20} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                                </h3>
                            </a>

                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 flex-grow font-light">
                                {item.description}
                            </p>

                            <div className="flex gap-2 flex-wrap mb-8 mt-auto">
                                {item.tags.map(tag => (
                                    <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-gray-700 dark:text-gray-300 font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="border-t border-black/5 dark:border-white/10 pt-6">
                                <MagneticButton href={item.url}>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 rounded-full bg-white text-black font-bold text-sm"
                                    >
                                        <Github size={18} /> View Source Code
                                    </motion.div>
                                </MagneticButton>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-20 flex justify-center pb-10"
            >
                <MagneticButton href="https://github.com/pavandoddavarapu">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-gray-900 dark:text-white font-bold hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/10 dark:hover:border-white/20 transition-colors duration-300"
                    >
                        <Github size={20} /> View More on GitHub
                    </motion.div>
                </MagneticButton>
            </motion.div>
        </PageWrapper>
    );
};

export default Projects;
