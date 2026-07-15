import TimelineItem from './TimelineItem'

const EDUCATION = [
  {
    icon: 'fas fa-graduation-cap',
    title: "Bachelor's Degree (Digital Business)",
    date: 'Currently Studying',
    subtitle: 'Undergraduate Program',
    location: 'Siam Technological College (Siamtech)',
    points: [
      'Focusing on digital business strategies and technologies',
      'Learning modern business practices and digital transformation',
    ],
    aosDelay: 100,
  },
  {
    icon: 'fas fa-certificate',
    title: 'High Vocational Certificate (Digital Business Technology)',
    date: '2023 - 2025',
    subtitle: 'Advanced Diploma',
    location: 'The Pattaya Redemptorist Technological College for People with Disabilities',
    points: [
      'Specialized in digital business technology',
      'Advanced programming and system development',
    ],
    aosDelay: 200,
  },
  {
    icon: 'fas fa-certificate',
    title: 'Vocational Certificate (Information Technology)',
    date: '2020 - 2022',
    subtitle: 'Diploma Program',
    location: 'The Pattaya Redemptorist Technological College for People with Disabilities',
    points: [
      'Foundation in information technology',
      'Programming fundamentals and system analysis',
    ],
    aosDelay: 300,
  },
  {
    icon: 'fas fa-school',
    title: 'Elementary School',
    date: '2002 - 2018',
    subtitle: 'Basic Education',
    location: 'Home Of Charity',
    points: [
      'Completed primary and secondary education',
      'Foundation for further academic pursuits',
    ],
    aosDelay: 400,
  },
]

const WORK = [
  {
    icon: 'fas fa-shield-alt',
    title: 'SOSECURE Co.Ltd',
    date: '2025 - Present',
    subtitle: 'Cybersecurity Consultant',
    location: 'Bangkok, Thailand',
    points: [
      'Providing cybersecurity consulting services to clients',
      'Assessing and improving security infrastructure',
      'Developing security policies and procedures',
    ],
    aosDelay: 600,
  },
  {
    icon: 'fas fa-motorcycle',
    title: 'E-HONGMODDAENG MOTORBIKE COMPANY LIMITED',
    date: '2025 - Present',
    subtitle: 'Programmer',
    location: 'Maha Sarakham, Thailand',
    points: [
      'Developing software solutions for motorbike business operations',
      'Maintaining and updating existing systems',
      'Collaborating with team to deliver quality software products',
    ],
    aosDelay: 700,
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'NATIONAL CYBER SECURITY AGENCY (NCSA)',
    date: 'Nov 2024 - Feb 2025',
    subtitle: 'Intern',
    location: 'Bangkok, Thailand',
    points: [
      'Developer of a cyber threat intelligence tracking system using artificial intelligence (AI) models and natural language processing (NLP) to support cyber intelligence operations.',
    ],
    aosDelay: 800,
  },
  {
    icon: 'fas fa-laptop-code',
    title: 'Freelancer',
    date: '2023 - 2025',
    subtitle: 'Full Stack Developer',
    location: 'Pattaya',
    points: [
      'Developing web applications using modern technologies',
      'Working with clients to deliver custom solutions',
    ],
    aosDelay: 900,
  },
  {
    icon: 'fas fa-building',
    title: 'TSS Social Enterprise Company',
    date: '2021 - 2022',
    subtitle: 'Internship',
    location: 'Pattaya',
    points: [
      'Development of the Thai postal system',
      'Gained experience in enterprise software development',
    ],
    aosDelay: 1000,
  },
]

export default function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Resume</h2>
          <p>Check My Resume</p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="timeline-section">
              <div className="section-header education-header" data-aos="fade-up">
                <h3><i className="fas fa-graduation-cap"></i> Education</h3>
                <div className="header-line"></div>
              </div>

              <div className="timeline-container education-timeline">
                {EDUCATION.map((item) => (
                  <TimelineItem key={item.title} type="education" {...item} />
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="timeline-section">
              <div className="section-header work-header" data-aos="fade-up" data-aos-delay="500">
                <h3><i className="fas fa-briefcase"></i> Work Experience</h3>
                <div className="header-line"></div>
              </div>

              <div className="timeline-container work-timeline">
                {WORK.map((item) => (
                  <TimelineItem key={item.title} type="work" {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
