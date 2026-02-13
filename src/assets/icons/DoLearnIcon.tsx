export default function DoLearnIcon(){
    return (
        <svg width="30" height="30" viewBox="0 0 200 200">
            <circle cx={100} cy="100" r="90" fill="white" />

            <path d="M100 10 A90 90 0 0 1 190 100" stroke="#4285F4" strokeWidth="20" fill="none" />
            <path d="M190 100 A90 90 0 0 1 100 190" stroke="#84ba93" strokeWidth="20" fill="none" />
            <path d="M100 190 A90 90 0 0 1 10 100" stroke="#FBBC05" strokeWidth="20" fill="none" />
            <path d="M10 100 A90 90 0 0 1 100 10" stroke="#984740" strokeWidth="20" fill="none" />

            <path d="M80 60 Q120 50 120 100 Q120 150 80 140 Z" fill="#4285F4" />

            <polygon points="95,110 105,90 115,110" fill="white" />
        </svg>
    )
}