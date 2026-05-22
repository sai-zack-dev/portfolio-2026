export type ExperienceItem = {
  date: string;
  title: string;
  company: string;
  location: string;
  content: string;
};

export const experiences: ExperienceItem[] = [
  {
    date: "Present",
    title: "Software Developer (Freelance)",
    company: "Self-employed",
    location: "Remote",
    content:
      "Delivering full-stack web applications with focus on scalable architecture, modern UI/UX, and end-to-end product development using React, Next.js, Node.js, and Laravel ecosystems.",
  },
  {
    date: "2022 – 2024",
    title: "Full-stack Software Engineer",
    company: "Myanmar Software Integrated Solutions (MSIS)",
    location: "Yangon, Myanmar",
    content:
      "Developed enterprise-grade web platforms using Laravel, React, and REST APIs, contributing to systems serving 500+ users while handling frontend, backend, deployment, and production maintenance.",
  },
  {
    date: "Early 2022",
    title: "Solution Architect & Quality Assurance Intern",
    company: "Myanmar Software Integrated Solutions (MSIS)",
    location: "Yangon, Myanmar",
    content:
      "Supported ERP solution planning, client workflow analysis, and enterprise application testing while collaborating with development teams on system requirements, quality assurance, and implementation processes.",
  },
  {
    date: "Before 2022",
    title: "Graphic Designer (Freelance)",
    company: "Self-employed",
    location: "Remote",
    content:
      "Created branding materials, digital assets, and UI concepts, building a strong foundation in visual design, user experience, and creative problem-solving.",
  },
];
