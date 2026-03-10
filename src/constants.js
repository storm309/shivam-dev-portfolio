// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Android-related logos
import kotlinLogo from './assets/tech_logo/kotlin.png';
import jetpackComposeLogo from './assets/tech_logo/jetpackcompose.png';
import androidStudioLogo from './assets/tech_logo/androidstudio.png';
import roomdbLogo from './assets/tech_logo/roomdb.png';
import retrofitLogo from './assets/tech_logo/retrofit.png';
import mvvmLogo from './assets/tech_logo/mvvm.png';

// Company & Education Logos
import projectLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonLogo from './assets/company_logo/newtonschool_logo.png';
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logos
import risklensLogo from './assets/work_logo/cs_prep.png';
import sportnovaLogo from './assets/work_logo/cm.png';
import aiCodeReviewLogo from './assets/work_logo/github_det.png';
import libraryMgmtLogo from './assets/work_logo/bookshop.png';


export const SkillsInfo = [
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript (ES6+)', logo: javascriptLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'Kotlin', logo: kotlinLogo },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'HTML & CSS', logo: htmlLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'Node.js', logo: nodejsLogo },
      { name: 'React.js', logo: reactjsLogo },
    ],
  },
  {
    title: 'Tools/Platforms',
    skills: [
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'Spring Boot', logo: springbootLogo },
      { name: 'Git & GitHub', logo: gitLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Android Studio', logo: androidStudioLogo },
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      { name: 'Team Collaboration', logo: null },
      { name: 'Adaptability', logo: null },
      { name: 'Leadership', logo: null },
      { name: 'Quick Learning', logo: null },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: glaLogo,
    role: "Hackathon Participant",
    company: "LPU Hackathons & Coding Events",
    date: "2025 - Present",
    desc: "Actively participated in multiple hackathons and coding competitions at LPU, collaborating in teams to design and build working prototypes under tight deadlines. Gained hands-on experience in rapid prototyping, team coordination, and delivering end-to-end solutions.",
    skills: ["React", "Node.js", "MongoDB", "Teamwork", "Problem Solving"],
  },
  {
    id: 1,
    img: projectLogo,
    role: "Full Stack Developer",
    company: "Collaborative Projects with Peers",
    date: "2025 - Present",
    desc: "Worked with a team of friends on real-world full stack projects including an AI-powered sports platform (SportNova) and a fintech Android app (Risklens). Took ownership of both frontend and backend modules, integrated REST APIs, and followed industry practices like MVC architecture and JWT authentication.",
    skills: ["MERN Stack", "Kotlin", "Firebase", "REST APIs", "JWT", "Git & GitHub"],
  },
  {
    id: 2,
    img: agcLogo,
    role: "Android Developer",
    company: "Self-Initiated Android Projects",
    date: "2025 - Present",
    desc: "Independently built Android applications using Kotlin and Android Studio, implementing features like real-time data sync with Firebase, SQLite local storage, and REST API integration. Focused on clean architecture, smooth UX, and performance optimization across various screen sizes.",
    skills: ["Kotlin", "Android Studio", "Firebase", "SQLite", "REST APIs", "MVVM"],
  },
];



export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "Lovely Professional University (LPU), Phagwara",
    date: "Aug 2023 - Present",
    grade: "CGPA: N/A",
    desc: "Pursuing B.Tech in Computer Science and Engineering at LPU. Currently in 5th semester; focusing on Data Structures, DBMS, OS, Web Development and projects.",
    degree: "B.Tech - Computer Science and Engineering",
  },
  {
    id: 1,
    img: vpsLogo,
    school: "HSV Inter College, Ramgarhwa",
    date: "Apr 2021 - Mar 2022",
    grade: "Percentage: 70%",
    desc: "Completed Class XII from HSV Inter College, Ramgarhwa.",
    degree: "Intermediate (XII) - PCMB",
  },
  {
    id: 2,
    img: bsaLogo,
    school: "SGM High School, Ramgarhwa",
    date: "Apr 2019 - Mar 2020",
    grade: "Percentage: 70%",
    desc: "Completed Class X from SGM High School (BSEB).",
    degree: "Matriculation (X)",
  },
];


export const projects = [
  {
    id: 0,
    title: "Risklens – Fintech Android App",
    description: "Developed an Android-based fintech application using Kotlin, enabling users to track stock performance and monitor investments in real time. Integrated third-party REST APIs to fetch live market data and financial news, ensuring accurate and up-to-date information. Improved user engagement and decision-making by delivering real-time insights and a smooth, responsive user experience.",
    date: "Jun 2025 - Aug 2025",
    image: risklensLogo,
    tags: ["Kotlin", "Android Studio", "REST APIs", "Firebase", "SQLite"],
    github: "https://github.com/storm309/risklens",
    webapp: "#",
  },
  {
    id: 1,
    title: "SportNova - AI-Powered Sports Performance Platform",
    description: "Developed an AI-powered sports analytics platform to track and optimize athlete performance using real-time metrics and video uploads. Built a responsive dashboard with React, Tailwind CSS, and Framer Motion featuring interactive charts and modern UI design. Integrated Google Gemini AI to provide personalized training insights, player comparisons, and intelligent role-based recommendations. Implemented JWT authentication, role-based access control, RESTful APIs, and MongoDB for secure data and video management.",
    date: "Jun 2025 - Sep 2025",
    image: sportnovaLogo,
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Google Gemini AI", "JWT", "Tailwind CSS", "Framer Motion", "Multer", "Axios"],
    github: "https://github.com/storm309/sportnova",
    webapp: "#",
  },
  {
    id: 2,
    title: "AI Code Review Platform",
    description: "AI-powered code review platform built with Spring Boot, React, PostgreSQL, and Google Gemini API that analyzes source code, detects bugs, suggests improvements, and provides code quality scores.",
    date: "Mar 2026",
    image: aiCodeReviewLogo,
    tags: ["React", "Java", "Spring Boot", "PostgreSQL", "Google Gemini API"],
    github: "https://github.com/storm309/ai-code-review-platform",
    webapp: "#",
  },
  {
    id: 3,
    title: "Java Library Management System",
    description: "A console-based Library Management System built using Core Java and MVC architecture. Demonstrates OOP concepts, collections framework, and real-world book management operations.",
    date: "Mar 2026",
    image: libraryMgmtLogo,
    tags: ["Java", "OOP", "MVC Pattern", "Collections Framework", "Core Java"],
    github: "https://github.com/storm309/java-library-management-system",
    webapp: "#",
  },
];