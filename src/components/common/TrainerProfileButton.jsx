import { useNavigate } from 'react-router-dom';

const TrainerProfileButton = ({ trainer }) => {
    const navigate = useNavigate();
    return (
        <button
            onClick={() => navigate("/trainer/trainer-profile")}
            className={`w-full py-2 rounded-lg font-semibold bg-gradient-to-r ${trainer.gradient} hover:opacity-90 transition`}
        >
            View Profile
        </button>
    );
};


export default TrainerProfileButton;
