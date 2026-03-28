export const PROJECTS = [
  {
    id: "p1",
    title: "Downtown Commercial Tower",
    category: "Commercial",
    status: "in-progress",
    image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200",
    description: "A 45-story commercial skyscraper featuring sustainable design and modern amenities.",
    completionDate: "Expected Q4 2026",
  },
  {
    id: "p2",
    title: "Riverside Residential Complex",
    category: "Residential",
    status: "in-progress",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200",
    description: "A complex of 4 residential buildings with community parks and waterfront access.",
    completionDate: "Expected Q2 2027",
  },
  {
    id: "p3",
    title: "Metro Hub Expansion",
    category: "Infrastructure",
    status: "completed",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    description: "Expansion of the central metropolitan transit hub, increasing capacity by 40%.",
    completionDate: "Completed Dec 2025",
  },
  {
    id: "p4",
    title: "Lakeside Medical Center",
    category: "Healthcare",
    status: "completed",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200",
    description: "State-of-the-art medical facility featuring a new trauma wing and research center.",
    completionDate: "Completed Mar 2024",
  },
];

export const VALUES = [
  {
    title: "Safety First",
    description: "We compromise on nothing when it comes to the safety of our workers, clients, and the public.",
    icon: "ShieldCheck",
  },
  {
    title: "Uncompromising Quality",
    description: "We build structures that stand the test of time through rigorous quality control and expert craftsmanship.",
    icon: "Award",
  },
  {
    title: "Integrity & Transparency",
    description: "Honest communication and ethical practices form the foundation of all our client relationships.",
    icon: "Handshake",
  },
  {
    title: "Sustainable Building",
    description: "We are committed to reducing our environmental impact through innovative, green construction methods.",
    icon: "Leaf",
  },
];

export const MOCK_INTERNSHIPS = [
  {
    id: "CERT-2025-001",
    internName: "Alex Johnson",
    role: "Project Management Intern",
    startDate: "May 15, 2025",
    endDate: "August 15, 2025",
    supervisor: "Sarah Miller, Senior PM",
    tasksCompleted: [
      "Assisted in coordinating daily site schedules for the Metro Hub Expansion.",
      "Conducted weekly safety compliance audits alongside the safety officer.",
      "Prepared progress reports and updated the project tracking dashboard.",
      "Participated in stakeholder meetings and recorded official minutes."
    ]
  },
  {
    id: "CERT-2025-002",
    internName: "Maria Garcia",
    role: "Civil Engineering Intern",
    startDate: "June 1, 2025",
    endDate: "September 1, 2025",
    supervisor: "David Chen, Lead Engineer",
    tasksCompleted: [
      "Performed structural load calculations for the Riverside Residential Complex.",
      "Reviewed and annotated CAD drawings for constructability issues.",
      "Assisted with soil testing and materials quality assurance on site.",
      "Collaborated with the design team to resolve RFI (Request for Information) queries."
    ]
  }
];