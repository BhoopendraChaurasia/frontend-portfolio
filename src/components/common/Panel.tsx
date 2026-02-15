export default function Panel({ onShow, idx, isActive, faq, children }: any) {
    return (
        <div
            key={idx}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm"
        >
            {/* Question */}
            <button
                onClick={() => onShow(idx)}
                className="flex justify-between items-center w-full p-4 sm:p-5 text-left font-semibold text-gray-900"
            >
                <span className="text-sm sm:text-base md:text-lg">
                    {faq.question}
                </span>

                <svg
                    className={`w-5 h-5 transition-transform duration-300 ${isActive === idx ? "rotate-180" : ""
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
                className={`overflow-hidden transition-all duration-300 ${isActive === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <p className="px-4 sm:px-5 pb-4 text-sm sm:text-base text-gray-600">
                    { faq.answer }
                </p>
            </div>
        </div>
    );
}