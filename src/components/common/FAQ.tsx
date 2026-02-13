import React, { useState } from "react";

const faqs = [
    {
        question: "What is DoLearn?",
        answer: `DoLearn AI is a free tool that transforms any study material into organized resources ready for review, and creates quizzes to prep you for exams. Upload slides, notes, or recordings and combine them with course–specific docs from Studocu’s library. Use Ask AI for instant help or tailored recommendations and collaborate with classmates for more focused study sessions.`,
    },
    {
        question: "What makes DoLearn AI different from other similar study tools?",
        answer: "Answer content for the second question goes here...",
    },
    {
        question: "What types of files and inputs can I upload to DoLearn AI?",
        answer: "Answer content for the third question goes here...",
    },
    {
        question: "What AI-powered features are available in DoLearn AI?",
        answer: "Answer content for the fourth question goes here...",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16 bg-gray-50 rounded-2xl">

            <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-700">
                Frequently Asked Questions
            </h2>

            <div className="space-y-3">
                {faqs.map((faq, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-2xl border border-gray-200 shadow-sm"
                    >
                        {/* Question */}
                        <button
                            onClick={() => toggle(idx)}
                            className="flex justify-between items-center w-full p-4 sm:p-5 text-left font-semibold text-gray-900"
                        >
                            <span className="text-sm sm:text-base md:text-lg">
                                {faq.question}
                            </span>

                            <svg
                                className={`w-5 h-5 transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""
                                    }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                        {/* Answer */}
                        <div
                            className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <p className="px-4 sm:px-5 pb-4 text-sm sm:text-base text-gray-600">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}
