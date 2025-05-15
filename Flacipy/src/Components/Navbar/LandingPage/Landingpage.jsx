import React from "react";
import "./LandingPage.css";
import { FiMessageCircle, FiHelpCircle, FiFileText } from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <section className="features-section">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="features-cards">
          <div className="feature-card">
            <div className="icon-circle"><FiMessageCircle size={20} /></div>
            <h3>Mock Interviews</h3>
            <p>Practice with HR professionals and connect with placed students from your network.</p>
            <a href="#" className="card-link">Try Now &gt;</a>
          </div>
          <div className="feature-card">
            <div className="icon-circle"><FiHelpCircle size={20} /></div>
            <h3>Interview Questions</h3>
            <p>Access company-specific Interview questions asked in previous interviews.</p>
            <a href="#" className="card-link">Explore &gt;</a>
          </div>
          <div className="feature-card">
            <div className="icon-circle"><HiOutlineLightBulb size={20} /></div>
            <h3>Skill Practice</h3>
            <p>Practice development skills, DSA, and find jobs matching your performance.</p>
            <a href="#" className="card-link">Practice Now &gt;</a>
          </div>
          <div className="feature-card">
            <div className="icon-circle"><FiFileText size={20} /></div>
            <h3>Resume Builder</h3>
            <p>Create ATS-friendly resumes, check scores, and download in multiple formats.</p>
            <a href="#" className="card-link">Build Resume &gt;</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
