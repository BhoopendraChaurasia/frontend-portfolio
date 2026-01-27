import { Link } from 'react-router-dom';

const ProfileView = ({ onUserClick }) => {
    return (
        <el-dropdown className="relative ml-3">
            <button onClick={onUserClick} className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">Open user menu</span>
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10" />
            </button>

            <el-menu anchor="bottom end" popover className="w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden">Your profile</Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden">Settings</Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden">Sign out</Link>
            </el-menu>
        </el-dropdown>
    )
}

export default ProfileView;