import TrainerProfileButton from './TrainerProfilebutton';

export default function TrainerCards({trainer}:any) {
    return (
        <div
            key={trainer.name}
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
            </div>
        </div>
    )
}