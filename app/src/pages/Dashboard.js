import { useState, useEffect } from "react";
import { Bar, Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Animated chart values
  const [barData, setBarData] = useState({
    labels: ["Software", "Data", "Design"],
    datasets: [
      {
        label: "Demand %",
        data: [0, 0, 0], // start from 0 for animation
        backgroundColor: ["#ff7eb3", "#65d6ce", "#ffd166"],
        borderRadius: 10,
      },
    ],
  });

  useEffect(() => {
    // Animate bars from 0 → target
    const target = [95, 85, 70];
    let i = 0;
    const interval = setInterval(() => {
      setBarData((prev) => ({
        ...prev,
        datasets: [
          { ...prev.datasets[0], data: target.map((v, idx) => (i >= idx ? v : 0)) },
        ],
      }));
      i++;
      if (i > target.length) clearInterval(interval);
    }, 200);
  }, []);

  const pieData = {
    labels: ["Tech", "Data", "Design"],
    datasets: [
      {
        data: [50, 30, 20],
        backgroundColor: ["#ff7eb3", "#65d6ce", "#ffd166"],
      },
    ],
  };

  const lineData = {
    labels: ["2022", "2023", "2024", "2025"],
    datasets: [
      {
        label: "Growth",
        data: [40, 60, 80, 100],
        borderColor: "#ff7eb3",
        tension: 0.4,
        fill: false,
      },
    ],
  };

  return (
    <div className={`dashboard-container ${darkMode ? "dark" : ""}`}>
      <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <motion.div
        className="dashboard-main"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="stats">
          <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
            <h3>🔥 95%</h3>
            <p>Tech Demand</p>
          </motion.div>

          <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
            <h3>📊 85%</h3>
            <p>Data Careers Growth</p>
          </motion.div>

          <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
            <h3>🎨 70%</h3>
            <p>Design Opportunities</p>
          </motion.div>
        </div>

        <div className="charts">
          <motion.div
            className="chart-box"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Bar data={barData} />
          </motion.div>

          <motion.div
            className="chart-box"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Pie data={pieData} />
          </motion.div>

          <motion.div
            className="chart-box full"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Line data={lineData} />
          </motion.div>
        </div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2>🎯 Career Insights</h2>
          <p>
            Based on current trends, Software Engineering is the fastest growing field.
            Data Science is highly paid, while UI/UX is rising rapidly.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Dashboard;