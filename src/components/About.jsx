export default function About({ profile }) {
  return (<section id="about" className="about section" aria-labelledby="about-heading">
        <div className="section-heading"><p className="eyebrow ruled">About</p><h2 className="ruled" id="about-heading">The person behind<br />the pixels and the code.</h2></div>
        <div className="about-grid">
          <article className="about-card bio"><div><span className="card-label">01 / A LITTLE INTRODUCTION</span><h3>Nice to meet you.<span className="wave" aria-hidden="true">✳</span></h3><p>I'm Mike, an aspiring full stack developer who enjoys bringing ideas to life on the web.</p><p>I'm at the beginning of my professional journey, building my skills across frontend and backend development.</p></div><div className="bio-monogram" aria-hidden="true"><img className="h-full w-full object-cover" src="/images/mike-gomez.jpg" alt="" loading="lazy" /></div></article>
          <article className="about-card stack"><span className="card-label">02 / MY TECH STACK</span><h3>From interface to database.</h3><p>The technologies I'm growing with.</p><div className="stack-grid">{profile.skills.map(skill => <div key={skill.name}><b className={skill.className}>{skill.symbol}</b><span>{skill.name}</span></div>)}</div></article>
          <article className="about-card toolbox"><span className="card-label">03 / MY TOOLBOX</span><h3>A few everyday essentials.</h3><p>Tools that help me turn ideas into code.</p><div className="tool-tiles">{profile.tools.map(tool => <div key={tool.name}><b className={tool.className} aria-hidden="true">{tool.icon ? <img src={tool.icon} alt="" width="36" height="36" /> : tool.symbol}</b><span>{tool.name}</span></div>)}</div></article>
          <article className="about-card education"><span className="card-label">04 / EDUCATION</span><div className="education-content"><div className="education-icon" aria-hidden="true">⌂</div><div><span className="degree-label">BACHELOR OF SCIENCE</span><h3>{profile.education.degree}</h3><p className="school">{profile.education.school}</p><p>{profile.education.specialization}</p></div></div><div className="education-footer"><span className="status-dot"></span> A foundation for what's next.</div></article>
        </div>
      </section>);
}

