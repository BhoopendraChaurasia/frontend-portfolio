import { HashRouter, Routes, Route, Router } from "react-router-dom";
// import Popover from "./components/common/Popover";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Profile from "./components/Profile";
// import { useState } from 'react';

import Home from './pages/Home';
import About from './pages/About';
import Course from './pages/Course';
import Trainer from './pages/Trainer';
import TrainerSignup from './components/TrainerSignup';
import TrainerProfile from './components/TrainerProfile';
import MainLayout from './components/layouts/MainLayout.tsx';
import AuthLayout from '@/components/layouts/AuthLayout.tsx';
import AdminLayout from './components/layouts/AdminLayout.tsx';
import HomePage from '@/admin/HomePage';
import SignIn from '@/components/SignIn';
import SignUp from './components/SignUp';
import TrainerSignUp from './components/TrainerSignup';

function App() {
  
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
      <HashRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="course" element={<Course />} />
            <Route path="trainer" element={<Trainer />}>
              <Route path="trainer-profile" element={<TrainerProfile trainer={trainerData} />}/>
              <Route path="register" element={<TrainerSignup />} />
            </Route>
            <Route path="add" element={<TrainerSignUp />} />
            <Route element={<AuthLayout />}>
              <Route path="register" element={<SignUp />} />
              <Route path="login" element={<SignIn />} />
            </Route>
          </Route>
          {/* ============ admin layout start ============== */}
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<HomePage />} />
            <Route path="register" element={<SignUp />} />
            <Route path="login" element={<SignIn />} />
          </Route>
          <Route path="/*" />
          {/* ============ admin section ends ============== */}
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;