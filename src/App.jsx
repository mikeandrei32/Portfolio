import { useEffect, useState } from 'react';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import SocialLinks from './components/SocialLinks.jsx';
import Certificates from './components/Certificates.jsx';
import Contact from './components/Contact.jsx';
import profile from './data/profile.json';

const sections = ['Home', 'About', 'Projects', 'Certificates', 'Contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    function updateNavigation() {
      const position = document.querySelector('.header').offsetHeight + 80;
      let current = 'home';
      for (const section of sections) {
        const element = document.getElementById(section.toLowerCase());
        if (element.getBoundingClientRect().top <= position) current = element.id;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5) current = 'contact';
      setActiveSection(current);
    }
    const target = document.getElementById(window.location.hash.slice(1));
    if (target) target.scrollIntoView({ behavior: 'instant' });
    updateNavigation();
    window.addEventListener('scroll', updateNavigation, { passive: true });
    window.addEventListener('resize', updateNavigation);
    return () => {
      window.removeEventListener('scroll', updateNavigation);
      window.removeEventListener('resize', updateNavigation);
    };
  }, []);

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="header">
      <a className="wordmark" href="#home" aria-label="Mike Gomez, home">mg<span>.</span></a>
      <nav aria-label="Main navigation">{sections.map(section => <a key={section} href={`#${section.toLowerCase()}`} aria-current={activeSection === section.toLowerCase() ? 'location' : undefined}>{section}</a>)}</nav>
      <SocialLinks />
    </header>
    <main id="main" className="page-shell">
      <Home profile={profile} />
      <About profile={profile} />
      <div className="upcoming-sections">
        <section id="projects" className="pending-section section" aria-labelledby="projects-heading"><span className="pending-icon" aria-hidden="true">⌘</span><div><p className="eyebrow">Projects</p><h2 id="projects-heading">Things I'm building.</h2><p>Project details are coming soon.</p></div><span className="coming-soon">Coming soon</span></section>
        <Certificates />
        <Contact />
      </div>
      <footer><div><a className="wordmark" href="#home">mg<span>.</span></a><p>{profile.displayName}<span>Learning, building, and turning ideas into reality.</span></p></div><a className="back-top" href="#home">Back to top <span aria-hidden="true">↑</span></a></footer>
    </main>
  </>;
}

