import React, { useState } from 'react';
import axios from 'axios';
import { 
    ArrowRight, 
    CheckCircle2, 
    RotateCcw, 
    ChevronLeft, 
    Sparkles, 
    Compass, 
    Calendar, 
    Target, 
    ShieldCheck, 
    ArrowUpRight 
} from 'lucide-react';

const assessmentQuestions = [
    {
        key: 'primary_concern',
        title: 'What is your primary area of focus?',
        subtitle: 'Select the area where you desire the most impact right now.',
        icon: Target,
        options: [
            { label: 'Managing Stress & Anxiety', desc: 'Regain dynamic calm and inner emotional stability.' },
            { label: 'Navigating Relationship Issues', desc: 'Build deeper connection, trust, and boundaries.' },
            { label: 'Career & Life Transitions', desc: 'Gain clarity and confidence for your next milestone.' },
            { label: 'Personal Growth & Mindset', desc: 'Unlock continuous self-mastery and dynamic resilience.' },
        ],
    },
    {
        key: 'preferred_format',
        title: 'How do you prefer to receive support?',
        subtitle: 'Choose the format that aligns best with your schedule and style.',
        icon: Compass,
        options: [
            { label: '1-on-1 Dedicated Coaching', desc: 'Direct, tailored dynamic guidance with a senior practitioner.' },
            { label: 'Structured Self-Paced Modules', desc: 'Flexible video coursework and downloadable toolkits.' },
            { label: 'Group Support & Community', desc: 'Peer accountability paired with expert instruction.' },
            { label: 'Flexible Hybrid Approach', desc: 'A blended blend of self-study and high-touch strategy calls.' },
        ],
    },
    {
        key: 'urgency',
        title: 'When would you like to begin?',
        subtitle: 'Help us calibrate immediate capacity and scheduling.',
        icon: Calendar,
        options: [
            { label: 'Immediately (This week)', desc: 'Fast-track onboarding and priority booking slot.' },
            { label: 'In the next 2-3 weeks', desc: 'Planning ahead to integrate care into your routine.' },
            { label: 'Just exploring options', desc: 'Gathering recommendations for upcoming decisions.' },
        ],
    },
];

export default function PremiumCareAssessment() {
    const [assessmentStep, setAssessmentStep] = useState(0);
    const [answers, setAnswers] = useState({});

    const currentQuestion = assessmentQuestions[assessmentStep];
    const CurrentIcon = currentQuestion?.icon;

    const handleOptionSelect = (optionLabel) => {
        const currentKey = currentQuestion.key;
        const nextAnswers = {
            ...answers,
            [currentKey]: optionLabel,
        };
        setAnswers((prev) => ({
            ...prev,
            [currentKey]: optionLabel,
        }));
        if (assessmentStep === assessmentQuestions.length - 1) {
            axios.post(`${process.env.REACT_APP_URL || 'https://psychobeings.onrender.com'}/admin-inbox/assessments`, nextAnswers)
                .catch((error) => console.error('Assessment save error:', error));
        }
        setAssessmentStep((prev) => prev + 1);
    };

    const handleBack = () => {
        if (assessmentStep > 0) {
            setAssessmentStep((prev) => prev - 1);
        }
    };

    const handleReset = () => {
        setAssessmentStep(0);
        setAnswers({});
    };

    const progressPercentage = Math.round(
        (assessmentStep / assessmentQuestions.length) * 100
    );

    return (
        <section className="relative overflow-hidden bg-[#031919] py-24 text-slate-100 antialiased">
            {/* Ambient Background Aura */}
            <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-emerald-500/10 blur-[140px]" />
            <div className="pointer-events-none absolute top-1/2 -left-48 h-96 w-96 rounded-full bg-teal-500/10 blur-[120px]" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-600/10 blur-[120px]" />

            {/* Micro Grid Layer Overlay */}
            <div 
                className="pointer-events-none absolute inset-0 opacity-[0.03]" 
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                    backgroundSize: '24px 24px'
                }}
            />

            <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto mb-12 max-w-xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur-md shadow-inner">
                        <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                        <span>Interactive Matchmaker</span>
                    </div>
                    <h2 className="mt-4 font-serif text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                        Discover Your Route
                    </h2>
                    <p className="mt-3 text-base text-emerald-100/70 sm:text-lg">
                        Complete a 60-second assessment to map your tailored wellness pathway.
                    </p>
                </div>

                {/* Main Card Container */}
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-12 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    {/* Top Glow Edge Line */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

                    {assessmentStep < assessmentQuestions.length ? (
                        <div className="transition-all duration-300 ease-in-out">
                            {/* Header Navigation & Progress Indicator */}
                            <div className="mb-6 flex items-center justify-between border-b border-white/5 pb-4">
                                <div className="flex items-center gap-3">
                                    {assessmentStep > 0 && (
                                        <button
                                            onClick={handleBack}
                                            className="group flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-emerald-200 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                                        >
                                            <ChevronLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
                                            Back
                                        </button>
                                    )}
                                    <span className="flex items-center gap-2 text-xs font-medium tracking-wide text-emerald-400/90">
                                        <CurrentIcon className="h-4 w-4" />
                                        Step {assessmentStep + 1} of {assessmentQuestions.length}
                                    </span>
                                </div>
                                <span className="font-mono text-xs font-semibold text-emerald-300">
                                    {progressPercentage}%
                                </span>
                            </div>

                            {/* Minimal Segmented Progress Bar */}
                            <div className="mb-8 flex gap-2">
                                {assessmentQuestions.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                                            idx <= assessmentStep
                                                ? 'bg-gradient-to-r from-emerald-400 to-teal-300 shadow-[0_0_10px_rgba(52,211,153,0.5)]'
                                                : 'bg-white/10'
                                        }`}
                                    />
                                ))}
                            </div>

                            {/* Question Section Header */}
                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                                    {currentQuestion.title}
                                </h3>
                                <p className="mt-2 text-sm text-slate-300/80">
                                    {currentQuestion.subtitle}
                                </p>
                            </div>

                            {/* Options List / Grid */}
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                {currentQuestion.options.map((opt, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleOptionSelect(opt.label)}
                                        className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left transition-all duration-300 hover:scale-[1.01] hover:border-emerald-400/50 hover:bg-white/[0.08] hover:shadow-xl hover:shadow-emerald-950/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
                                    >
                                        <div className="flex items-start justify-between">
                                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-500/10 font-mono text-xs font-bold text-emerald-300 group-hover:border-emerald-400/40 group-hover:bg-emerald-400 group-hover:text-slate-950 transition-colors">
                                                0{idx + 1}
                                            </span>
                                            <ArrowUpRight className="h-4 w-4 text-emerald-400 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                                        </div>
                                        <div className="mt-4">
                                            <span className="block text-base font-semibold text-white group-hover:text-emerald-200">
                                                {opt.label}
                                            </span>
                                            <span className="mt-1 block text-xs leading-relaxed text-slate-400">
                                                {opt.desc}
                                            </span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        /* Results Dashboard */
                        <div className="py-2">
                            {/* Recommended Route Card */}
                            <div className="relative rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-emerald-500/10 to-transparent p-6 sm:p-8 backdrop-blur-md">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-400/20">
                                        <CheckCircle2 className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                                            Tailored Recommendation
                                        </span>
                                        <p className="text-xs text-slate-400">Matched to your specific input parameters</p>
                                    </div>
                                </div>

                                <h3 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
                                    {answers.preferred_format || '1-on-1 Dedicated Coaching'}
                                </h3>

                                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300">
                                    {answers.primary_concern 
                                        ? `Designed to address ${answers.primary_concern.toLowerCase()} systematically. Your customized roadmap provides guided execution, direct feedback loops, and structured progress tracking.`
                                        : 'A targeted, personalized program designed around your exact current objectives.'}
                                </p>

                                {/* Active Selection Summary Chips */}
                                <div className="mt-6 border-t border-white/10 pt-6">
                                    <span className="block text-xs font-medium uppercase tracking-wider text-slate-400">
                                        Your Selected Criteria:
                                    </span>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {Object.entries(answers).map(([key, val], i) => (
                                            <div key={i} className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-emerald-200">
                                                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                                                <span>{val}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* CTA Action Panel */}
                            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <button
                                    onClick={handleReset}
                                    className="order-2 sm:order-1 inline-flex items-center gap-2 rounded-xl px-4 py-3 text-xs font-semibold text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
                                >
                                    <RotateCcw className="h-3.5 w-3.5" />
                                    Retake Assessment
                                </button>
                                
                                <a
                                    href="/booking?service=recommended"
                                    className="order-1 sm:order-2 w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-300 px-8 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02] hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                >
                                    Book Recommended Session
                                    <ArrowRight className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}