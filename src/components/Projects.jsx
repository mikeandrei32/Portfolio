const technologies = ['React', 'Tailwind CSS', 'ASP.NET Core', 'C#', 'EF Core', 'SQLite'];

export default function Projects() {
  return (
    <section id="projects" className="projects-section section" aria-labelledby="projects-heading">
      <p className="eyebrow">Projects</p>
      <h2 id="projects-heading">Ideas turned into applications.</h2>
      <p className="projects-intro">A closer look at what I’ve been building.</p>
      <article className="project-card">
        <figure className="project-preview">
          <a href="/images/projects/appointly-dashboard.png" target="_blank" rel="noopener noreferrer" aria-label="View Appointly dashboard screenshot (opens in a new tab)">
            <img src="/images/projects/appointly-dashboard.png" alt="Appointly patient dashboard with an upcoming clinic visit and appointment summary" loading="lazy" />
          </a>
          <figcaption>Patient dashboard · Demo data</figcaption>
        </figure>
        <div className="project-details">
          <span className="card-label">FULL STACK WEB APPLICATION</span>
          <h3>Appointly</h3>
          <p className="project-subtitle">Clinic appointment booking, made simpler.</p>
          <p>A clinic appointment system where patients can book and cancel visits, while administrators manage appointments, weekly hours, and blocked dates.</p>
          <ul className="project-features">
            <li>Patient accounts and role-based administration</li>
            <li>Timezone-aware scheduling and double-booking protection</li>
            <li>Responsive patient and administrator dashboards</li>
          </ul>
          <ul className="project-technologies" aria-label="Technologies used">
            {technologies.map(technology => <li key={technology}>{technology}</li>)}
          </ul>
          <a className="project-link" href="https://github.com/mikeandrei32/Appointly" target="_blank" rel="noopener noreferrer" aria-label="View Appointly on GitHub (opens in a new tab)">
            <img src="/images/github.svg" alt="" width="18" height="18" />
            View on GitHub <span aria-hidden="true">↗</span>
          </a>
          <p className="project-status">Local demo · Not yet deployed</p>
        </div>
      </article>
    </section>
  );
}
