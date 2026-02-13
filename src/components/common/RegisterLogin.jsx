import { useNavigate } from 'react-router-dom';
const RegisterLogin = () => {
    const navigate = useNavigate();
    const handleClick = (url) => {
        navigate(url);
    }
     return (
        <div className="flex items-center gap-4">
            <button
                onClick={() => handleClick("/register")}
                className="px-6 py-2 rounded-lg text-white font-semibold
               bg-gradient-to-r from-purple-500 to-pink-500
               hover:scale-105 transition transform duration-300 shadow-lg"
            >
                Register
            </button>

            <button
                onClick={() => handleClick("/login")}
                className="px-6 py-2 rounded-lg text-white font-semibold
               bg-gradient-to-r from-blue-500 to-cyan-500
               hover:scale-105 transition transform duration-300 shadow-lg"
            >
                Login
            </button>
        </div>
        // <div className="flex items-center gap-4">
        //     <Link
        //         to="/register"
        //         className="px-5 py-2 rounded-full border border-white text-white 
        //        hover:bg-white hover:text-black transition duration-300"
        //     >
        //         Register
        //     </Link>

        //     <Link
        //         to="/login"
        //         className="px-5 py-2 rounded-full bg-white text-black 
        //        hover:bg-gray-200 transition duration-300 shadow-md"
        //     >
        //         Login
        //     </Link>
        // </div>
    )
}

export default RegisterLogin;