import Home from '@/pages/Home'
import { Routes, Route, Outlet } from "react-router-dom";
import Popover from "@/components/common/Popover";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Profile from "@/components/Profile";
import { useState } from 'react';
import SignIn from '@/components/SignIn';
import SignUp from '@/components/SignUp';
import About from '@/pages/About';
import Course from '@/pages/Course';
import Trainer from '@/pages/Trainer';
import TrainerSignup from '@/components/TrainerSignup';
import TrainerProfile from '@/components/TrainerProfile';
import Sidebar from '@/components/Sidebar';

export default function MainLayout() {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showPopover, setShowPopover] = useState(false);

    const handleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    }
    const handleUserClick = () => {
        setShowPopover(prev => !prev);
    };

    const [isLogin, setIsLogin] = useState(false);
    if (localStorage.getItem("token") && !isLogin) {
        console.log("Token found ", localStorage.getItem("token"));
        setIsLogin(true);
    }

    const handleLogout = () => {
        setShowPopover(prev => !prev);
        return localStorage.clear();
    }

    const trainerData = {
        name: "John Doe",
        email: "john@example.com",
        phone: "+123456789",
        expertise: "Full Stack Development",
        experience: 5,
        avatar: "https://i.pravatar.cc/300?img=5",
        socialLinks: {
            linkedin: "https://linkedin.com/in/johndoe",
            twitter: "https://twitter.com/johndoe",
        },
        bio: "John is a passionate developer and trainer who loves teaching students real-world coding skills.",
        courses: [
            { title: "React Basics", description: "Learn React from scratch", rating: 5 },
            { title: "Node.js API", description: "Build backend APIs", rating: 4 },
            { title: "Full Stack Bootcamp", description: "Complete full stack course", rating: 5 },
        ],
    };
    return (
        <>
            <main className="flex-1 bg-gray-100">
                {sidebarOpen && <Sidebar handleSidebar={handleSidebar} />}
                <Header handleSidebar={handleSidebar} onUserClick={handleUserClick} isLogin={isLogin} />
                {showPopover && <Popover onUserClick={handleUserClick} handleLogout={handleLogout} />}
                {isLogin && <Profile />}
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="/course" element={<Course />} />
                    <Route path="/trainer" element={<Trainer />} />
                    <Route path="/register" element={<SignUp />} />
                    <Route path="/login" element={<SignIn />} />
                    <Route path="/add" element={<TrainerSignup />} />
                    <Route path="/trainer-profile" element={<TrainerProfile trainer={trainerData} />} />
                </Routes>
                <Footer />
            </main>
        </>
    )
};