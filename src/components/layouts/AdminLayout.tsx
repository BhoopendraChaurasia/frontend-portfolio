import { Outlet } from "react-router-dom";
import AdminNavbar from '../common/admin/AdminNavbar'
import AdminFooter from '../common/admin/AdminFooter';
import Sidebar from '../common/admin/Sidebar';
import { useState } from 'react';

export default function AdminLayout() {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);
    const handleSidebar = () => {
        setIsOpenSidebar(!isOpenSidebar);
    }
    return (
        <div>
        { isOpenSidebar && <Sidebar />}
<AdminNavbar handleSidebar={ handleSidebar } />
    < Outlet />
    <AdminFooter />
    </div>
    )
}