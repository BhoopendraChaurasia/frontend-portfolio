import React, { useState } from "react";

const faqs = [
    {
        question: "What is Studocu AI?",
        answer: `Studocu AI is a free tool that transforms any study material into organized resources ready for review, and creates quizzes to prep you for exams. Upload slides, notes, or recordings and combine them with course–specific docs from Studocu’s library. Use Ask AI for instant help or tailored recommendations and collaborate with classmates for more focused study sessions.`,
    },
    {
        question: "What makes Studocu AI different from other similar study tools?",
        answer: "Answer content for the second question goes here...",
    },
    {
        question: "What types of files and inputs can I upload to Studocu AI?",
        answer: "Answer content for the third question goes here...",
    },
    {
        question: "What AI-powered features are available in Studocu AI?",
        answer: "Answer content for the fourth question goes here...",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-6xl mx-auto p-6 bg-gray-50 rounded-2xl mt-30">
            <h2 className="text-center text-2xl font-bold mb-8 text-gray-700">Frequently Asked Questions</h2>

            <div className="space-y-2">
                {faqs.map((faq, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-4xl border border-gray-300"
                    >
                        {/* Question */}
                        <button
                            onClick={() => toggle(idx)}
                            className="flex justify-between items-center w-full p-4 font-semibold text-gray-900 focus:outline-none"
                        >
                            <span>{faq.question}</span>
                            <svg
                                className={`w-5 h-5 transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""
                                    }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Answer */}
                        <div
                            className={`px-4 p-1 text-gray-700 transition-all duration-300 overflow-hidden ${openIndex === idx ? "max-h-96 pt-0" : "max-h-0 pt-0"
                                }`}
                            style={{ transitionProperty: "max-height, padding" }}
                        >
                            <p className="m-4">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
