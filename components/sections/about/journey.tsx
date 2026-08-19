import { Timeline } from "@/components/ui/timeline";

type JourneyEntry = {
  /** Award or milestone name, e.g. the degree or certificate title. */
  title: string;
  /** Awarding school, university or training provider. */
  org?: string;
  period?: string;
  description: string;
};

type JourneyPhase = {
  /** Label shown on the timeline rail. */
  title: string;
  heading: string;
  intro: string;
  entries: JourneyEntry[];
  skills: string[];
};

const phases: JourneyPhase[] = [
  {
    title: "2016 – 2020",
    heading: "Foundation",
    intro:
      "Started in technology through vocational and technical education, building fundamentals across programming, hardware, electronics and design.",
    entries: [
      {
        title: "High School Diploma in Information Technology",
        period: "2016 – 2018",
        description:
          "Began my technology journey by learning C++ basics, computer networking fundamentals, and hardware systems.",
      },
      {
        title: "Certificate in Industrial Technologies",
        org: "School of Industrial Training and Education (SITE) × FESTO",
        period: "2018 – 2019",
        description:
          "Explored electrical and electronic systems, Arduino projects, hydraulics and pneumatics, alongside automation, mechatronics, equipment maintenance and workplace safety standards.",
      },
      {
        title: "Certificate in Graphic Design (Professional)",
        period: "2018",
        description:
          "Formal design training across Adobe Photoshop, Illustrator, Canva and Figma, with an introduction to UI/UX principles — the beginning of my design side.",
      },
      {
        title: "Information Technology Major",
        org: "Government Technical Institute (GTI)",
        period: "2018 – 2020",
        description:
          "Focused on C++ programming, network fundamentals, computer troubleshooting, and hardware maintenance.",
      },
    ],
    skills: [
      "C++",
      "Networking",
      "Computer Hardware",
      "Arduino",
      "Electronics",
      "Troubleshooting",
      "Graphic Design",
    ],
  },

  {
    title: "2020 – 2022",
    heading: "Exploration",
    intro:
      "Transitioned into design and frontend development through self-study during the pandemic era.",
    entries: [
      {
        title: "Self-Directed Study — Design & Frontend Development",
        period: "2020 – 2022",
        description:
          "Spent countless hours exploring UI/UX design, graphic design, and modern web technologies while building personal projects and experimenting with creative interfaces.",
      },
      {
        title: "Finding a Direction",
        description:
          "This phase shaped my passion for combining design thinking with software engineering, and set the direction for everything that followed.",
      },
    ],
    skills: [
      "UI/UX",
      "Graphic Design",
      "HTML",
      "CSS",
      "JavaScript",
      "Frontend Development",
    ],
  },

  {
    title: "2022 – 2024",
    heading: "Professional Growth",
    intro:
      "Entered the industry as a full-time software engineer while continuing to study in parallel — production work by day, coursework in the evenings and at weekends.",
    entries: [
      {
        title: "Certificate in Web Fundamentals & PHP",
        org: "RIG",
        period: "2022",
        description:
          "Formal training across HTML/CSS, JavaScript, PHP, Laravel and database management systems — the foundation I entered professional work with.",
      },
      {
        title: "Certificate in Microsoft .NET Framework and C#",
        org: "RIG",
        period: "2022",
        description:
          "Covered C# .NET (Core) and ASP.NET alongside C, C++ and C# programming languages, broadening my range beyond the web stack.",
      },
      {
        title: "Hardware & Network Practical Workshop",
        org: "Optimum",
        period: "2023",
        description:
          "Hands-on PC assembly, operating systems, Windows Server, Active Directory Domain Services, and Cisco Packet Tracer.",
      },
      {
        title: "Diploma in Information Technology",
        org: "OTHM — Business Institute, Yangon Campus",
        period: "2023 – 2024 (part-time)",
        description:
          "Studied part-time while working full-time as a software engineer. The diploma offered comprehensive training in system design, programming and networking, strengthening the analytical thinking and problem-solving needed in dynamic IT environments.",
      },
      {
        title: "Full-Time Software Engineering",
        period: "2022 – 2024",
        description:
          "Built real-world applications, collaborated on production systems, and gained hands-on experience in backend development, APIs, server management and scalable architecture — bridging academic learning with practical engineering.",
      },
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Laravel",
      "PHP",
      "Linux",
      "System Architecture",
      "Git",
    ],
  },

  {
    title: "2024 – 2026",
    heading: "Cybersecurity Exposure",
    intro:
      "Relocated to Singapore to complete my degree, while continuing to grow as a software engineer.",
    entries: [
      {
        title: "BSc (Hons) Cybersecurity & Networks",
        org: "Teesside University — MDIS Campus, Singapore",
        period: "2024 – 2025",
        description:
          "Deepened technical expertise in cybersecurity and enterprise network management. Year 2 emphasised system security and infrastructure administration, while Year 3 expanded into advanced network defence, governance and enterprise-level management.",
      },
      {
        title: "Security-First Engineering",
        description:
          "Although cybersecurity is not my primary specialisation, the degree strengthened my understanding of secure system design, privacy, vulnerability analysis and the attacker mindset. I now apply security-first thinking when designing and developing software systems.",
      },
    ],
    skills: [
      "Network Security",
      "System Administration",
      "Security Monitoring",
      "Risk Management",
      "Incident Response",
      "Vulnerability Assessment",
      "Secure Software Design",
    ],
  },

  {
    title: "Now",
    heading: "AI/ML Focus",
    intro:
      "Currently focused on AI/ML and intelligent systems development.",
    entries: [
      {
        title: "Building Intelligent Systems",
        description:
          "Combining software engineering, system architecture and cybersecurity foundations with modern AI technologies to build scalable, intelligent and resilient products.",
      },
      {
        title: "Areas of Exploration",
        description:
          "Exploring AI applications, intelligent automation, anomaly detection systems, and human-centered software design.",
      },
    ],
    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Intelligent Systems",
      "Automation",
      "Natural Language Processing",
      "Full Stack Engineering",
      "System Design",
    ],
  },
];

export default function Journey() {
  const data = phases.map((phase) => ({
    title: phase.title,
    content: (
      <div>
        <p className="mb-3 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
          {phase.heading}
        </p>

        <p className="mb-4 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
          {phase.intro}
        </p>

        <div className="space-y-4 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
          {phase.entries.map((entry) => (
            <div key={entry.title}>
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
                {entry.title}
              </h4>
              {(entry.org || entry.period) && (
                <p className="text-[11px] md:text-xs text-neutral-500 dark:text-neutral-400">
                  {[entry.org, entry.period].filter(Boolean).join(" · ")}
                </p>
              )}
              <p className="mt-1">{entry.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {phase.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-neutral-300 px-3 py-1 text-xs dark:border-neutral-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ),
  }));

  return <Timeline data={data} />;
}
