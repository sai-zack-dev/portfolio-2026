import {
  SiPhp,
  SiNestjs,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiElectron,
  SiGit,
  SiDocker,
  SiFigma,
} from "react-icons/si";
import { FcLinux } from "react-icons/fc";

/**
 * File Tree (Left Panel)
 */
export const techStackTree = {
  initialSelectedId: "7",
  initialExpandedItems: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13"
  ],
  frameworks: {
    backend: [
      { id: "3", name: "laravel.php", icon: SiPhp },
      { id: "4", name: "nest.js", icon: SiNestjs },
    ],
    frontend: [
      { id: "6", name: "react.js", icon: SiReact },
      { id: "7", name: "tailwind.css", icon: SiTailwindcss },
      { id: "8", name: "next.js", icon: SiNextdotjs },
    ],
    mobile: [{ id: "11", name: "react-native.js", icon: SiReact }],
    desktop: [{ id: "13", name: "electron.js", icon: SiElectron }],
  },
};

/**
 * Terminal (Languages Panel)
 */
export const techStackLanguages = [
  "✔ PHP [Laravel full-stack development]",
  "✔ JS/TS [Node.js full-stack development]",
  "✔ SQL [DBMS, queries, and optimization]",
  "✔ Python [Learning DSA and scripting]",
  "✔ Golang [Currently Learning]",
];

/**
 * Tools (Bottom Cards)
 */
export const techStackTools = [
  { name: "Git", icon: SiGit, className: "text-orange-500" },
  { name: "Linux", icon: FcLinux },
  { name: "Docker", icon: SiDocker, className: "text-blue-500" },
  { name: "Figma", icon: SiFigma },
];
