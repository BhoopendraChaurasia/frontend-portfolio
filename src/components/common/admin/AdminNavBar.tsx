import { useState } from "react";
import { MdDarkMode, MdOutlineDarkMode, MdNotifications } from "react-icons/md";
import { IoMenuOutline } from "react-icons/io5";
import { DropdownList } from "../DropDownList";
import { NotificationIcon } from "../NotificationIcon";
import { SearchBar } from '../SearchBar';
import DoLearnLogo from '../../../assets/icons/DoLearnLogo'
export default function AdminNavbar({ handleSidebar }) {
    const [open, setOpen] = useState(false);
    const [theme, setTheme] = useState(false);

    const handleTheme = () => {
        setTheme(!theme);
    };
    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <nav className= "bg-white shadow-md px-6 py-3 flex items-center justify-between" >

        {/* Left Section */ }
        < div className = "flex items-center gap-4" >
            <IoMenuOutline onClick={ handleSidebar } size = { 24} className = "hover:text-gray-800 hover:bg-gray-300 rounded" />
                <DoLearnLogo />
                < SearchBar />
                </div>

    {/* Right Section */ }
    <div className="flex items-center gap-6 relative" >
        {/* change theme icon */ }
    { theme ? <MdDarkMode size={ 20 } onClick = { handleTheme } /> : <MdOutlineDarkMode size={ 20 } onClick = { handleTheme } />}
    {/* Notification */ }
    <NotificationIcon badgeCount={ 5 } />
    {/* Profile */ }
    <div className="relative" >
        <button
                        onClick={ handleOpen }
    className = "flex items-center gap-2 focus:outline-none"
        >
        <img
                            src="https://i.pravatar.cc/40"
    alt = "profile"
    className = "w-9 h-9 rounded-full border"
        />
        <span className="hidden md:block text-gray-700 font-medium" >
            Admin
            </span>
            </button>
    { open && <DropdownList /> }
    </div>
        </div>
        </nav>
    );
}
