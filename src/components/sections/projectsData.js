export const PROJECTS = [
  {
    id: '001',
    cover: 'cover-ioc-tool.png',
    title: 'IOC Lookup Tool',
    role: 'Cybersecurity Intern',
    timeline: '2023 — Bangkok',
    status: 'Deployed internally',
    short: 'เครื่องมือตรวจสอบ IOC เทียบกับฐานข้อมูล threat intelligence',
    lead: 'CLI/เว็บเครื่องมือที่รับ IP, hash, domain แล้วเทียบกับฐานข้อมูล threat intel หลายแหล่งพร้อมกัน สรุปผลเป็น risk score เดียวให้ทีมอ่านง่าย',
    features: [
      'query พร้อมกันหลาย threat intel API (VirusTotal, AbuseIPDB)',
      'normalize ผลลัพธ์เป็น risk score มาตรฐานเดียว',
      'cache ผลลัพธ์ลด rate limit จาก API ภายนอก',
    ],
    tags: ['Python', 'FastAPI', 'Redis', 'VirusTotal API', 'AbuseIPDB API'],
    links: [{ label: 'Internal tool — private' }],
  },
]
