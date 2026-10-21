const certificates = [
  {
    title: 'Foundations of Coding Back-End',
    issuer: 'Microsoft · Coursera',
    date: 'October 12, 2026',
    type: 'Course certificate',
    description: 'Completed the Foundations of Coding Back-End online course, authorized by Microsoft and offered through Coursera.',
    recipient: 'Mike Andrei M. Gomez',
    image: '/images/certificates/foundations-of-coding-back-end.png',
    document: '/images/certificates/foundations-of-coding-back-end.pdf',
    verification: 'https://coursera.org/verify/42FICDLR0EOM',
    width: 1200,
    height: 928,
  },
  {
    title: 'Introduction to Front-End Development',
    issuer: 'Meta · Coursera',
    date: 'September 29, 2025',
    type: 'Course certificate',
    description: 'Completed the Introduction to Front-End Development online course, authorized by Meta and offered through Coursera.',
    recipient: 'Mike Andrei M. Gomez',
    image: '/images/certificates/introduction-to-frontend-development.png',
    document: '/images/certificates/introduction-to-frontend-development.pdf',
    verification: 'https://coursera.org/verify/GRR40IP7FL0Y',
    width: 1200,
    height: 928,
  },
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
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        {certificates.map(certificate => (
          <article className="certificate-card" key={certificate.title}>
            <a href={certificate.document || certificate.image} target="_blank" rel="noopener noreferrer" aria-label={`View ${certificate.title} certificate (opens in a new tab)`}>
              <img className="certificate-image" src={certificate.image} alt={`${certificate.title} ${certificate.type || 'certificate of participation'} awarded to ${certificate.recipient}`} width={certificate.width} height={certificate.height} loading="lazy" />
            </a>
            <div className="certificate-details">
              <span className="card-label">{(certificate.type || 'Certificate of participation').toUpperCase()}</span>
              <h3>{certificate.title}</h3>
              <p className="certificate-meta">{certificate.issuer} · {certificate.date}</p>
              <div className="flex flex-wrap gap-x-4">
                <a className="certificate-link" href={certificate.document || certificate.image} target="_blank" rel="noopener noreferrer" aria-label={`View full ${certificate.title} certificate (opens in a new tab)`}>{certificate.document ? 'View PDF' : 'View certificate'} <span aria-hidden="true">↗</span></a>
                {certificate.verification && <a className="certificate-link" href={certificate.verification} target="_blank" rel="noopener noreferrer" aria-label={`Verify ${certificate.title} on Coursera (opens in a new tab)`}>Verify on Coursera <span aria-hidden="true">↗</span></a>}
              </div>
              <details className="certificate-more">
                <summary>Details</summary>
                <p>{certificate.description}</p>
                <p className="certificate-recipient">Awarded to {certificate.recipient}</p>
              </details>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
