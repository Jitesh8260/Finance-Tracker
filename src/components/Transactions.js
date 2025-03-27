import React, { useState } from "react";

const Transactions = ({ transactions }) => {
    const [filter, setFilter] = useState("");
    const [search, setSearch] = useState("");

    const filteredTransactions = transactions.filter((txn) => {
        return (
            (!filter || txn.category === filter) &&
            txn.name.toLowerCase().includes(search.toLowerCase())
        );
    });

    return (
        <div className="mt-6 bg-white p-4 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-4">Transaction History</h2>

            {/* Search and Filter Controls */}
            <div className="flex gap-4 mb-4">
                <input
                    type="text"
                    placeholder="Search transactions..."
                    className="border p-2 w-full"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <select
                    className="border p-2"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="">All Categories</option>
                    <option value="Food">Food</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Travel">Travel</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Income">Income</option>
                </select>
            </div>

            {/* Transactions List */}
            <ul className="space-y-2">
                {filteredTransactions.map((txn) => (
                    <li key={txn.id} className="flex justify-between p-2 border rounded-md">
                        <span>{txn.name}</span>
                        <span className={txn.amount < 0 ? "text-red-500" : "text-green-500"}>
                            ₹{txn.amount}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Transactions;
