export const TrainerButton = ({ handleNavigate }: any) => {
    return (
        <button onClick={() => handleNavigate("/add")} className="px-8 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition">
            Join as a Trainer
        </button>
    )
}