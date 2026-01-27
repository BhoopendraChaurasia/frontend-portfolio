import { IoCloseSharp } from "react-icons/io5";

const Popover = ({ onUserClick, handleLogout }) => {

    return (
        <>
            <div className="absolute top-18 right-4 w-80 bg-white border border-gray-200 rounded-lg shadow-lg">
                <button onClick={onUserClick} type="button" className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
                    <IoCloseSharp />
                </button>
                <div className="p-3">
                    <a href="#" className="block text-sm font-medium text-gray-900 hover:bg-gray-100 rounded-lg p-2">My Profile</a>
                    <a href="#" onClick={handleLogout} className="block text-sm font-medium text-gray-900 hover:bg-gray-100 rounded-lg p-2">Logout</a>
                </div>
            </div>
        </>
    )
}

export default Popover;