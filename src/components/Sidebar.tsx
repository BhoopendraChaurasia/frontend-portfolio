import { FaRegArrowAltCircleLeft, FaUserTie } from "react-icons/fa";
import { TiUserAddOutline } from "react-icons/ti";
import { HiHome } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { FaFolder, FaFolderOpen } from "react-icons/fa6";
import { IoLibrary } from "react-icons/io5";
import { AiFillBuild } from "react-icons/ai";
import { SiAskfm } from "react-icons/si";
import { HiPlus } from "react-icons/hi";
import RegisterLogin from './common/RegisterLogin';
import ProfileView from './common/ProfileView';

export default function Sidebar({ handleSidebar, onUserClick, isLogin }:any) {

    const links = [
        {
            title: 'Home',
            path: '/home',
            icon: <HiHome size={18} className="mt-1" />
        },
        {
            title: 'Galary',
            path: '/galary'
        },
        {
            title: 'My Library',
            path: '/path',
            icon: <IoLibrary size={18} className="mt-1" />
        },
        {
            title: 'AI Notes',
            path: '/ainotes',
            icon: <AiFillBuild size={18} className="mt-1" />
        },
        {
            title: 'Ask AI',
            path: '/home',
            icon: <SiAskfm size={18} className="mt-1" />
        },
        {
            title: 'Recent',
            path: '/home'
        },
        {
            title: 'Courses',
            path: '/courses',
            icon: <FaFolder size={18} className="mt-1" />
        },
        {
            title: 'Studylists',
            path: '/studylists',
            icon: <FaFolderOpen size={18} className="mt-1" />
        }
    ];

    return (
        <aside
            className={`fixed top-0 left-0 z-50 h-screen w-64 bg-gray-100 text-dark
        transform transition-transform-1000
        ${handleSidebar ? "translate-x-0" : "-translate-x-full"}`}
        >
            {/* Top Card (stays fixed at top of sidebar) */}
            <div className="p-4 text-lg font-semibold border-b border-gray-100">
                {/* <h3>Welcome to DoLearn</h3>
                <p className="text-sm font-none my-5 italic ">Sign in to access study resources</p>
                {isLogin ? < ProfileView onUserClick={onUserClick} /> : <RegisterLogin />} */}
                <div className="flex gap-5 items-center">
                    <div className="m-2 p-2 bg-gray-300 rounded-full">
                        <FaUserTie size={24} />
                    </div>
                    <div className="grid">
                        <span>Guest User</span>
                        <div className="flex gap-2 items-center mt-1">
                            <TiUserAddOutline size={18} />
                            <div className="text-xs font-medium text-blue-400">
                                Add your institute
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    type="button"
                    className="mt-5 items-center justify-center flex w-full text-white bg-blue-500 py-2 rounded-full hover:bg-blue-600 transition"
                >
                    <HiPlus className="mt-1" /> Add
                </button>
            </div>

            {/* Scrollable nav area */}
            <div className="h-[calc(100vh-136px)] overflow-y-auto p-4 space-y-2">
                {/* Adjust 136px based on top card height */}
                <div
                    onClick={handleSidebar}
                    className="flex justify-end mb-2 cursor-pointer"
                >
                    <FaRegArrowAltCircleLeft size={20} />
                </div>

                {links.map((link, i) => (
                    <Link
                        key={i}
                        to={link.path}
                        className="block p-2 rounded hover:bg-blue-100 flex gap-2 duration-300 ease-in"
                    >
                        {link.icon}   
                        {link.title}
                    </Link>
                ))}
            </div>
        </aside>
    );
}
