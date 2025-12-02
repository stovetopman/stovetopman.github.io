
import Projects, { AboutMe, Contact, HelcimExperience } from "./main";

export default function App() {
  return (
    <main className="container">
      <section className="hero">
        <div className="hero-glow"></div>
        <div className="hero-glass">
          <h1 className="hero-title">Hi, I’m Jasper</h1>
          <p className="hero-subtitle">
            How can I help?
          </p>
        </div>
        <div className="hero-scroll-indicator">
          <span className="arrow-down">⌄</span>
        </div>
      </section>
      
      <AboutMe />
      <HelcimExperience />
      <Projects />
      <Contact />


      <footer className="footer">
        <p className="text-small">
          © {new Date().getFullYear()} Jasper Mao
        </p>
      </footer>
    </main>
  );
}
