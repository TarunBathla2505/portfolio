import {
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  git,
  java,
  tailwind,
  angular,
  docker,
  hibernate,
  springboot,
  amazon,
  sql,
  kubernates,
  volkswagen,
  
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
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Specialist (Angular & TypeScript)",
    icon: web,
  },
  {
    title: "Spring Boot & Java Developer",
    icon: backend,
  },
  {
    title: "Project Innovator & Mentor",
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
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Angular",
    icon: angular,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: kubernates,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "JPA/Hibernate",
    icon: hibernate,
  },
];


const experiences = [
  {
    title: "Software Engineer Trainee",
    company_name: "Volkswagen Group Technology Solutions India",
    icon: volkswagen,
    iconBg: "#1B4F72",
    date: "Nov 2023 - Present",
    points: [
      "Developed and deployed a dynamic filter search bar using Spring Boot Specification, enabling multi-criteria data querying and reducing response time by 30% using Executors framework.",
      "Created a read-only role functionality to enhance application security by allowing restricted user access.",
      "Built a comprehensive product tour using the Angular Shepherd library, improving user onboarding and experience.",
      "Developed and launched an expense tracking feature for 8D reports, improving operational efficiency with unit and integration tests.",
      "Debugged and resolved critical issues, enhancing system stability and overall application performance.",
      "Played a key role in delivering high-quality, scalable solutions for internal applications.",
    ],
  },
  {
    title: "Software Development Engineer Intern",
    company_name: "Amazon",
    icon: amazon,
    iconBg: "#FF9900",
    date: "Jan 2023 - June 2023",
    points: [
      "Developed RESTful web APIs to onboard dimension tables and notebook workflows for Amazon’s second-largest data lake.",
      "Resolved critical latency issues in a major service, preventing timeouts and ensuring smooth workflows.",
      "Migrated workflows from AWS EMR 5 to EMR 6, improving performance and operational efficiency.",
      "Designed and implemented dashboards to monitor deployments, enabling real-time success and failure tracking.",
      "Wrote clean, maintainable code and contributed to code reviews, unit testing, and integration testing for seamless deployments.",
      "Utilized technologies such as Spring Boot, Java, React, AWS, SQL, and relational databases.",
    ],
  }
];




export { services, technologies, experiences };