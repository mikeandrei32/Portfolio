import { socialLinks } from '../data/socialLinks.js';
import { SocialIcon } from './SocialLinks.jsx';

export default function Contact() {
  const linkedIn = socialLinks.find(link => link.icon === 'linkedin');

  return (
    <section id="contact" className="contact-section section" aria-labelledby="contact-heading">
      <div className="contact-intro">
        <p className="eyebrow">Contact</p>
        <h2 id="contact-heading">Great things start<br />with a conversation.</h2>
        <p className="contact-description">Have a project in mind, an opportunity to share, or just want to say hello? Let’s connect. I’d love to hear from you.</p>
        <a className="contact-cta" href={linkedIn.href} target="_blank" rel="noopener noreferrer" aria-label="Connect on LinkedIn (opens in a new tab)">Connect on LinkedIn <span aria-hidden="true">↗</span></a>
      </div>
      <div className="contact-links">
        {socialLinks.map(link => (
          <a className="contact-card" key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`${link.name}: ${link.handle} (opens in a new tab)`}>
            <span className="contact-icon" aria-hidden="true"><SocialIcon icon={link.icon} /></span>
            <div className="contact-card-content">
              <h3>{link.name}</h3>
              <span className="contact-handle">{link.handle}</span>
              <p>{link.description}</p>
            </div>
            <span className="contact-arrow" aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
