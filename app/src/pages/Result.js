import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const resultMap = {
  tech: { name: "Software Engineer 💻", color: "#ff7eb3" },
  data: { name: "Data Scientist 📊", color: "#65d6ce" },
  design: { name: "UI/UX Designer 🎨", color: "#a78bfa" },
  product: { name: "Product Manager 📦", color: "#fbbf24" },
  security: { name: "Cybersecurity Analyst 🔐", color: "#f87171" },
  cloud: { name: "Cloud Engineer ☁️", color: "#60a5fa" },
  marketing: { name: "Digital Marketing Specialist 📣", color: "#34d399" },
};

const careerDetails = {
  tech: {
    description: "Build innovative software solutions and solve complex technical challenges.",
    salary: "$90,000 - $180,000",
    growth: "High",
    skills: ["Problem Solving", "Coding", "System Design"],
  },
  data: {
    description: "Transform raw data into actionable insights that drive business decisions.",
    salary: "$100,000 - $190,000",
    growth: "Very High",
    skills: ["Data Analysis", "Statistics", "Machine Learning"],
  },
  design: {
    description: "Craft beautiful, user-centric experiences that delight users.",
    salary: "$70,000 - $140,000",
    growth: "High",
    skills: ["Design Thinking", "User Research", "Prototyping"],
  },
  product: {
    description: "Lead product vision and strategy, connecting teams and customers.",
    salary: "$100,000 - $200,000",
    growth: "High",
    skills: ["Leadership", "Strategy", "Communication"],
  },
  security: {
    description: "Protect systems and data from threats in our connected world.",
    salary: "$80,000 - $170,000",
    growth: "Very High",
    skills: ["Security Analysis", "Threat Detection", "Risk Assessment"],
  },
  cloud: {
    description: "Build scalable, reliable cloud infrastructure for modern applications.",
    salary: "$95,000 - $190,000",
    growth: "Very High",
    skills: ["Cloud Architecture", "DevOps", "Infrastructure"],
  },
  marketing: {
    description: "Create campaigns that connect brands with audiences and drive growth.",
    salary: "$50,000 - $130,000",
    growth: "High",
    skills: ["Marketing Strategy", "Analytics", "Creativity"],
  },
};

const thresholds = {
  tech: 7,
  data: 7,
  design: 7,
  product: 7,
  security: 7,
  cloud: 7,
  marketing: 7,
};

function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state || !state.category) {
    return (
      <>
        <Navbar />
        <div className="result-container">
          <motion.div
            className="result-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2>No quiz results found</h2>
            <p>Please complete the assessment first.</p>
            <button className="btn" onClick={() => navigate("/questions")}>
              Start Assessment
            </button>
          </motion.div>
        </div>
      </>
    );
  }

  const { category, score } = state;
  const careerInfo = resultMap[category];
  const details = careerDetails[category];
  const maxScore = 10;
  const percentage = (score / maxScore) * 100;
  const isPerfect = score >= thresholds[category];
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeOffset = circumference * (1 - score / maxScore);
  const progressColor = score >= 8 ? "#34d399" : score >= 5 ? "#60a5fa" : "#fbbf24";

  return (
    <>
      <Navbar />
      <div className="result-container">
        <motion.div
          className="result-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="result-header">
            <motion.h1
              initial={{ fontSize: "2rem" }}
              animate={{ fontSize: "3rem" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ color: careerInfo.color }}
            >
              {careerInfo.name}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className={isPerfect ? "result-perfect" : "result-good"}
            >
              {isPerfect ? "🎯 Perfect Match!" : "⭐ Good Potential"}
            </motion.h2>
          </div>

          <motion.div
            className="score-circle"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
          >
            <svg viewBox="0 0 120 120">
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="60%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor={progressColor} />
                </linearGradient>
              </defs>
              <circle cx="60" cy="60" r="54" className="circle-background" />
              <motion.circle
                cx="60"
                cy="60"
                r="54"
                className="circle-progress"
                style={{ stroke: "url(#progressGradient)" }}
                initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
                animate={{ strokeDasharray: circumference, strokeDashoffset: strokeOffset }}
                transition={{ duration: 1.5, delay: 1 }}
              />
            </svg>
            <div className="score-text">
              <motion.span
                className="score-number"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                {score}/10
              </motion.span>
              <span className="score-label">Score</span>
            </div>
          </motion.div>

          <motion.p
            className="result-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            {isPerfect
              ? "You're an excellent match for this career! Your strengths align perfectly with the requirements."
              : "This career path could be interesting for you. Explore more to find your best fit."}
          </motion.p>

          <motion.div
            className="career-details"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <p className="detail-text">{details.description}</p>
            <div className="detail-row">
              <span className="detail-label">💰 Salary Range:</span>
              <span className="detail-value">{details.salary}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">📈 Growth Potential:</span>
              <span className="detail-value">{details.growth}</span>
            </div>
            <div className="skills-section">
              <span className="detail-label">🎯 Key Skills:</span>
              <div className="skills-list">
                {details.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 + idx * 0.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="result-actions"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            <button className="btn btn-primary" onClick={() => navigate("/questions")}>
              🔄 Try Another Assessment
            </button>
            <button className="btn btn-secondary" onClick={() => navigate("/careers")}>
              📚 Explore All Careers
            </button>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default Result;
