import { useEffect, useState } from "react";
import axios from "axios";

const token = localStorage.getItem("token");

function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get("http://localhost:8081/me", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (res.data) {
                    setUser(res.data);
                }
            } catch (error) {
                if (error.response) {
                    if (error.response.status === 403) {
                        alert("Access denied. Please login again");
                    } else {
                        alert("Something went wrong");
                    }
                } else {
                    alert("Network error");
                }
            }
        };
        fetchUser();
    }, []);

    return (
        <div className="text-center text-4xl mt-5   ">
            {user ? <h2>Welcome, {user.name}</h2> : <p>Loading...</p>}
        </div>
    );
}

export default Profile;
