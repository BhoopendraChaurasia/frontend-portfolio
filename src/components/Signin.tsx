import LoginImage from './common/LoginImage';
import Title from './common/Title';
import Input from './common/Input';
import Label from './common/Label';
import Password from './common/Password';
import Button from './common/Button';
import { useState } from 'react';
import axios from 'axios'
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

import { useNavigate } from 'react-router-dom';
export default function Signin() {
	const navigate = useNavigate();
	const handleClick = (url) => {
		navigate(url);
	}

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const handleChange = async (e: any) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();

		console.log("Signup Data:", formData);
	};
	// const handleLogin = async (e) => {
	// 	e.preventDefault();
	// 	console.log(email, password);
	// 	try {
	// 		const res = await axios.post("http://localhost:8081/auth/signin", {
	// 			email, password
	// 		});
	// 		if (res.data === "Invalid Credentials") {
	// 			alert(res.data.message);;
	// 		}
	// 		const { token } = res.data;
	// 		localStorage.setItem("token", token);
	// 		console.log("Login Successful");

	// 	} catch (error) {
	// 		console.log(error.message);
	// 	}
	// }

	return (
		<>
			<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600 px-4">
				<div className="bg-white p-8 my-15 rounded-2xl shadow-2xl w-full max-w-md">
					<div onClick={() => handleClick("/")} className="float-right rounded">
						<IoCloseSharp />
					</div>
					{/* Header */}
					<h2 className="text-3xl font-bold text-center text-gray-800">
						Sign In Account
					</h2>
					<p className="text-center text-gray-500 mb-6">
						Join us and start your journey 🚀
					</p>

					{/* Social Login */}
					<div className="space-y-3">
						<button className="w-full flex items-center justify-center gap-3 border rounded-lg py-2 hover:bg-gray-100 transition">
							<FaGoogle className="text-red-500" />
							<span className="font-medium">Continue with Google</span>
						</button>

						<button className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-500 transition">
							<FaFacebookF />
							<span className="font-medium">Continue with Facebook</span>
						</button>
					</div>

					{/* Divider */}
					<div className="flex items-center my-6">
						<div className="flex-grow h-px bg-gray-300"></div>
						<span className="px-3 text-gray-400 text-sm">OR</span>
						<div className="flex-grow h-px bg-gray-300"></div>
					</div>

					{/* Form */}
					<form onSubmit={handleSubmit} className="space-y-4">


						<input
							type="email"
							name="email"
							placeholder="Email Address"
							value={formData.email}
							onChange={handleChange}
							required
							className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
						/>

						<input
							type="password"
							name="password"
							placeholder="Password"
							value={formData.password}
							onChange={handleChange}
							required
							className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
						/>

						<button
							type="submit"
							className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-500 transition shadow-md"
						>
							Sign In
						</button>
					</form>

					{/* Footer */}
					<p className="text-sm text-center text-gray-600 mt-6">
						Doesn't have an account?{" "}
						<span onClick={() => handleClick("/register")} className="text-indigo-600 hover:underline cursor-pointer">
							Register
						</span>

					</p>
				</div>
			</div>
		</>
	)
}

