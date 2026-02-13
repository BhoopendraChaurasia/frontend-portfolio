import { useState } from "react";
import axios from "axios";
import { FaUserAlt, FaEnvelope, FaLock, FaChalkboardTeacher, FaCalendarAlt } from "react-icons/fa";
import Label from "./common/Label";
import Button from "./common/Button";
import Title from "./common/Title";
import DoLearnLogo from "../assets/icons/DoLearnLogo";

export default function TrainerSignup() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        expertise: "",
        experience: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            console.log(formData)
            await axios.post("http://localhost:3002/trainer", {
                ...formData,
                experience: Number(formData.experience)
            });

            setFormData({
                name: "",
                email: "",
                password: "",
                expertise: "",
                experience: ""
            });

            alert("Trainer account created successfully!");
        } catch (error) {
            console.error(error);
            alert("Something went wrong!");
        }
    };



    return (
        <div className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black px-6 py-12">

            <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
                <div className="w-16 mx-auto mb-4 text-white">
                    <DoLearnLogo />
                </div>
                <Title title="Trainer Registration" />
                <p className="mt-2 text-gray-400 text-lg">
                    Join our platform and start training students with your expertise.
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md bg-gray-800 rounded-2xl shadow-2xl p-8 border-t-4 border-purple-500">
                <form className="space-y-4" onSubmit={handleSubmit}>

                    <Label title="Full Name" />
                    <input name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-800 text-white 
                 border border-gray-600 focus:outline-none 
                 focus:ring-2 focus:ring-purple-500 
                 focus:border-transparent transition duration-300" />

                    <Label title="Email Address" />
                    <input name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" type="email" className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-800 text-white 
                 border border-gray-600 focus:outline-none 
                 focus:ring-2 focus:ring-purple-500 
                 focus:border-transparent transition duration-300" />

                    <Label title="Password" />
                    <input name="password" value={formData.password} onChange={handleChange} placeholder="Enter password" type="password" className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-800 text-white 
                 border border-gray-600 focus:outline-none 
                 focus:ring-2 focus:ring-purple-500 
                 focus:border-transparent transition duration-300" />

                    <Label title="Expertise" />
                    <input name="expertise" value={formData.expertise} onChange={handleChange} placeholder="E.g., Full Stack Development" className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-800 text-white 
                 border border-gray-600 focus:outline-none 
                 focus:ring-2 focus:ring-purple-500 
                 focus:border-transparent transition duration-300" />

                    <Label title="Experience (years)" />
                    <input name="experience" value={formData.experience} onChange={handleChange} placeholder="Enter number of years" type="number" className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-800 text-white 
                 border border-gray-600 focus:outline-none 
                 focus:ring-2 focus:ring-purple-500 
                 focus:border-transparent transition duration-300" />

                    {/* IMPORTANT: type="submit" only */}
                    <Button
                        title="Register as Trainer"
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 text-white font-semibold hover:scale-105 transform transition rounded-lg py-3 shadow-lg mt-2"
                    />
                </form>

                <p className="mt-5 text-center text-sm text-gray-400">
                    Already registered?{" "}
                    <a href="/login" className="font-semibold text-purple-400 hover:text-purple-300 transition">
                        Log in here
                    </a>
                </p>
            </div>
        </div>
    );
}
