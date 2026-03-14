import {
  genesis,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  acm,
  nss,
  medicate,
  AgriTech,
  simon,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Mern Full Stack Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Tech Member",
    company_name: "Genesis Club",
    icon: genesis,
    iconBg: "#000000",
    date: "January 2025 - February 2026",
    points: [
      "Developing and maintaining web applications and other related technologies.",
      "Collaborating with cross-functional teams including designers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Creative Head",
    company_name: "ACM Club",
    icon: acm,
    iconBg: "#ffffff",
    date: "July 2025 - Present",
    points: [
      "Leading the creative vision and design strategy for projects and digital content.",
"Collaborating with designers, developers, and marketing teams to produce innovative and engaging visuals.",
"Overseeing branding, UI/UX elements, and ensuring consistency across all platforms.",
"Generating creative ideas and guiding the team to deliver impactful and high-quality designs."
    ],
  },
  {
    title: "Member",
    company_name: "National Service Scheme",
    icon: nss,
    iconBg: "#010207",
    date: "September 2024 - Present",
    points: [
      "Participating in community service initiatives and social welfare activities organized by the NSS club.",
"Collaborating with team members to plan and execute events focused on social awareness and public service.",
"Contributing to volunteer programs such as cleanliness drives, awareness campaigns, and community outreach.",
"Supporting the organization and coordination of NSS events to promote leadership, teamwork, and social responsibility.",
    ],
  },
];

const projects = [
  {
    name: "Medicate",
    description:
      "Medicate is an advanced web application designed to be your go-to guide for medical information. It allows users to search for medicines (both brands and generic drugs) and diseases to get clear, reliable, and easy-to-understand descriptions.",
    tags: [
      {
        name: "Gemini API",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
    ],
    image: medicate,
    source_code_link: "https://github.com/Aditya425148/Medicate",
  },
  {
    name: "Agritech",
    description:
      "Indian Agriculture Analysis System is a full-stack agricultural data analysis system that provides state-wise crop production insights using PostgreSQL and interactive dashboards.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: AgriTech,
    source_code_link: "https://github.com/Aditya425148/Agritech",
  },
  {
    name: "Simon Game",
    description:
      "A fun and interactive web-based memory game inspired by the classic Simon game. Built using HTML, CSS, JS, and jQuery. Players must remember and repeat an increasingly complex sequence of colors to win.",
    tags: [
      {
        name: "JQuery",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
    ],
    image: simon,
    source_code_link: "https://github.com/Aditya425148/SIMON_GAME",
  },
];

export { services, technologies, experiences, projects };
