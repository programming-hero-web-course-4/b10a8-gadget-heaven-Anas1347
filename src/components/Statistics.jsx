import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Registering required components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Statistics = () => {
  useEffect(() => {
    document.title = "Statistics";
  }, []);

  // Data for the chart
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // Months
    datasets: [
      {
        label: "Mobile Sales",
        data: [30, 50, 70, 90, 100, 120, 150], // Mobile Sales data
        borderColor: "rgba(0, 123, 255, 1)",
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        fill: true,
      },
      {
        label: "Laptop Sales",
        data: [40, 60, 80, 100, 130, 160, 190], // Laptop Sales data
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Sales Statistics: Mobile vs Laptop",
      },
    },
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Statistics</h2>

      {/* Centered Chart */}
      <div className="bg-white flex justify-center items-center rounded-lg shadow-md p-4 mb-8">
        <div className="w-full max-w-4xl">
          <Line data={data} options={options} />
        </div>
      </div>

      {/* Under Construction Message */}
      <div className="text-center">
        <p className="text-xl font-bold text-gray-500">Under Construction</p>
      </div>
    </div>
  );
};

export default Statistics;
