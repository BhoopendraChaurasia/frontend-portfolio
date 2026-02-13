import { FaRegArrowAltCircleLeft, FaUserTie } from "react-icons/fa";
import { TiUserAddOutline } from "react-icons/ti";
import { HiHome } from "react-icons/hi2";

export default function Sidebar({ handleSidebar }) {
    return (
        <aside
            className={`fixed top-0 left-0 z-50 h-screen w-64 bg-gray-100 text-dark
        transform transition-transform duration-300
        ${handleSidebar ? "translate-x-0" : "-translate-x-full"}`}
        >
            {/* Top Card (stays fixed at top of sidebar) */}
            <div className="p-4 text-lg font-semibold border-b border-gray-100">
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
                    className="mt-5 w-full text-white bg-blue-500 py-2 rounded-full hover:bg-blue-600 transition"
                >
                    Default
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

                {Array.from({ length: 30 }).map((_, i) => (
                    <a
                        key={i}
                        href="#/"
                        className="block p-2 rounded hover:bg-blue-100 flex gap-2"
                    >
                        <HiHome size={18} />
                        Item {i + 1}
                    </a>
                ))}
            </div>
        </aside>
    );
}
