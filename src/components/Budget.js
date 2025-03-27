import React, { useState } from "react";

const Budget = ({ totalIncome, totalExpense }) => {
    const [budget, setBudget] = useState(50000); // Default Budget ₹50,000

    const remainingBudget = budget - totalExpense;

    return (
        <div className="mt-6 bg-white p-4 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-4">Budget Tracker</h2>
            <div className="flex justify-between">
                <p>Monthly Budget: <strong>₹{budget}</strong></p>
                <p>Remaining: <strong className={remainingBudget < 0 ? "text-red-500" : "text-green-600"}>₹{remainingBudget}</strong></p>
            </div>
            <input 
                type="number" 
                className="border p-2 mt-3 w-full rounded-md" 
                placeholder="Set Monthly Budget" 
                value={budget} 
                onChange={(e) => setBudget(parseInt(e.target.value))}
            />
        </div>
    );
};

export default Budget;
