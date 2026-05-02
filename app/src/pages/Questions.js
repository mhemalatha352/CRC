import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const careerOptions = [
  {
    id: "tech",
    title: "Software Engineer",
    subtitle: "Build software, solve technical problems, and write clean code.",
  },
  {
    id: "data",
    title: "Data Scientist",
    subtitle: "Analyze data, build models, and discover insights.",
  },
  {
    id: "design",
    title: "UI/UX Designer",
    subtitle: "Create beautiful experiences and design intuitive interfaces.",
  },
  {
    id: "product",
    title: "Product Manager",
    subtitle: "Lead product strategy, work with teams, and solve customer problems.",
  },
  {
    id: "security",
    title: "Cybersecurity Analyst",
    subtitle: "Protect systems, detect threats, and keep data safe.",
  },
  {
    id: "cloud",
    title: "Cloud Engineer",
    subtitle: "Design cloud infrastructure and keep services reliable and scalable.",
  },
  {
    id: "marketing",
    title: "Digital Marketing Specialist",
    subtitle: "Create campaigns, reach audiences, and measure digital performance.",
  },
];

const quizQuestions = {
  tech: [
    "Do you enjoy solving technical problems?",
    "Do you like writing and debugging code?",
    "Do you enjoy learning new software tools?",
    "Do you prefer working with logical systems?",
    "Do you enjoy optimizing processes?",
    "Do you like building features from scratch?",
    "Do you enjoy learning new programming languages?",
    "Do you prefer working with systems and architecture?",
    "Do you like collaborating with developers on technical solutions?",
    "Do you enjoy experimenting with new technologies?",
  ],
  data: [
    "Do you like analyzing numbers and trends?",
    "Do you enjoy turning raw information into insights?",
    "Do you feel curious about statistics and models?",
    "Do you enjoy exploring data sets?",
    "Do you like making decisions backed by data?",
    "Do you enjoy building visual reports?",
    "Do you like asking questions to uncover meaning?",
    "Do you enjoy working with data tools like Python or SQL?",
    "Do you prefer logical thinking and experimentation?",
    "Do you like validating ideas through real-world data?",
  ],
  design: [
    "Do you enjoy designing user-friendly interfaces?",
    "Do you like creating visually appealing layouts?",
    "Do you enjoy solving problems with creativity?",
    "Do you like thinking about the user experience?",
    "Do you enjoy sketching or wireframing ideas?",
    "Do you like testing designs with users?",
    "Do you enjoy refining visual details and style?",
    "Do you prefer balancing function and aesthetics?",
    "Do you enjoy designing interactions and flows?",
    "Do you like working closely with product teams?",
  ],
  product: [
    "Do you enjoy balancing business goals with user needs?",
    "Do you like working with cross-functional teams?",
    "Do you enjoy defining product strategy and roadmaps?",
    "Do you feel comfortable making decisions based on research?",
    "Do you enjoy guiding a product from concept to launch?",
    "Do you like prioritizing features and managing tradeoffs?",
    "Do you enjoy understanding customer problems deeply?",
    "Do you like tracking metrics to measure product success?",
    "Do you enjoy working at the intersection of design and engineering?",
    "Do you like refining products over multiple releases?",
  ],
  security: [
    "Do you enjoy protecting systems from threats?",
    "Do you like investigating security incidents?",
    "Do you enjoy learning about encryption and access controls?",
    "Do you prefer detail-focused and cautious work?",
    "Do you like staying ahead of new vulnerabilities?",
    "Do you enjoy auditing systems for weaknesses?",
    "Do you like working with security tools and scanners?",
    "Do you prefer enforcing strong policies and best practices?",
    "Do you enjoy helping teams improve their security posture?",
    "Do you like analyzing suspicious behavior in systems?",
  ],
  cloud: [
    "Do you enjoy building and deploying infrastructure in the cloud?",
    "Do you like automating environments and deployments?",
    "Do you enjoy optimizing cloud performance and costs?",
    "Do you prefer solving problems with infrastructure as code?",
    "Do you like working with AWS, Azure, or Google Cloud?",
    "Do you enjoy troubleshooting distributed systems?",
    "Do you like collaborating with developers on reliability?",
    "Do you enjoy designing scalable services and networks?",
    "Do you prefer learning about cloud architecture patterns?",
    "Do you like ensuring applications stay available under load?",
  ],
  marketing: [
    "Do you enjoy creating messages that connect with customers?",
    "Do you like measuring how campaigns perform?",
    "Do you enjoy designing ads, content, or email strategies?",
    "Do you prefer working with both creative and analytical teams?",
    "Do you like experimenting with new growth ideas?",
    "Do you enjoy optimizing campaigns for better results?",
    "Do you like analyzing audience behavior and trends?",
    "Do you enjoy writing persuasive copy or stories?",
    "Do you prefer working with digital channels and tools?",
    "Do you like improving engagement through testing?",
  ],
};

function Questions() {
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const startQuiz = (career) => {
    setSelectedCareer(career);
    setStep(0);
    setScore(0);
  };

  const answer = (value) => {
    const nextScore = score + value;
    setScore(nextScore);

    if (step + 1 < quizQuestions[selectedCareer].length) {
      setStep(step + 1);
    } else {
      navigate("/result", {
        state: { category: selectedCareer, score: nextScore },
      });
    }
  };

  const questions = selectedCareer ? quizQuestions[selectedCareer] : [];
  const progress = selectedCareer
    ? ((step + 1) / questions.length) * 100
    : 0;

  return (
    <>
      <Navbar />
      <div className="page-container">
        <div className="card">
          {!selectedCareer ? (
            <>
              <h2>Choose Your Assessment</h2>
              <p>Select a career path to start the quiz.</p>
              <div className="career-cards">
                {careerOptions.map((career) => (
                  <motion.div
                    className="career-card"
                    key={career.id}
                  >
                    <h3>{career.title}</h3>
                    <p>{career.subtitle}</p>
                    <button className="btn" onClick={() => startQuiz(career.id)}>
                      Start Quiz
                    </button>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <>
              <h2>{careerOptions.find((c) => c.id === selectedCareer).title} Quiz</h2>
              <p className="quiz-meta">{`Question ${step + 1} of ${questions.length}`}</p>
              <div className="progress">
                <motion.div
                  className="progress-bar"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              <motion.div
                className="quiz-question"
                key={step}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h3>{questions[step]}</h3>
              </motion.div>

              <motion.div
                className="button-row"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <motion.button
                  className="btn btn-yes"
                  onClick={() => answer(1)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ✓ Yes
                </motion.button>
                <motion.button
                  className="btn btn-no"
                  onClick={() => answer(0)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ✗ No
                </motion.button>
              </motion.div>

              <motion.button
                className="btn secondary"
                onClick={() => setSelectedCareer(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                Back to assessments
              </motion.button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Questions;
