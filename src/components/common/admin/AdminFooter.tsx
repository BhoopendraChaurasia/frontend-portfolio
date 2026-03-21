const AdminFooter = () => {
    return (
        <footer className="w-full border-t bg-white dark:bg-gray-900 dark:border-gray-800">
            <div className="flex flex-col sm:flex-row items-center justify-center px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                <p>
                    © {new Date().getFullYear()} Your Company. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default AdminFooter;
