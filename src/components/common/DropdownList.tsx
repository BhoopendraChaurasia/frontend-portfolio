import { Link } from 'react-router-dom';

export const DropdownList = () => {

    const links = [
        {
            url: "/profile",
            title: "Profile",
        },
        {
            url: "/setting",
            title: "Settings",
        },
        {
            url: "/logout",
            title: "Logout",
        },
    ]

    return (
        <div className="absolute right-0 mt-3 w-40 bg-white border rounded-lg shadow-lg py-2">
            {links.length > 0 && links.map((link, idx) =>
                <Link
                    to={link.url}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                    {link.title}
                </Link>
            )}
        </div>
    )
}