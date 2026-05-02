import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import careerData from "../data/careersData";

function CareerDetails() {
  const { id } = useParams();
  const career = careerData.find((c) => c.id === parseInt(id, 10));

  if (!career) {
    return (
      <>
        <Navbar />
        <div className="career-detail-page">
          <div className="career-detail-card">
            <h2>Career not found</h2>
            <p>The career you are looking for does not exist.</p>
            <Link to="/careers" className="btn btn-secondary">
              Back to Careers
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="career-detail-page">
        <div className="career-detail-card">
          <div className="career-detail-header">
            <div className="career-icon">{career.icon || "💼"}</div>
            <div>
              <h2>{career.title}</h2>
              <p className="career-category">{career.category}</p>
            </div>
          </div>

          <p className="career-description">{career.description}</p>

          <div className="career-stats">
            <div className="stat-box">
              <h4>Salary</h4>
              <p>{career.salary}</p>
            </div>
            <div className="stat-box">
              <h4>Growth</h4>
              <p>{career.growth}</p>
            </div>
          </div>

          <div className="career-section">
            <h4>Key Skills</h4>
            <div className="skills-list">
              {career.skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="career-section">
            <h4>Ideal Profile</h4>
            <p>{career.personality.join(" • ")}</p>
          </div>

          <div className="career-actions">
            <Link to="/questions" className="btn btn-primary">
              Take the Assessment
            </Link>
            <Link to="/careers" className="btn btn-secondary">
              Back to Careers
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CareerDetails;