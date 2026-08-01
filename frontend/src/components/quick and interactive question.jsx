import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, RotateCcw, ChevronLeft, Sparkles } from 'lucide-react';

const assessmentQuestions = [
    {
        key: 'primary_concern',
        title: 'What is your primary area of concern right now?',
        options: [
            { label: 'Managing Stress & Anxiety' },
            { label: 'Navigating Relationship Issues' },
            { label: 'Career & Life Transitions' },
            { label: 'Personal Growth & Mindset' },
        ],
    },
    {
        key: 'preferred_format',
        title: 'How do you prefer to receive support?',
        options: [
            { label: '1-on-1 Dedicated Coaching' },
            { label: 'Structured Self-Paced Modules' },
            { label: 'Group Support & Community' },
            { label: 'Flexible Hybrid Approach' },
        ],
    },
    {
        key: 'urgency',
        title: 'How soon are you looking to get started?',
        options: [
            { label: 'Immediately (This week)' },
            { label: 'In the next 2-3 weeks' },
            { label: 'Just exploring options' },
        ],
    },
];

export default function CareAssessment() {
    const [assessmentStep, setAssessmentStep] = useState(0);
    const [answers, setAnswers] = useState({});

    const handleOptionSelect = (optionLabel) => {
        const currentKey = assessmentQuestions[assessmentStep].key;
        setAnswers((prev) => ({
            ...prev,
            [currentKey]: optionLabel,
        }));
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
        ((assessmentStep) / assessmentQuestions.length) * 100
    );

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#063b3b] via-[#084e4e] to-[#0a7272] py-20 text-white">
            {/* Ambient Lighting FX */}
            <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#6ee7b7]/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#0a7272]/30 blur-3xl" />

            <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="mb-10 text-center">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#6ee7b7]/30 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#a7f3d0] backdrop-blur-md">
                        <Sparkles className="h-3.5 w-3.5 text-[#6ee7b7]" />
                        Interactive Assessment
                    </span>
                    <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Not sure where to begin?
                    </h2>
                    <p className="mt-2 text-base text-[#d1fae5]/80">
                        Answer 3 quick questions to discover your personalized care route.
                    </p>
                </div>

                {/* Assessment Glass Card */}
                <div className="relative rounded-3xl border border-white/20 bg-white/10 p-6 sm:p-10 backdrop-blur-xl shadow-2xl transition-all">
                    {assessmentStep < assessmentQuestions.length ? (
                        <div>
                            {/* Question Header Nav & Progress Percentage */}
                            <div className="mb-3 flex items-center justify-between text-xs font-semibold text-[#a7f3d0]">
                                <div className="flex items-center gap-2">
                                    {assessmentStep > 0 && (
                                        <button
                                            onClick={handleBack}
                                            className="flex items-center gap-1 text-[#d1fae5] hover:text-white transition-colors cursor-pointer mr-2"
                                        >
                                            <ChevronLeft className="h-4 w-4" />
                                            Back
                                        </button>
                                    )}
                                    <span>
                                        Step {assessmentStep + 1} of {assessmentQuestions.length}
                                    </span>
                                </div>
                                <span>{progressPercentage}% Completed</span>
                            </div>

                            {/* Animated Progress Bar */}
                            <div className="mb-8 h-2 w-full overflow-hidden rounded-full bg-black/25 p-0.5">
                                <div
                                    className="h-full rounded-full bg-gradient-to-r from-[#34d399] to-[#6ee7b7] transition-all duration-500 ease-out shadow-[0_0_12px_rgba(110,231,183,0.5)]"
                                    style={{
                                        width: `${Math.max(progressPercentage, 10)}%`,
                                    }}
                                />
                            </div>

                            {/* Question Title */}
                            <h3 className="mb-6 text-xl font-semibold text-white sm:text-2xl">
                                {assessmentQuestions[assessmentStep].title}
                            </h3>

                            {/* Options Grid */}
                            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                                {assessmentQuestions[assessmentStep].options.map((opt, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleOptionSelect(opt.label)}
                                        className="group relative flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 p-4 sm:p-5 text-left text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/15 hover:shadow-lg cursor-pointer"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10 text-xs font-semibold text-[#a7f3d0] group-hover:bg-[#6ee7b7] group-hover:text-[#084e4e] transition-colors">
                                                0{idx + 1}
                                            </span>
                                            <span className="leading-snug">{opt.label}</span>
                                        </div>
                                        <ArrowRight className="h-4 w-4 shrink-0 text-[#6ee7b7] opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        /* Results Screen */
                        <div className="py-4 text-center">
                            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#34d399]/20 text-[#6ee7b7] ring-8 ring-[#34d399]/10">
                                <CheckCircle2 className="h-10 w-10" />
                            </div>

                            <span className="text-xs font-semibold uppercase tracking-widest text-[#a7f3d0]">
                                Your Recommended Path
                            </span>
                            
                            <h3 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                                {answers.preferred_format ? answers.preferred_format : '1-on-1 Dedicated Coaching'}
                            </h3>

                            <p className="mx-auto mt-3 max-w-lg text-sm sm:text-base leading-relaxed text-[#d1fae5]/90">
                                {answers.primary_concern 
                                    ? `To help with ${answers.primary_concern.toLowerCase()}, starting with a personalized plan will give you direct, actionable strategies tailored to your needs.`
                                    : 'Based on your preferences, starting with a 1-on-1 consultation with one of our specialists will give you tailored strategies right away.'}
                            </p>

                            {/* User Selection Summary */}
                            <div className="my-6 rounded-2xl border border-white/10 bg-black/20 p-4 text-left">
                                <span className="text-xs font-medium text-[#a7f3d0]/80 uppercase tracking-wider block mb-2">
                                    Summary of your selections:
                                </span>
                                <div className="flex flex-wrap gap-2 text-xs">
                                    {Object.values(answers).map((val, i) => (
                                        <span key={i} className="rounded-md bg-white/10 px-2.5 py-1 text-white">
                                            ✓ {val}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Call to Actions */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                                <a
                                    href="/booking?service=recommended"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#0a7272] shadow-lg hover:bg-[#ecfdf5] transition-all hover:scale-[1.02]"
                                >
                                    Book Recommended Session
                                    <ArrowRight className="h-4 w-4" />
                                </a>
                                <button
                                    onClick={handleReset}
                                    className="inline-flex items-center gap-1.5 text-xs text-[#a7f3d0] hover:text-white transition-colors cursor-pointer py-2"
                                >
                                    <RotateCcw className="h-3.5 w-3.5" />
                                    Retake Assessment
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}