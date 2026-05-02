import careers from "../data/careersData";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Careers() {
  return (
    <>
      <Navbar />
      <h2 style={{ textAlign: "center" }}>Explore Careers</h2>

      <div className="careers-grid">
        {careers.map((c) => (
          <motion.div whileHover={{ scale: 1.02 }} className="card" key={c.id}>
            <div className="card-icon">{c.icon}</div>
            <h3>{c.title}</h3>
            <p>{c.description}</p>
            <p><b>Growth:</b> {c.growth}</p>

            <Link to={`/career/${c.id}`}>
              <button className="btn">View Details</button>
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default Careers;