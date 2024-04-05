import { meta, shopify, tesla, Angrycat, SleepyCat } from "../assets/images";
import {
  car,
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  react,
  sass,
  tailwindcss,
  threads,
  twitter,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },

  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },

  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Independent Web Dev/Student",
    company_name: "Self-Employed",
    icon: Angrycat,
    iconBg: "#accbe1",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Independent",
    icon: SleepyCat,
    iconBg: "#b7e4c7",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/TheBlondieCoder",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/TheBlondieCoder",
  },
];
export const projects = [
  {
    iconUrl: react,
    theme: "btn-back-red",
    name: "Cat Snack Tracker",
    description:
      "Developed a web application that tracks and notifies users of how many times they fed their cats treats.",
    link: "https://github.com/TheBlondieCoder",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Mock Social Media App",
    description:
      'Created a full-stack replica of the popular discussion platform "Instagram," enabling users to post and engage..',
    link: "https://github.com/TheblondieCoder",
  },
];
