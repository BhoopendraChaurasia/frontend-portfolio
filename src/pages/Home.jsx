import { Link } from "react-router-dom";
import { FaChalkboardTeacher, FaGraduationCap, FaChartLine } from "react-icons/fa";

const Home = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen">

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 relative">
                <div className="max-w-7xl mx-auto px-6 py-32 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        Empower Students. Support Trainers. Achieve Success.
                    </h1>
                    <p className="text-gray-200 mb-8 max-w-2xl">
                        A modern platform connecting students and trainers, tracking progress, and enhancing learning outcomes.
                    </p>
                    <div className="flex justify-center md:justify-start gap-4">
                        <Link
                            to="/register"
                            className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition"
                        >
                            Get Started
                        </Link>
                        <Link
                            to="/about"
                            className="px-6 py-3 border border-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
                {/* Optional decorative shape */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
            </section>

            {/* Features Section */}
            <section className="max-w-7xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-3 text-center">
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
                    <FaGraduationCap className="text-indigo-500 mx-auto mb-4 text-4xl" />
                    <h3 className="text-xl font-bold mb-2">Student Tracking</h3>
                    <p className="text-gray-300">
                        Track student progress, assignments, and learning milestones efficiently.
                    </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
                    <FaChalkboardTeacher className="text-purple-500 mx-auto mb-4 text-4xl" />
                    <h3 className="text-xl font-bold mb-2">Expert Trainers</h3>
                    <p className="text-gray-300">
                        Experienced trainers guide students with practical, real-world skills.
                    </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
                    <FaChartLine className="text-pink-500 mx-auto mb-4 text-4xl" />
                    <h3 className="text-xl font-bold mb-2">Progress Reports</h3>
                    <p className="text-gray-300">
                        Visualize performance and growth with comprehensive analytics.
                    </p>
                </div>
            </section>

            {/* Courses Highlight */}
            <section className="bg-gray-800 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Courses</h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="bg-gray-700 p-6 rounded-xl shadow-lg hover:scale-105 transition">
                            <h3 className="text-xl font-bold mb-2">Full Stack Development</h3>
                            <p className="text-gray-300 mb-4">6 Months | Beginner to Advanced</p>
                            <Link className="inline-block px-4 py-2 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition">
                                Enroll Now
                            </Link>
                        </div>
                        <div className="bg-gray-700 p-6 rounded-xl shadow-lg hover:scale-105 transition">
                            <h3 className="text-xl font-bold mb-2">Data Science & AI</h3>
                            <p className="text-gray-300 mb-4">5 Months | Intermediate</p>
                            <Link className="inline-block px-4 py-2 bg-purple-500 rounded-lg hover:bg-purple-600 transition">
                                Enroll Now
                            </Link>
                        </div>
                        <div className="bg-gray-700 p-6 rounded-xl shadow-lg hover:scale-105 transition">
                            <h3 className="text-xl font-bold mb-2">UI / UX Design</h3>
                            <p className="text-gray-300 mb-4">3 Months | Beginner</p>
                            <Link className="inline-block px-4 py-2 bg-pink-500 rounded-lg hover:bg-pink-600 transition">
                                Enroll Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trainers Highlight */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meet Our Trainers</h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition text-center p-6">
                            <div className="w-24 h-24 bg-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">J</div>
                            <h3 className="text-xl font-bold mb-1">John Doe</h3>
                            <p className="text-gray-300 mb-2">Full Stack Development</p>
                            <Link className="text-indigo-500 hover:underline">View Profile</Link>
                        </div>
                        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition text-center p-6">
                            <div className="w-24 h-24 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">J</div>
                            <h3 className="text-xl font-bold mb-1">Jane Smith</h3>
                            <p className="text-gray-300 mb-2">Data Science & AI</p>
                            <Link className="text-purple-500 hover:underline">View Profile</Link>
                        </div>
                        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition text-center p-6">
                            <div className="w-24 h-24 bg-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">A</div>
                            <h3 className="text-xl font-bold mb-1">Alex Brown</h3>
                            <p className="text-gray-300 mb-2">UI / UX Design</p>
                            <Link className="text-pink-500 hover:underline">View Profile</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 py-20 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Learning?</h2>
                <p className="text-gray-200 mb-6">Join our Student Trainer System and gain real-world skills today!</p>
                <Link to="/register" className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition">
                    Get Started
                </Link>
            </section>

        </div>
    );
};

export default Home;