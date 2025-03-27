import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const ExpenseCategoryChart = ({ transactions }) => {
    const categoryTotals = transactions.reduce((acc, txn) => {
        if (txn.amount < 0) {
            const category = txn.category || "Other";
            acc[category] = (acc[category] || 0) + Math.abs(txn.amount);
        }
        return acc;
    }, {});

    const data = {
        labels: Object.keys(categoryTotals),
        datasets: [
            {
                data: Object.values(categoryTotals),
                backgroundColor: ["#EF4444", "#F59E0B", "#10B981", "#3B82F6", "#8B5CF6", "#EC4899"],
            },
        ],
    };

    return (
        <div className="mt-6 bg-white p-4 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-4">Category-wise Expenses</h2>
            <Doughnut data={data} />
        </div>
    );
};

export default ExpenseCategoryChart;
