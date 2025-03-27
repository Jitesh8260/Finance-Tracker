import React, { useState } from "react";

const AddTransaction = ({ onAdd }) => {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !amount) return;
        
        onAdd({ id: Date.now(), name, amount: parseInt(amount), date: new Date().toISOString().split("T")[0] });
        setName("");
        setAmount("");
    };

    return (
        <div className="mt-6 bg-white p-4 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-4">Add New Transaction</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input 
                    type="text" 
                    placeholder="Transaction Name" 
                    className="border p-2 rounded-md"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    type="number" 
                    placeholder="Amount (Use - for expense)" 
                    className="border p-2 rounded-md"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Add Transaction
                </button>
            </form>
        </div>
    );
};

export default AddTransaction;
