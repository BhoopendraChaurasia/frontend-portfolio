import { useState } from "react";
import { FaUserAlt, FaEnvelope, FaLock, FaChalkboardTeacher, FaCalendarAlt } from "react-icons/fa";
import Label from "./coomon/Label";
import Password from "./coomon/Password";
import Button from "./coomon/Button";
import Title from "./coomon/Title";
import LoginImage from "./coomon/LoginImage";
import axios from "axios";

export default function TrainerSignup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [expertise, setExpertise] = useState("");
    const [experience, setExperience] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8081/auth/trainer/signup", {
                name, email, password, expertise, experience
            });
            alert("Trainer account created successfully!");
        } catch (error) {
            alert("Something went wrong!");
        }
    };

    // Self-contained Input component
    const FancyInput = ({ value, onChange, placeholder, icon: Icon, type = "text" }) => (
        <div className="flex items-center border-2 border-gray-600 rounded-lg p-2 focus-within:border-purple-500 transition shadow-sm hover:shadow-md mt-1">
            <div className="bg-gray-700 p-2 rounded-full mr-2 flex items-center justify-center text-gray-300">
                <Icon />
            </div>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required
                className="bg-gray-800 text-white w-full rounded-md px-3 py-2 focus:outline-none"
            />
        </div>
    );

    return (
        <div className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black px-6 py-12">

            {/* Top Logo Section */}
            <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
                <div className="w-16 h-16  bg-gradient-to-r from-green-200 to-purple-500 rounded-full mx-auto flex items-center justify-center text-2xl font-bold animate-pulse text-white mb-4 shadow-lg">
                    <LoginImage />
                </div>
                <Title title="Trainer Registration" />
                <p className="mt-2 text-gray-400 text-lg">
                    Join our platform and start training students with your expertise.
                </p>

            </div>

            {/* Form Section */}
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md bg-gray-800 rounded-2xl shadow-2xl p-8 border-t-4 border-purple-500">
                <form className="space-y-4" onSubmit={handleSubmit}>

                    <div>
                        <Label title="Full Name" />
                        <FancyInput value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" icon={FaUserAlt} />
                    </div>

                    <div>
                        <Label title="Email Address" />
                        <FancyInput value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" icon={FaEnvelope} type="email" />
                    </div>

                    <div>
                        <Label title="Password" />
                        <FancyInput value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" icon={FaLock} type="password" />
                    </div>

                    <div>
                        <Label title="Expertise" />
                        <FancyInput value={expertise} onChange={(e) => setExpertise(e.target.value)} placeholder="E.g., Full Stack Development" icon={FaChalkboardTeacher} />
                    </div>

                    <div>
                        <Label title="Experience (years)" />
                        <FancyInput value={experience} onChange={(e) => setExperience(e.target.value)} placeholder="Enter number of years" icon={FaCalendarAlt} type="number" />
                    </div>

                    <Button
                        title="Register as Trainer"
                        handler={handleSubmit}
                        className="w-full bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 text-white font-semibold hover:scale-105 transform transition rounded-lg py-3 shadow-lg mt-2"
                    />
                </form>

                <p className="mt-5 text-center text-sm text-gray-400">
                    Already registered?{' '}
                    <a href="/login" className="font-semibold text-purple-400 hover:text-purple-300 transition">
                        Log in here
                    </a>
                </p>
            </div>

            <div className="mt-10 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Student Trainer System. All rights reserved.
            </div>
        </div>
    );
}
