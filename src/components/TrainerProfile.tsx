import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaTwitter, FaStar } from "react-icons/fa";

const TrainerProfile = ({ trainer }) => {
    // trainer is an object: { name, email, phone, expertise, experience, avatar, socialLinks, courses }
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black p-8 flex justify-center">
            <div className="bg-gray-800 rounded-3xl shadow-2xl p-8 max-w-4xl w-full text-white">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
                    {/* Avatar */}
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg">
                        <img
                            src={trainer.avatar || "https://i.pravatar.cc/300"}
                            alt={trainer.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Trainer Info */}
                    <div className="mt-4 md:mt-0 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-purple-400">{trainer.name}</h2>
                        <p className="text-gray-300 mt-1">{trainer.expertise}</p>
                        <p className="text-gray-400 mt-1">{trainer.experience} years experience</p>

                        {/* Contact Info */}
                        <div className="flex justify-center md:justify-start space-x-4 mt-3 text-gray-400">
                            {trainer.email && (
                                <a href={`mailto:${trainer.email}`} className="hover:text-purple-400 transition">
                                    <FaEnvelope />
                                </a>
                            )}
                            {trainer.phone && (
                                <a href={`tel:${trainer.phone}`} className="hover:text-purple-400 transition">
                                    <FaPhone />
                                </a>
                            )}
                            {trainer.socialLinks?.linkedin && (
                                <a href={trainer.socialLinks.linkedin} target="_blank" className="hover:text-purple-400 transition">
                                    <FaLinkedin />
                                </a>
                            )}
                            {trainer.socialLinks?.twitter && (
                                <a href={trainer.socialLinks.twitter} target="_blank" className="hover:text-purple-400 transition">
                                    <FaTwitter />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Bio / Description */}
                {trainer.bio && (
                    <p className="mt-6 text-gray-300 text-sm md:text-base">{trainer.bio}</p>
                )}

                {/* Courses Section */}
                {trainer.courses?.length > 0 && (
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold text-purple-400 mb-4">Courses Handled</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {trainer.courses.map((course, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-700 rounded-xl p-4 hover:scale-105 transform transition shadow-lg"
                                >
                                    <h4 className="text-lg font-semibold text-white">{course.title}</h4>
                                    <p className="text-gray-400 text-sm mt-1">{course.description}</p>
                                    <div className="flex items-center mt-2 text-yellow-400">
                                        {Array.from({ length: course.rating }).map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TrainerProfile;
