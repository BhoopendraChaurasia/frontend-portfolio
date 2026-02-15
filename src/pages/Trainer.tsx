import { useNavigate } from 'react-router-dom';
import TrainerCards from '../components/common/TrainerCards';
import { TrainerButton } from '../components/common/TrainerButton';
import { useState, useEffect } from 'react';
import axios from 'axios';


function Trainer({ data }: any) {

    const [trainers, setTrainers] = useState([]);
    useEffect(() => {
        const fetchTrainers = async () => {
            try {
                const res = await axios.get("http://localhost:3000/trainers");
                setTrainers(res.data);
            } catch (e) {
                console.error(e);
            }
        };
        fetchTrainers();
    }, []);

    const navigate = useNavigate();
    const handleNavigate = (url: string) => {
        navigate(url);
    };
    
    const filteredTrainers = trainers.filter(
        (trainer) => trainer.name.toLowerCase().includes(data.toLowerCase())
    );

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
                {   filteredTrainers.length === 0 
                    ? <h1 className="text-2xl md:text-2xl text-center font-extrabold mb-4">
                        Our Trainers
                    </h1> :
                    filteredTrainers.map(
                        (trainer, index) => <TrainerCards key={index} trainer={trainer} />
                    )
                }
            </div>

            {/* Call to Action */}
            <div className="mt-20 text-center">
                <h2 className="text-3xl font-bold mb-4">
                    Expert Guidance, Real Results
                </h2>
                <p className="text-gray-300 mb-6">
                    Our trainers are committed to empowering students with industry-ready skills.
                </p>
                <TrainerButton handleNavigate={handleNavigate} />
            </div>
        </div >
    );
}

export default Trainer;
