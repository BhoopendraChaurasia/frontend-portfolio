const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">

            {/* Hero Section */}
            <section className="text-center py-20 px-6">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                    About Student Trainer System
                </h1>
                <p className="max-w-3xl mx-auto text-gray-300 text-lg">
                    A modern platform designed to connect students and trainers,
                    track progress, and enhance learning through smart management.
                </p>
            </section>

            {/* Features Section */}
            <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">

                <div className="bg-gray-800 rounded-xl p-6 hover:scale-105 transition shadow-lg">
                    <h3 className="text-xl font-bold mb-3 text-blue-400">
                        🎓 Student Management
                    </h3>
                    <p className="text-gray-300">
                        Easily manage student profiles, enrollments, and performance
                        tracking in one centralized system.
                    </p>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 hover:scale-105 transition shadow-lg">
                    <h3 className="text-xl font-bold mb-3 text-green-400">
                        🧑‍🏫 Trainer Dashboard
                    </h3>
                    <p className="text-gray-300">
                        Trainers can monitor student progress, assign tasks, and provide
                        feedback efficiently.
                    </p>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 hover:scale-105 transition shadow-lg">
                    <h3 className="text-xl font-bold mb-3 text-purple-400">
                        📊 Progress Tracking
                    </h3>
                    <p className="text-gray-300">
                        Visual insights and reports help students stay motivated and
                        improve their learning outcomes.
                    </p>
                </div>

            </section>

            {/* Mission Section */}
            <section className="bg-gray-800 py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                    <p className="text-gray-300 text-lg">
                        Our mission is to simplify the learning journey by bridging the gap
                        between students and trainers using technology, transparency, and
                        smart tools.
                    </p>
                </div>
            </section>


        </div>

    )
};

export default About;