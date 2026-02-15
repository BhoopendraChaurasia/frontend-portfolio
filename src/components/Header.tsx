import ProfileView from './common/ProfileView'
import RegisterLogin from './common/RegisterLogin';
import { IoMenuOutline } from "react-icons/io5";
import NavList from './common/NavList';
import DoLearnLogo from "../assets/icons/DoLearnLogo";
import Search from './common/Search';




const Header = ({ handleSidebar, onUserClick, isLogin, setData }: any) => {

    return (
        <>
            {/* <script src="https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1" type="module"></script> */}
            <nav className="relative bg-gray-800 ">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <IoMenuOutline
                                onClick={handleSidebar}
                                className="text-3xl text-gray-400 m-2 cursor-pointer hover:text-white hover:bg-white/5 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <DoLearnLogo />
                            <NavList />
                            <Search setData={setData} />
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <div className="hidden lg:block">
                                {isLogin ? < ProfileView onUserClick={onUserClick} /> : <RegisterLogin />}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}


export default Header;
