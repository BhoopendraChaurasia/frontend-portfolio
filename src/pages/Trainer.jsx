import { Link } from 'react-router-dom';
import TrainerProfileButton from '../components/coomon/TrainerProfilebutton';

function Trainer() {
    const trainers = [
        {
            name: "John Doe",
            expertise: "Full Stack Development",
            experience: "8+ Years",
            email: "john@example.com",
            gradient: "from-blue-500 to-cyan-500",
        },
        {
            name: "Jane Smith",
            expertise: "Data Science & AI",
            experience: "6+ Years",
            email: "jane@example.com",
            gradient: "from-purple-500 to-pink-500",
        },
        {
            name: "Alex Brown",
            expertise: "UI / UX Design",
            experience: "5+ Years",
            email: "alex@example.com",
            gradient: "from-green-500 to-emerald-500",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 py-16">

            {/* Page Header */}
            <div className="text-center mb-14">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                    Our Trainers
                </h1>
                <p className="text-gray-300 max-w-2xl mx-auto">
                    Learn from experienced professionals dedicated to mentoring and
                    guiding students toward success.
                </p>
            </div>

            {/* Trainers Grid */}
            <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {trainers.map((trainer, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 rounded-xl shadow-lg overflow-hidden
                       hover:scale-105 transition duration-300"
                    >
                        {/* Avatar Section */}
                        <div
                            className={`h-32 bg-gradient-to-r ${trainer.gradient}
                          flex items-center justify-center`}
                        >
                            <div className="w-20 h-20 rounded-full bg-white text-gray-900
                              flex items-center justify-center text-2xl font-bold">
                                {trainer.name.charAt(0)}
                            </div>
                        </div>

                        {/* Trainer Info */}
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-bold mb-1">{trainer.name}</h3>
                            <p className="text-blue-400 mb-2">{trainer.expertise}</p>

                            <p className="text-gray-300 mb-1">
                                <span className="font-semibold">Experience:</span>{" "}
                                {trainer.experience}
                            </p>
                            <p className="text-gray-300 mb-4">
                                <span className="font-semibold">Email:</span>{" "}
                                {trainer.email}
                            </p>

                            <TrainerProfileButton trainer={trainer} />

                            {/* <button
                                to={"/trainer-profile"}
                                className={`w-full py-2 rounded-lg font-semibold
                            bg-gradient-to-r ${trainer.gradient}
                            hover:opacity-90 transition`}
                            >
                                View Profile
                            </button> */}
                        </div>
                    </div>
                ))}
            </div>

            {/* Call to Action */}
            <div className="mt-20 text-center">
                <h2 className="text-3xl font-bold mb-4">
                    Expert Guidance, Real Results
                </h2>
                <p className="text-gray-300 mb-6">
                    Our trainers are committed to empowering students with industry-ready skills.
                </p>
                <Link to="/trainer-signup" className="px-8 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition">
                    Join as a Trainer
                </Link>
            </div>
        </div >
    );
}

export default Trainer;
