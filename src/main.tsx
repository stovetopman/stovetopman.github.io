import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import timePhoto from "/src/assets/time.jpg"
import conductorPhoto from "/src/assets/conductor.jpg"
import etfPhoto from "/src/assets/etf.png"
import verifaiPhoto from "/src/assets/verifai.jpg"
import motionPhoto from "/src/assets/motion.jpg"
import photoPhoto from "/src/assets/photofinish.png"
import memospace from "/src/assets/memospace.png"




interface Project {
  title: string;
  img: string;
  alt: string;
  desc: string;
  long: string;
  link: string;
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import { useState, useEffect } from "react";

import helcimLogo from "/src/assets/helcimlogo.jpg"; 
import tiktokLogo from "/src/assets/tiktok.png";

export function HelcimExperience() {
  return (
    <section className="experience-section helcim-gradient">
      <div className="experience-header">
        <img src={helcimLogo} alt="Helcim Logo" className="helcim-logo" />
        <h1 className="experience-title">Helcim</h1>
      </div>
      <h3 className="experience-subtitle">Software Development Intern</h3>


      <p className="experience-dates">May 2024 – May 2025 · Calgary, AB</p>

      <p className="experience-summary">
        At Helcim, I worked on building trustworthy financial products through full-stack
        engineering, fraud detection, and secure authentication systems. As part of the Risk team, I collaborated with Trust and Safety teams to deliver reliable and intuitive merchant tooling.
      </p>

      <ul className="experience-list">
        <li>Created API 50+ RESTful API routes in PHP and GoLang, supporting 5000+ monthly requests and improving
cross-team integration through respective documentation</li>
        <li> Implemented and delivered 300+ feature enhancements and change requests in collaboration with the Trust &
Safety Team while ensuring PCI compliance and fraud mitigation</li>
        <li>Wrote and optimized complex queries in MySQL and BigQuery, reducing data retrieval times and enabling faster
analytics for internal teams.</li>
        <li>Led devlopment of two-factor email authentication system in PHP and Vue.js used in merchant registration flow,
strengething platform security for 500+ merchant signups</li>
        <li>Refactored legacy codebase into a modern, modular, scalable event scoring system processing $8M in daily transactions</li>
      </ul>
    </section>
  );
}

export function TikTokShopExperience() {
  return (
    <section className="experience-section tiktok-gradient">
      <div className="experience-header">
        <img src={tiktokLogo} alt="TikTok Logo" className="helcim-logo" />
        <h2 className="experience-title">ByteDance | TikTok Shop US</h2>
      </div>
      <h3 className="experience-subtitle">Product Operations & Strategy Intern</h3>

      <p className="experience-dates">May 2026 – July 2026 · Global E-commerce</p>

      <p className="experience-summary">
        At TikTok Shop, I drove operational excellence and merchant growth through data-driven automation and real-time analytics. As a Product Operations intern on the Global E-commerce team, I designed systems to improve merchant onboarding, inventory visibility, and account health—directly supporting 50+ merchants and enabling faster decision-making for cross-functional teams.
      </p>

      <ul className="experience-list">
        <li>Implemented an automated sample inventory tracking system for products across 50+ merchants, reducing manual data entry by 60% and enabling same-day visibility into stock levels</li>
        <li>Built merchant anomaly detection pipeline with 95% precision, identifying 6-8 at-risk merchant accounts monthly for proactive intervention and retention</li>
        <li>Developed real-time KPI dashboard tracking merchant and product performance across varying product pools with 30+ daily users, providing actionable insights for stakeholder decision-making</li>
      </ul>
    </section>
  );
}



export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [imageOrientation, setImageOrientation] = useState<"portrait" | "landscape">("landscape");

  useEffect(() => {
    if (!activeProject) return;

    const img = new Image();
    img.onload = () => {
      setImageOrientation(
        img.naturalWidth > img.naturalHeight ? "landscape" : "portrait"
      );
    };
    img.src = activeProject.img;

    return () => {
      img.onload = null;
    };
  }, [activeProject]);

  const projects: Project[] = [
    {
      title: "MemoSpace",
      img: memospace,
      alt: "MemoSpace App",
      desc: "An iOS solution to spatially preserving memories the way you experienced them.",
      long: "Capture real-world locations and revisit them as navigable 3D spaces, with photos, notes, " 
      + "and memories anchored to specific places. Instead of flat photos or videos, it preserves the spatial context " 
      + " of meaningful moments, making memories feel immersive and revisitable over time.",
      link:"https://github.com/stovetopman/nw2026",
    },
    {
    title: "PhotoFinish",
    img: photoPhoto,
    alt: "PhotoFinish App",
    desc: "A SwiftUI journaling + image-based to-do app that blends reflection with productivity.",
    long: "PhotoFinish is a SwiftUI-based iOS app that blends photo journaling with smart productivity. " 
    + "The app encourages reflection through visual entries while helping users stay on track with personalized reminders. " 
    + "It features a clean, intuitive UI and secure onboarding powered by Firebase Authentication. Designed as a standalone, polished mobile experience, " 
    + "PhotoFinish drives habit-building through a uniquely expressive and social workflow.",
    link:"https://devpost.com/software/photofinish",
  },
  {
    title: "Verif.ai",
    img: verifaiPhoto,
    alt: "Verif.ai Extension",
    desc: "A browser extension that flags misinformation using language models and fact-checking APIs.",
    long: "Verif.ai is a lightweight browser extension that helps readers identify misleading or false claims in online news. " 
    + "It analyzes article content using custom claim-checking heuristics and highlights questionable sections with clear credibility indicators. " 
    + "The tool provides confidence scoring and visual cues to improve transparency while browsing. " 
    + "Developed with a full end-to-end workflow—from initial design to deployment—Verif.ai includes robust testing against major Canadian news sources, " 
    + "resulting in measurable improvements in detection reliability.",
    link:"https://github.com/stovetopman/verify.ai",
  },
  {
    title: "ETF Screener",
    img: etfPhoto,
    alt: "ETF Screener",
    desc: "A Streamlit-powered dashboard for ranking ETFs by volatility, return, and ESG scoring.",
    long: "scorETF is a full-stack ETF analysis platform that helps users compare and rank ETFs using transparent financial metrics." 
    + "Built with Python and Streamlit, it delivers an interactive dashboard powered by live market data from Yahoo! Finance. " 
    + "Users can explore calculated performance metrics—including annualized returns, volatility, and Sharpe ratios—and visualize trends through intuitive time-series plots. " 
    + "The tool provides composite quality scores and explanations, enabling informed, data-driven investment decisions.",
    link:"https://github.com/stovetopman/scoretf",
  },
  {
    title: "Vancouver Conductor",
    img: conductorPhoto,
    alt: "Vancouver Conductor",
    desc: "A visualizer of Vanoucver's transit sytem, inspired by MTA.ME",
    long: "Vancouver Conductor is an interactive transit simulation inspired by Vancouver’s SkyTrain network, designed to visualize real-time train flow and passenger movement. " 
    + "Built with a focus on smooth animation and clean UI, the project models station connections, train timing, and line interactions to create an engaging, minimalist transit experience. " 
    + "Users can watch trains navigate the system with dynamic motion, simulating real-world spacing and rhythm. " 
    + "The project showcases a blend of creative visualization, transport modeling, and modern front-end development.",
    link:"",
  },
  {
    title: "TimeCapsules",
    img: timePhoto,
    alt: "TimeCapsules",
    desc: "AI powered reminder tool focused on elderly accessibility",
    long: "TimeCapsule is an accessibility-focused health tool designed for elderly users who need reliable, personalized medication reminders. " 
    + "Using OpenAI for message generation and Twilio for real-time SMS alerts, the app automates customized scheduling and notifications. " 
    + "A multimodal experience is enabled by OpenCV-powere  d object recognition, ensuring intuitive interactions. " 
    + "The React front-end ties everything together with a clean, user-friendly interface that bridges the computer-vision pipeline and messaging workflow.",
    link:"https://devpost.com/software/timecapsules",
  },
  {
    title: "MindfulMotion",
    img: motionPhoto,
    alt: "MindfulMotion",
    desc: "A fitness tool with real-time motion-tracking and analysis",
    long: "MindfulMotion is an award-winning, real-time motion-analysis fitness tool that guides users through strength exercises with automated rep counting and form correction. " 
    + "Built using OpenCV and Flask-SocketIO, it processes live camera input to detect movement patterns, posture, and deviations in technique." 
    + "The system provides immediate feedback through an interactive web interface and logs workout data using Pandas for performance tracking. " 
    + "MindfulMotion won 1st place at HelloHacks 2023, recognized for its seamless integration of computer vision and real-time coaching.",
    link:"https://github.com/troy-wu/team1",
  },
  // {
  //   title: "HelcimBot",
  //   img: "/src/assets/photofinish.jpg",
  //   alt: "HelcimBot",
  //   desc: "A SwiftUI journaling + image-based to-do app that blends reflection with productivity. Powered by Firebase.",
  // },
];


  return (
    <>
      <section className="section">
        <h2 className="section-title">Projects</h2>

        <div className="project-list">
          {projects.map((p) => (
            <div
              key={p.title}
              className="project-card"
              onClick={() => setActiveProject(p)}
            >
              <img src={p.img} className="project-image" />

              <div className="project-content">
                <h3 className="project-title">{p.title}</h3>
                <p className="text">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* -------- MODAL OVERLAY -------- */}
      {activeProject && (
        <div className="modal-backdrop" onClick={() => setActiveProject(null)}>
          <div
            className={`modal-glass modal-glass--${imageOrientation}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <h2 className="modal-title">{activeProject.title}</h2>
              <p className="modal-text">{activeProject.long}</p>
              {activeProject.link && (
                <a
                  className="modal-link"
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore →
                </a>
              )}
            </div>

            <div className="modal-media">
              <img
                src={activeProject.img}
                alt={activeProject.alt}
                className="modal-image"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

import profilePic from "/src/assets/profile.jpeg"; // Replace with your image

export function AboutMe() {
  const fullText = "👋 Hi, I’m Jasper - just a little bit about me";
  const [typedText, setTypedText] = useState("");
  const [showParagraph, setShowParagraph] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i === fullText.length + 1) {
        clearInterval(interval);
        setTimeout(() => setShowParagraph(true), 1000);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="about-section">
      <div className="about-container">
        
        {/* LEFT: Image */}
        <div className="about-image-wrapper">
          <img src={profilePic} alt="Jasper" className="about-image" />
        </div>

        {/* RIGHT: Typing + Paragraph */}
        <div className="about-text">
          <p className="typing-line">{typedText}</p>

          {showParagraph && (
            <p className="about-description fade-in">

              Nice to meet you! I'm curently studying Computer Science and Business at the University of British Columbia, looking the next place I can make an impact. 
              I've worked primarily with all facets of E-commerce, from product operations and strategy to payments and engineering, interacting with merchants and stakeholders to deliver products and features that are intuitive and thoughtful, improving lives and bringing value to people's day.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}export function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <h1 className="header-name">Jasper Mao</h1>
        <p className="header-tagline">Computer Science & Business | Product & Software Engineering</p>
        
        <div className="header-links">
          <a 
            href="mailto:jaspermao0705@gmail.com" 
            className="header-link email-link"
            aria-label="Email"
          >
            <svg className="link-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            jaspermao0705@gmail.com
          </a>
          
          <a 
            href="https://linkedin.com/in/jaspermao0705" 
            className="header-link linkedin-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg className="link-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}
export  function Contact() {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Let’s Connect</h2>

      <p className="contact-subtitle">
        I’d love to hear from you.
      </p>

      <div className="contact-links">

        <div className="contact-card">
          <span className="contact-icon">💼</span>
          <p className="contact-label">LinkedIn</p>
          <a 
            href="https://www.linkedin.com/in/jaspermao0705/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            Visit Profile →
          </a>
          <a
            href="https://www.linkedin.com/in/jaspermao0705/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-text-link"
          >
            linkedin.com/in/jaspermao0705
          </a>
        </div>

        <div className="contact-card">
          <span className="contact-icon">📸</span>
          <p className="contact-label">Instagram</p>
          <a 
            href="https://www.instagram.com/i_try.photography/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            View Instagram →
          </a>
          <a
            href="https://www.instagram.com/i_try.photography/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-text-link"
          >
            @i_try.photography
          </a>
        </div>

        <div className="contact-card">
          <span className="contact-icon">✉️</span>
          <p className="contact-label">Email</p>
          <a 
            href="mailto:jaspermao0705@gmail.comm"
            className="contact-button"
          >
            Send Email →
          </a>
          <a
            href="mailto:jaspermao0705@gmail.com"
            className="contact-text-link"
          >
            jaspermao0705@gmail.com
          </a>
        </div>

      </div>
    </section>
  );
}
