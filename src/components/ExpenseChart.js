import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const ExpenseChart = ({ totalIncome, totalExpense }) => {
    const data = {
        labels: ["Income", "Expense"],
        datasets: [
            {
                data: [totalIncome, totalExpense],
                backgroundColor: ["#34D399", "#EF4444"], // Green for income, Red for expense
            },
        ],
    };

    return (
        <div className="mt-6 bg-white p-4 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-4">Income vs Expense</h2>
            <Pie data={data} />
        </div>
    );
};

export default ExpenseChart;
