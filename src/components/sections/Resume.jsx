import TimelineStrip from './TimelineStrip'

const EDUCATION = [
  {
    type: 'education',
    icon: 'fas fa-graduation-cap',
    title: "Bachelor's Degree (Digital Business)",
    date: '2023 — Present',
    sortYear: 2023,
    subtitle: 'Undergraduate Program',
    location: 'Siam Technological College (Siamtech)',
    points: [
      'Focusing on digital business strategies and technologies',
      'Learning modern business practices and digital transformation',
    ],
  },
  {
    type: 'education',
    icon: 'fas fa-certificate',
    title: 'High Vocational Certificate (Digital Business Technology)',
    date: '2023 — 2025',
    sortYear: 2023,
    subtitle: 'Advanced Diploma',
    location: 'The Pattaya Redemptorist Technological College for People with Disabilities',
    points: [
      'Specialized in digital business technology',
      'Advanced programming and system development',
    ],
  },
  {
    type: 'education',
    icon: 'fas fa-certificate',
    title: 'Vocational Certificate (Information Technology)',
    date: '2020 — 2022',
    sortYear: 2020,
    subtitle: 'Diploma Program',
    location: 'The Pattaya Redemptorist Technological College for People with Disabilities',
    points: [
      'Foundation in information technology',
      'Programming fundamentals and system analysis',
    ],
  },
  {
    type: 'education',
    icon: 'fas fa-school',
    title: 'Elementary School',
    date: '2002 — 2018',
    sortYear: 2002,
    subtitle: 'Basic Education',
    location: 'Home Of Charity',
    points: [
      'Completed primary and secondary education',
      'Foundation for further academic pursuits',
    ],
  },
]

const WORK = [
  {
    type: 'work',
    icon: 'fas fa-shield-alt',
    title: 'SOSECURE Co.Ltd',
    date: '2025 — Present',
    sortYear: 2025,
    subtitle: 'Cybersecurity Consultant',
    location: 'Bangkok, Thailand',
    points: [
      'Providing cybersecurity consulting services to clients',
      'Assessing and improving security infrastructure',
      'Developing security policies and procedures',
    ],
  },
  {
    type: 'work',
    icon: 'fas fa-motorcycle',
    title: 'E-HONGMODDAENG MOTORBIKE COMPANY LIMITED',
    date: '2025 — Aug 2026',
    sortYear: 2025,
    subtitle: 'Programmer',
    location: 'Maha Sarakham, Thailand',
    points: [
      'Developing software solutions for motorbike business operations',
      'Maintaining and updating existing systems',
      'Collaborating with team to deliver quality software products',
    ],
  },
  {
    type: 'work',
    icon: 'fas fa-shield-alt',
    title: 'National Cyber Security Agency (NCSA)',
    date: 'Nov 2024 — Feb 2025',
    sortYear: 2024.9,
    subtitle: 'Intern',
    location: 'Bangkok, Thailand',
    points: [
      'Developer of a cyber threat intelligence tracking system using AI and NLP to support cyber intelligence operations',
    ],
  },
  {
    type: 'work',
    icon: 'fas fa-laptop-code',
    title: 'Freelancer',
    date: '2023 — 2025',
    sortYear: 2023,
    subtitle: 'Full Stack Developer',
    location: 'Pattaya',
    points: [
      'Developing web applications using modern technologies',
      'Working with clients to deliver custom solutions',
    ],
  },
  {
    type: 'work',
    icon: 'fas fa-building',
    title: 'TSS Social Enterprise Company',
    date: '2021 — 2022',
    sortYear: 2021,
    subtitle: 'Intern',
    location: 'Pattaya',
    points: [
      'Development of the Thai postal system',
      'Gained experience in enterprise software development',
    ],
  },
]

const TIMELINE = [...EDUCATION, ...WORK].sort((a, b) => a.sortYear - b.sortYear)

export default function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Resume</h2>
          <p>Check My Resume</p>
        </div>

        <TimelineStrip items={TIMELINE} />
      </div>
    </section>
  )
}
