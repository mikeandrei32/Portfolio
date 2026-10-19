const certificates = [
  {
    title: 'Inventi Hackathon Challenge',
    issuer: 'Inventi',
    date: 'September 29, 2025',
    description: 'Participation in the Property Management Solution for a Smart City hackathon challenge.',
    recipient: 'Mike Andrei Gomez',
    image: '/images/certificates/inventi.png',
    width: 1224,
    height: 864,
  },
  {
    title: 'Hackercup 2025',
    issuer: 'La Salle Computer Society',
    date: 'August 15–16, 2025',
    description: 'Team participation in developing an innovative solution at Hackercup 2025.',
    recipient: 'Team Git-kids',
    image: '/images/certificates/hackercup.jpg',
    width: 1024,
    height: 726,
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="certificates-section section" aria-labelledby="certificates-heading">
      <p className="eyebrow">Certificates</p>
      <h2 id="certificates-heading">Learning along the way.</h2>
      <p className="certificates-intro">Experiences that help me grow as a developer.</p>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {certificates.map(certificate => (
          <article className="certificate-card" key={certificate.title}>
            <a href={certificate.image} target="_blank" rel="noopener noreferrer" aria-label={`View ${certificate.title} certificate (opens in a new tab)`}>
              <img className="certificate-image" src={certificate.image} alt={`${certificate.title} certificate of participation awarded to ${certificate.recipient}`} width={certificate.width} height={certificate.height} loading="lazy" />
            </a>
            <div className="certificate-details">
              <span className="card-label">CERTIFICATE OF PARTICIPATION</span>
              <h3>{certificate.title}</h3>
              <p className="certificate-meta">{certificate.issuer} · {certificate.date}</p>
              <p>{certificate.description}</p>
              <p className="certificate-recipient">Awarded to {certificate.recipient}</p>
              <a className="certificate-link" href={certificate.image} target="_blank" rel="noopener noreferrer" aria-label={`View full ${certificate.title} certificate (opens in a new tab)`}>View certificate <span aria-hidden="true">↗</span></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
