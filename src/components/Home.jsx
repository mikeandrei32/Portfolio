export default function Home({ profile }) {
  return (<section id="home" className="hero" aria-labelledby="home-heading">
        <div className="avatar-wrap"><img className="avatar object-cover" src="/images/mike-gomez.jpg" alt={profile.displayName} width="106" height="106" fetchPriority="high" /></div>
        <p className="eyebrow role">{profile.title}</p>
        <div className="ruled hero-title"><h1 id="home-heading">Hi, I'm Mike!<br />Welcome to my corner<br className="desktop-break" /> of the internet<span className="purple">.</span></h1></div>
        <div className="ruled intro"><p>I'm <strong>{profile.displayName}</strong>, {profile.introduction}</p></div>
        <a className="scroll-cue" href="#about">A little more about me <span aria-hidden="true">↓</span></a>
      </section>);
}

