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

// Certificate Images
import jsCertImage from './assets/certificate_logo/js(Basic).png';
import sqlCertImage from './assets/certificate_logo/Sql(Basic).png';
import androidCertImage from './assets/certificate_logo/summer training in Android.jpg';
import nptelCloudImage from './assets/certificate_logo/nptel-cloud-computing.png';
import javaCertImage from './assets/certificate_logo/java_Basic.png';
import problemSolvingCertImage from './assets/certificate_logo/Problem_Solving.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'JavaScript (ES6+)', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'HTML5', logo: htmlLogo },
      { name: 'CSS3', logo: cssLogo },
      { name: 'React.js', logo: reactjsLogo },
      { name: 'Next.js', logo: nextjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', logo: nodejsLogo },
      { name: 'Express.js', logo: expressjsLogo },
      { name: 'Spring Boot', logo: springbootLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'REST APIs', logo: postmanLogo },
    ],
  },
  {
    title: 'Android',
    skills: [
      { name: 'Kotlin', logo: kotlinLogo },
      { name: 'Jetpack Compose', logo: jetpackComposeLogo },
      { name: 'Android Studio', logo: androidStudioLogo },
      { name: 'Room DB', logo: roomdbLogo },
      { name: 'Retrofit', logo: retrofitLogo },
      { name: 'MVVM', logo: mvvmLogo },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'Firebase Realtime DB', logo: firebaseLogo },
    ],
  },
  {
    title: 'Tools & Deployment',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'AWS', logo: null, isText: true },
      { name: 'Azure', logo: null, isText: true },
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
    grade: "CGPA: 7.0",
    desc: "Pursuing B.Tech in Computer Science and Engineering at LPU. Currently in 5th semester; focusing on Data Structures, DBMS, OS, Web Development and projects.",
    degree: "B.Tech - Computer Science and Engineering",
  },
  {
    id: 1,
    img: vpsLogo,
    school: "HSV Inter College, Ramgarhwa",
    date: "Apr 2021 - Mar 2022",
    grade: "Percentage: 70.17%",
    desc: "Completed Class XII from HSV Inter College, Ramgarhwa.",
    degree: "Intermediate (XII) - PCMB",
  },
  {
    id: 2,
    img: bsaLogo,
    school: "SGM High School, Ramgarhwa",
    date: "Apr 2019 - Mar 2020",
    grade: "Percentage: 66%",
    desc: "Completed Class X from SGM High School (BSEB).",
    degree: "Matriculation (X)",
  },
];

export const achievements = [
  {
    id: 0,
    title: "DSA Problem Solver",
    detail:
      "Regularly solve data structure and algorithm problems across LeetCode, GeeksForGeeks, and other platforms to sharpen logic and interview readiness.",
    metric: "300+ Problems",
  },
  {
    id: 1,
    title: "Hackathon & Team Collaboration",
    detail:
      "Participated in multiple hackathons and coding events, delivering prototypes with strong teamwork under deadlines.",
    metric: "4+ Events",
  },
  {
    id: 2,
    title: "Full Stack Real-World Builds",
    detail:
      "Built portfolio-grade projects across web and Android, from frontend architecture to backend APIs and data storage.",
    metric: "6+ Major Builds",
  },
  {
    id: 3,
    title: "Certifications & Continuous Learning",
    detail:
      "Consistently upskilling through certifications and hands-on implementation in modern development stacks.",
    metric: "5+ Certificates",
  },
];


export const projects = [
  {
    id: 0,
    title: "SportNova - AI-Powered Sports Performance Platform",
    description: "An AI-powered sports analytics platform to track and optimize athlete performance using real-time metrics and video uploads, with Google Gemini AI providing personalized training insights.",
    role: "Led full-stack development — built the React dashboard with interactive charts and animations, designed RESTful APIs in Node.js/Express, integrated Google Gemini AI for performance insights, and implemented JWT-based role access control.",
    challenges: "Handling large video uploads while keeping the UI responsive was a key challenge. I used Multer for streaming uploads, offloaded processing to background jobs, and implemented progress indicators on the frontend to improve UX.",
    impact: "Built a production-grade MERN + AI platform demonstrating integration of Generative AI into real-world applications, with multi-role access, video management, and data-driven athlete dashboards.",
    date: "Jun 2025 - Sep 2025",
    image: sportnovaLogo,
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Google Gemini AI", "JWT", "Tailwind CSS", "Framer Motion", "Multer", "Axios"],
    github: "https://github.com/storm309/sportnova",
    webapp: "#",
  },
  {
    id: 1,
    title: "AI Code Review Platform",
    description: "AI-powered code review platform built with Spring Boot, React, PostgreSQL, and Google Gemini API that analyzes source code, detects bugs, suggests improvements, and provides code quality scores.",
    role: "Built the Spring Boot backend with REST endpoints for code submission and analysis, integrated Google Gemini API for AI-powered review generation, designed the PostgreSQL schema, and developed the React frontend for code input and result display.",
    challenges: "Parsing and safely sending raw code to the Gemini API while avoiding prompt injection and handling large inputs was tricky. I implemented input sanitization and chunked large files before sending to the API.",
    impact: "Delivered a working AI code reviewer that can analyze code in multiple languages and return structured feedback — showcasing Java backend + AI integration skills in a full-stack context.",
    date: "Mar 2026",
    image: aiCodeReviewLogo,
    tags: ["React", "Java", "Spring Boot", "PostgreSQL", "Google Gemini API"],
    github: "https://github.com/storm309/ai-code-review-platform",
    webapp: "#",
  },
  {
    id: 2,
    title: "Risklens – Fintech Android App",
    description: "Developed an Android-based fintech application using Kotlin, enabling users to track stock performance and monitor investments in real time. Integrated third-party REST APIs to fetch live market data and financial news, ensuring accurate and up-to-date information.",
    role: "I designed and built the full Android application independently — from UI screens in Kotlin + Jetpack Compose to REST API integration and local caching with SQLite. I also set up Firebase for user authentication and real-time data sync.",
    challenges: "The biggest challenge was handling real-time stock data efficiently without draining battery. I solved this by implementing a background polling service with exponential backoff and caching responses locally with SQLite.",
    impact: "Delivered a fully functional fintech app with real-time market data, smooth UX across screen sizes, and reliable offline access — demonstrating end-to-end Android development capability.",
    date: "Jun 2025 - Aug 2025",
    image: risklensLogo,
    tags: ["Kotlin", "Android Studio", "REST APIs", "Firebase", "SQLite"],
    github: "https://github.com/storm309/risklens",
    webapp: "#",
  },
  {
    id: 3,
    title: "Java Library Management System",
    description: "A console-based Library Management System built using Core Java and MVC architecture. Demonstrates OOP concepts, collections framework, and real-world book management operations.",
    role: "Designed the full system architecture using MVC pattern, implemented all CRUD operations for books and members using Java Collections, and structured the codebase into clearly separated Model, View, and Controller layers.",
    challenges: "Ensuring data consistency across collections without a database required careful use of Java's Collections framework and implementing proper search/filter logic manually using streams and iterators.",
    impact: "Demonstrates strong grasp of OOP principles, clean code architecture, and Core Java proficiency — a solid foundation project showcasing software design skills beyond frameworks.",
    date: "Mar 2026",
    image: libraryMgmtLogo,
    tags: ["Java", "OOP", "MVC Pattern", "Collections Framework", "Core Java"],
    github: "https://github.com/storm309/java-library-management-system",
    webapp: "#",
  },
  {
    id: 4,
    title: "Chatbot - AI Travel Companion",
    description: "AI-powered Travel Companion Finder that connects travelers based on destination, interests, and dates. Built using HTML, CSS, JavaScript and integrated with Google Gemini API for intelligent travel planning and personalized itinerary suggestions.",
    role: "Architected and developed the complete frontend application using vanilla HTML, CSS, and JavaScript with a focus on responsive design. Integrated the Google Gemini API to handle natural language queries and generate intelligent travel suggestions. Designed the chat interface for seamless user interaction, implemented real-time message handling, and created dynamic suggestion cards for travel recommendations.",
    challenges: "Parsing natural language queries accurately and extracting structured information (destination, dates, interests) without a dedicated backend was challenging. I implemented a keyword-based extraction algorithm using regex patterns and semantic analysis. Managing API rate limits and handling long-running requests required implementing request queuing and timeout mechanisms.",
    impact: "Built a fully functional AI chatbot that demonstrates expertise in prompt engineering, API integration, and responsive UI design. The application successfully connects travelers with AI-powered recommendations, showcasing the practical application of generative AI in the travel domain. Achieved 100% mobile responsiveness across all devices.",
    date: "Feb 2026",
    image: aiCodeReviewLogo,
    tags: ["JavaScript", "HTML", "CSS", "Google Gemini API", "Responsive Design", "API Integration", "DOM Manipulation"],
    github: "https://github.com/storm309/chatbot",
    webapp: "#",
  },
  {
    id: 5,
    title: "Hibernate Banking Management System",
    description: "A comprehensive console-based Banking Management System built with Java, Hibernate (JPA), and MySQL. Demonstrates CRUD operations and entity relationship mappings such as One-to-Many and Many-to-Many, providing a robust backend for managing customer accounts, branches, loans, and transactions.",
    role: "Designed and implemented the complete backend system using Java and Hibernate ORM for seamless database interaction. Created well-structured entity models with complex relationships, developed CRUD operations for all banking entities, and established MySQL database schema with proper constraints. Implemented business logic for account management, transaction processing, and loan management.",
    challenges: "Managing complex entity relationships and lazy loading issues in Hibernate required careful configuration and understanding of JPA lifecycle. Ensuring data consistency across multiple transactions with proper exception handling and rollback mechanisms was critical for a banking system.",
    impact: "Built a production-ready banking backend system demonstrating mastery of Hibernate ORM, JPA annotations, database design, and enterprise-level application architecture. Successfully showcases ability to work with complex database operations and maintain data integrity in financial systems.",
    date: "Mar 2026",
    image: libraryMgmtLogo,
    tags: ["Java", "Hibernate", "JPA", "MySQL", "ORM", "CRUD", "Banking Applications"],
    github: "https://github.com/storm309/hibernate-banking-management-system",
    webapp: "#",
  },
];

// Certificate Logos & PDFs
// Import your certificate images/PDFs here
// For images: import cert1Logo from './assets/certificate_logo/certificate1.png';
// For PDFs: import cert1PDF from './assets/certificate_logo/certificate1.pdf';

export const certificates = [
  {
    id: 10,
    title: "Cloud Computing",
    issuer: "NPTEL (IIT Kharagpur)",
    date: "Apr 2025",
    credentialId: "NPTEL25CS11S1537302720",
    image: nptelCloudImage,
    pdf: null,
    tags: ["Cloud Computing", "AWS", "Azure", "Infrastructure"],
  },
  {
    id: 1,
    title: "Android Development with Kotlin",
    issuer: "Google Developers",
    date: "15 Jul 2025",
    credentialId: "GD-ADK-2025-109",
    image: androidCertImage,
    pdf: null,
    tags: ["Kotlin", "Jetpack Compose", "Android Studio"],
  },
  {
    id: 8,
    title: "JavaScript (Basic)",
    issuer: "HackerRank",
    date: "19 Sep 2025",
    credentialId: "HR-JS-BASIC",
    image: jsCertImage,
    pdf: "/certificates/js-basic-certificate.pdf",
    tags: ["JavaScript", "ES6", "Programming Basics"],
  },
  {
    id: 9,
    title: "SQL (Basic)",
    issuer: "HackerRank",
    date: "Sep 19, 2025",
    credentialId: "O5E498AB97A1",
    image: sqlCertImage,
    pdf: "/certificates/sql-basic-certificate.pdf",
    tags: ["SQL", "Databases", "Querying"],
  },
  {
    id: 2,
    title: "Java (Basic)",
    issuer: "HackerRank",
    date: "16 Mar 2026",
    credentialId: "HR-JAVA-BASIC",
    image: javaCertImage,
    pdf: "/certificates/java-basic-certificate.pdf",
    tags: ["Java", "OOP", "Programming Basics"],
  },
  {
    id: 3,
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "16 Mar 2026",
    credentialId: "HR-PS-BASIC",
    image: problemSolvingCertImage,
    pdf: "/certificates/problem-solving-certificate.pdf",
    tags: ["Problem Solving", "Algorithms", "Logic"],
  },
];