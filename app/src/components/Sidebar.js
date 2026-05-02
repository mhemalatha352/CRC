import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Sidebar({ darkMode, toggleDarkMode }) {
  return (
    <motion.div
      className={`sidebar ${darkMode ? "dark" : ""}`}
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>CareerPro</h2>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/analytics">Analytics</Link>
        <button onClick={toggleDarkMode}>
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </nav>
    </motion.div>
  );
}

export default Sidebar;