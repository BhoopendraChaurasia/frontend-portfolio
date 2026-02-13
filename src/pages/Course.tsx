function Course() {
    const courses = [
        {
            title: "Full Stack Web Development",
            trainer: "John Doe",
            duration: "6 Months",
            level: "Beginner to Advanced",
            color: "from-blue-500 to-cyan-500",
        },
        {
            title: "Data Science & AI",
            trainer: "Jane Smith",
            duration: "5 Months",
            level: "Intermediate",
            color: "from-purple-500 to-pink-500",
        },
        {
            title: "UI / UX Design",
            trainer: "Alex Brown",
            duration: "3 Months",
            level: "Beginner",
            color: "from-green-500 to-emerald-500",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 py-16">

            {/* Page Header */}
            <div className="text-center mb-14">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                    Our Courses
                </h1>
                <p className="text-gray-300 max-w-2xl mx-auto">
                    Explore industry-ready courses guided by expert trainers and designed
                    to help students achieve their career goals.
                </p>
            </div>

            {/* Courses Grid */}
            <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {courses.map((course, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 rounded-xl overflow-hidden shadow-lg
                       hover:scale-105 transition duration-300"
                    >
                        {/* Top Gradient Bar */}
                        <div
                            className={`h-2 bg-gradient-to-r ${course.color}`}
                        ></div>

                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                            <p className="text-gray-300 mb-2">
                                <span className="font-semibold">Trainer:</span> {course.trainer}
                            </p>
                            <p className="text-gray-300 mb-2">
                                <span className="font-semibold">Duration:</span> {course.duration}
                            </p>
                            <p className="text-gray-300 mb-5">
                                <span className="font-semibold">Level:</span> {course.level}
                            </p>

                            <button
                                className={`w-full py-2 rounded-lg font-semibold
                            bg-gradient-to-r ${course.color}
                            hover:opacity-90 transition`}
                            >
                                Enroll Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Call to Action */}
            <div className="mt-20 text-center">
                <h2 className="text-3xl font-bold mb-4">
                    Learn. Practice. Succeed.
                </h2>
                <p className="text-gray-300 mb-6">
                    Join our courses and gain real-world skills with expert guidance.
                </p>
                <button className="px-8 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition">
                    View All Programs
                </button>
            </div>
        </div>
    );
}

export default Course;