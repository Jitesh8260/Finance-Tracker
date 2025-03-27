import React from "react";

const Dashboard = () => {
    return (
        <div className="p-6">
            <h2 className="text-3xl font-semibold">Dashboard</h2>
            <div className="mt-4 p-4 bg-gray-100 rounded-md shadow-md">
                <p className="text-lg">Total Balance: <span className="font-bold text-green-600">₹15,000</span></p>
                <p className="text-lg">Monthly Budget: <span className="font-bold text-blue-600">₹20,000</span></p>
            </div>
        </div>
    );
};

export default Dashboard;
