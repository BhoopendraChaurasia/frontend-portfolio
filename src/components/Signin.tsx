import LoginImage from './common/LoginImage';
import Title from './common/Title';
import Input from './common/Input';
import Label from './common/Label';
import Password from './common/Password';
import Button from './common/Button';
import { useState } from 'react';
import axios from 'axios'

export default function Signin() {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleEmail = (e) => {
		setEmail(e.target.value);
	}
	const handlePassword = (e) => {
		setPassword(e.target.value);
	}
	const handleLogin = async (e) => {
		e.preventDefault();
		console.log(email, password);
		try {
			const res = await axios.post("http://localhost:8081/auth/signin", {
				email, password
			});
			if (res.data === "Invalid Credentials") {
				alert(res.data.message);;
			}
			const { token } = res.data;
			localStorage.setItem("token", token);
			console.log("Login Successful");

		} catch (error) {
			console.log(error.message);
		}
	}

	return (
		<>
			<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<LoginImage />
					<Title title="Sign in to your account" />
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form action="#" method="POST" className="space-y-6" onSubmit={handleLogin}>
						<div>
							<Label title="Email address" />
							<Input value={email} onChange={handleEmail} placeholder={"Enter email"} />
						</div>

						<div>
							<div className="flex items-center justify-between">
								<Label title="Password" />
								<div className="text-sm">
									<a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
										Forgot password?
									</a>
								</div>
							</div>
							<div className="mt-2 border-2 rounded-lg">
								<Password value={password} onChange={handlePassword} placeholder={"Enter password"} />
							</div>
						</div>

						<div>
							<Button title="Sign in" />
						</div>
					</form>

					<p className="mt-10 text-center text-sm/6 text-gray-400">
						Not a member?{' '}
						<a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
							Start a 14 day free trial
						</a>
					</p>
				</div>
			</div>
		</>
	)
}

