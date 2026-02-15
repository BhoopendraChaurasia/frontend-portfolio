import { NavLink, useLocation } from 'react-router-dom';


export default function NavList() {

    const { pathname } = useLocation();

    const links = [{ url: '/', title: 'Home' }, { url: '/about', title: 'About' }, { url: '/course', title: 'Course' }, { url: '/trainer', title: 'Trainer' }];

    return (
        <div className="hidden mt-1 sm:ml-6 sm:block">
            <div className="flex space-x-4">
                {links && links.map(({ url, title }) =>
                    <NavLink
                        key={url}
                        to={url}
                        aria-current="page"
                        className={`rounded-md ${pathname === url && "bg-gray-900"} px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white`}
                    >
                        {title}
                    </NavLink>
                )}
            </div>
        </div>
    )
}