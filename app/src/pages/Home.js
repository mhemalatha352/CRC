import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: {
    y: -10,
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    transition: { duration: 0.3 },
  },
};

function Home() {
  return (
    <>
      <Navbar />
      <div className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="hero-copy">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              🚀 Discover Your Dream Career
            </motion.h1>
            <motion.p
              className="hero-tagline-new"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Find the perfect career path that matches your strengths, skills, and aspirations.
            </motion.p>
            <motion.p
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Our intelligent assessment guides you through an interactive quiz to match you with one of 7 exciting career options in tech and beyond.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link to="/questions">
                <button className="btn hero-btn">✨ Start Your Journey</button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="hero-highlights"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="highlight-card"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="highlight-icon">🎯</div>
              <h3>Personalized Assessment</h3>
              <p>Adaptive questions tailored to your unique strengths and preferences.</p>
            </motion.div>
            <motion.div
              className="highlight-card"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="highlight-icon">🧭</div>
              <h3>Clear Direction</h3>
              <p>Get confident guidance across 7 diverse career paths in tech and business.</p>
            </motion.div>
            <motion.div
              className="highlight-card"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="highlight-icon">⚡</div>
              <h3>Instant Results</h3>
              <p>Complete the quiz in minutes and receive comprehensive career insights.</p>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-features"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="feature-stat" variants={itemVariants}>
              <h4>7+</h4>
              <p>Career Paths</p>
            </motion.div>
            <motion.div className="feature-stat" variants={itemVariants}>
              <h4>70</h4>
              <p>Smart Questions</p>
            </motion.div>
            <motion.div className="feature-stat" variants={itemVariants}>
              <h4>100%</h4>
              <p>Free Assessment</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default Home;