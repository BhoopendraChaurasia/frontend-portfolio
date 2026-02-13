import LoginImage from './common/LoginImage';
import Title from './common/Title';
import Input from './common/Input';
import Label from './common/Label';
import Password from './common/Password';
import Button from './common/Button';
import axios from 'axios';
import { useState, useEffect } from 'react'

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name, email, password);
        try {
            const res = await axios.post("http://localhost:8081/auth/signup", {
                name, email, password
            });
            console.log(res.data)
            alert("Data submitted");
        } catch (error) {
            console.log(error.message);
        }
    }


    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <LoginImage />
                    <Title title="Sign up to your account" />
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <Label title="Name" />
                            <Input value={name} onChange={handleName} placeholder={"Enter name"} />
                        </div>
                        <div>
                            <Label title="Email address" />
                            <Input value={email} onChange={handleEmail} placeholder={"Enter email"} />
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <Label title="Password" />
                            </div>
                            <div className="mt-2 border-2 rounded-lg">
                                <Password value={password} onChange={handlePassword} placeholder={"Enter password"} />
                            </div>
                        </div>

                        <div>
                            <Button title="Sign up" handler={handleSubmit} />
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
    );
}




