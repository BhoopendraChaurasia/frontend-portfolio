import { MdNotifications } from "react-icons/md";

type NotificationProps = {
    badgeCount?: number
}

export const NotificationIcon = ({ badgeCount }: NotificationProps) => {
    return (
        <button className="relative text-gray-600 hover:text-blue-600">
            <MdNotifications className="size-6 text-yellow-100 to text-yellow-500" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                {badgeCount}
            </span>
        </button>
    )
}