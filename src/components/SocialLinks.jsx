import { socialLinks } from '../data/socialLinks.js';

export function SocialIcon({ icon }) {
  if (icon === 'github') {
    return <img className="social-github" src="/images/github.svg" width="18" height="18" alt="" />;
  }

  if (icon === 'instagram') {
    return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>;
  }

  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96C2 21.32 2.69 22 3.55 22h16.9c.86 0 1.55-.68 1.55-1.52V3.52C22 2.68 21.31 2 20.45 2ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.39-.74 1.36-1.52 2.79-1.52 2.99 0 3.58 1.97 3.58 4.53v5.24Z" />
  </svg>;
}

export default function SocialLinks() {
  return <div className="header-socials" role="group" aria-label="Social profiles">
    {socialLinks.map(link => <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`${link.name} (opens in a new tab)`} title={link.name}>
      <SocialIcon icon={link.icon} />
    </a>)}
  </div>;
}
