import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiCodepen,
  SiLeetcode,
  SiGoogledocs
} from "react-icons/si";

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/yourusername",
    icon: SiGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: SiLinkedin,
  },
  // {
  //   name: "Instagram",
  //   href: "https://instagram.com/yourusername",
  //   icon: SiInstagram,
  // },
  {
    name: "CodePen",
    href: "https://codepen.io/yourusername",
    icon: SiCodepen,
  },
  // {
  //   name: "LeetCode",
  //   href: "https://leetcode.com/yourusername",
  //   icon: SiLeetcode,
  // },
  {
    name: "Resume",
    href: "/resume.pdf",
    icon: SiGoogledocs,
  },
];
