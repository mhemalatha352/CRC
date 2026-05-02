import careersData from "../data/careersData";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

function CareersData() {
  return (
    <>
      <Navbar />
      <h2 style={{ textAlign: "center" }}>Career Data</h2>

      {careersData.map((career) => (
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="card"
          key={career.id}
        >
          <h3>{career.title}</h3>
          <p>{career.description}</p>
          <p><strong>Category:</strong> {career.category}</p>
          <p><strong>Salary:</strong> {career.salary}</p>
          <p><strong>Growth:</strong> {career.growth}</p>
          <p><strong>Skills:</strong> {career.skills.join(", ")}</p>
          <p><strong>Personality:</strong> {career.personality.join(", ")}</p>
        </motion.div>
      ))}
    </>
  );
}


export default CareersData;
