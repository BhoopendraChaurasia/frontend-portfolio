import { useEffect } from 'react';

export default function Search({setData}: any) {
    
    // useEffect(() => {
    //     if (!search) return;

    //     const timeout = setTimeout(() => {
    //         console.log("Searching:", search);
    //     }, 100);

    //     return () => clearTimeout(timeout);
    // }, [search]);

    return (
        <>
            <input
                id="email"
                type="email"
                onChange={(e) => setData(e.target.value)}
                name="email"
                className="block w-64  rounded-full ml-10 bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
        </>
    )
}