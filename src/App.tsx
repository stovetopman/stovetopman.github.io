import Projects, { AboutMe, Contact, HelcimExperience, TikTokShopExperience} from "./main";

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
          <svg className="arrow-down" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M6 9l6 6 6-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>
      
      <AboutMe />
      <TikTokShopExperience />
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
