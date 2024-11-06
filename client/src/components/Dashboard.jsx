import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        const fetchDashboard = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                setMessage("Unauthorized");
                return;
            }

            try {
                const response = await axios.get("http://localhost:5000/api/auth/dashboard", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setMessage(response.data.message);
            } catch (error) {
                setMessage("Unauthorized");
                console.error(error);
            }
        };

        fetchDashboard();
    }, []);

    return <div
    style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "1.5rem",
        paddingLeft: "5.5rem"
    }}>{message}</div>;
};

export default Dashboard;