export default function TimelineItem({ type, icon, title, date, subtitle, location, points, aosDelay }) {
  return (
    <div className={`timeline-item ${type}`} data-aos="fade-up" data-aos-delay={aosDelay}>
      <div className={`timeline-marker ${type}-marker`}>
        <i className={icon}></i>
      </div>
      <div className="timeline-content">
        <div className="timeline-header">
          <h4>{title}</h4>
          <span className="timeline-date">{date}</span>
        </div>
        <h5>{subtitle}</h5>
        <p className="timeline-location">
          <i className={type === 'education' ? 'fas fa-university' : 'fas fa-map-marker-alt'}></i> {location}
        </p>
        <ul>
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
