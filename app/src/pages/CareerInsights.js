import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import careerData from "../data/careersData";

function CareerInsights() {
  const totalCareers = careerData.length;
  const categories = [...new Set(careerData.map((item) => item.category))].length;

  return (
    <>
      <Navbar />
      <div className="insights-page">
        <div className="insights-header">
          <motion.div
            className="insights-copy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="insights-eyebrow">Career Insights</span>
            <h2>Compare career paths with confidence</h2>
            <p>
              This page focuses on the signals that matter most when choosing a role: demand trends,
              skill fit, and what makes each path stand out — not the same career summary content.
            </p>
          </motion.div>

          <div className="insights-stats">
            <motion.div className="insight-pill" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <span>{totalCareers}</span>
              <p>Career paths</p>
            </motion.div>
            <motion.div className="insight-pill" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <span>{categories}</span>
              <p>Categories covered</p>
            </motion.div>
            <motion.div className="insight-pill" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <span>7</span>
              <p>Expert-backed roles</p>
            </motion.div>
          </div>
        </div>

        <div className="insights-grid">
          {careerData.map((career) => (
            <motion.div
              key={career.id}
              className="insights-card"
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              <div className="insights-card-top">
                <div className="insights-icon">{career.icon || "💼"}</div>
                <div>
                  <h3>{career.title}</h3>
                  <p className="insights-category">{career.category}</p>
                </div>
              </div>

              <div className="insights-description">
                <span>Top skill: <strong>{career.skills[0]}</strong></span>
                <span>Ideal fit: <strong>{career.personality.join(" • ")}</strong></span>
                <span>Demand: <strong>{career.growth}</strong></span>
              </div>

              <div className="insights-meta">
                <span>💰 {career.salary}</span>
                <span>📊 {career.category}</span>
              </div>

              <div className="insights-skills">
                {career.skills.map((skill, index) => (
                  <span key={index} className="insights-skill">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CareerInsights;