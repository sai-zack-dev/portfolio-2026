import {
  SiGithub,
  SiLinkedin,
  SiCodepen,
  SiGoogledocs,
  SiBehance
} from "react-icons/si";

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/sai-zack-dev",
    icon: SiGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/sai-zay-linn-htet",
    icon: SiLinkedin,
  },
  {
    name: "CodePen",
    href: "https://codepen.io/SaiZack",
    icon: SiCodepen,
  },
  {
    name: "Resume",
    href: "/resume.pdf",
    icon: SiGoogledocs,
  },
  {
    name: "Behance",
    href: "https://www.behance.net/sai-zack-art",
    icon: SiBehance,
  },
];
