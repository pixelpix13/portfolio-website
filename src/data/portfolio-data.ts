export const portfolioData = {
  personal: {
    name: "Purav Jignesh Patel",
    title: "Software Engineer",
    email: "purav13pat@gmail.com",
    phone: "+1 281-309-1557",
    location: "Houston, Texas",
    links: {
      linkedin: "https://www.linkedin.com/in/purav-patel-7834271b6/",
      github: "https://github.com/pixelpix13",
    }
  },

  summary: "Software Engineer with expertise in .NET, ASP.NET Core, and cloud technologies. Experienced in modernizing legacy systems, building scalable full-stack applications, and implementing secure authentication systems. Proven track record of optimizing performance and reducing development time while working with modern technologies like React, TypeScript, AWS, and Azure AD. Authorized to work in the U.S. until May 2029 under F-1 OPT/STEM OPT.",

  skills: {
    coretech: [".NET 9", "ASP.NET Core", "C#", "EF Core", "REST APIs", "Azure AD", "OAuth2/OIDC", "JWT", "Docker"],
    backend: ["ASP.NET Core", "EF Core", "LINQ", "Async/Await", "Dependency Injection", "PostgreSQL", "SQL Server", "MongoDB", "Sybase SQL"],
    frontend: ["React", "TypeScript", "Tailwind CSS", "Axios"],
    cloud: ["AWS EC2", "AWS S3", "AWS Lambda", "API Gateway", "DynamoDB", "RDS", "CloudFront", "IAM", "Cognito", "EventBridge"],
    architecture: ["Clean Architecture", "SOLID Principles", "Repository Pattern", "Multi-tenant Systems", "Event-Driven Architecture"]
  },

  experience: [
    {
      title: "Software Engineer (Instructional Assistant)",
      company: "University of Houston",
      location: "Houston, Texas, USA",
      period: "September 2024 - Present",
      description: [
        "Modernized a legacy .NET Framework 4.7 WebForms system to .NET 9 and ASP.NET Core, reducing average page load times by ~40% and eliminating long-standing performance bottlenecks",
        "Migrated monolithic WebForms (.aspx) modules to a React + TypeScript single-page application integrated with ASP.NET Core REST APIs, improving UI responsiveness and reducing feature development time by ~30%",
        "Refactored authentication and authorization flows using Azure AD, OAuth2/OIDC, and JWT, reducing authentication-related production issues by ~25% while strengthening role-based access controls",
        "Designed and implemented a multi-role tutoring platform (Admin, Tutor, Student, Staff) using ASP.NET Core, C#, EF Core, PostgreSQL, React, and TypeScript, supporting 10,000+ students, tutors, and staff across the university",
        "Optimized EF Core LINQ queries using indexing and pagination while collaborating with another engineer to identify and resolve performance bottlenecks"
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Skillmine Technologies Consulting Pvt. Ltd.",
      location: "Mumbai, Maharashtra, India",
      period: "December 2023 - April 2024",
      description: [
        "Built internal React + TypeScript web applications integrated with REST APIs, automating enterprise workflows and reducing manual processing time by ~20%",
        "Refactored authentication workflows using SAML, OAuth2, and OIDC, reducing authentication-related defects by ~25% across frontend systems",
        "Diagnosed and resolved critical production defects across frontend and backend services by collaborating with cross-functional teams, reducing service downtime by ~35%"
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Meditab Software (India) Pvt. Ltd.",
      location: "Ahmedabad, Gujarat, India",
      period: "December 2022 - April 2023",
      description: [
        "Developed and enhanced healthcare workflow modules using PowerBuilder and Sybase SQL, reducing execution time of core workflows by ~15%",
        "Optimized Sybase SQL queries and database indexing, reducing execution time of critical reports and transactional operations by ~20–30%"
      ]
    }
  ],

  // ── Featured projects (shown as large case studies with screenshots) ─────
  featuredProjects: [
    {
      number: "01",
      name: "UH Tutoring Platform",
      subtitle: "University of Houston · Enterprise Internal Tool",
      description:
        "A production multi-role tutoring platform serving 10,000+ students, tutors, and staff at UH. Built from scratch on ASP.NET Core, React, and PostgreSQL — replacing a legacy .NET Framework WebForms system.",
      technologies: ["ASP.NET Core", "React", "TypeScript", "PostgreSQL", "EF Core", "Azure AD", "OAuth2/OIDC", "JWT"],
      highlights: [
        "Multi-role RBAC: Admin, Tutor, Student, Staff portals",
        "Live tutoring queue with real-time session tracking",
        "~40% reduction in page load times after legacy migration",
        "~25% fewer auth-related production issues post-refactor",
      ],
      link: undefined as string | undefined,
      images: [
        "./images/uh/UH login.png",
        "./images/uh/Uh tutoring login.png",
        "./images/uh/Uh tutoring admin portal.png",
        "./images/uh/Uh tutoring admin portal_2.png",
        "./images/uh/Uh admin portal_2.png",
        "./images/uh/uh tutoring tutor portal.png",
        "./images/uh/uh tutoring student portal.png",
      ],
    },
    {
      number: "02",
      name: "StockDaddy",
      subtitle: "Personal Project · Inventory Management System",
      description:
        "A modular, multi-tenant full-stack inventory and operations management system built with Clean Architecture principles. Supports role-based access, real-time analytics, and POS integration.",
      technologies: [".NET 9", "ASP.NET Core", "React", "TypeScript", "PostgreSQL", "EF Core", "Clean Architecture", "xUnit", "Moq"],
      highlights: [
        "Multi-tenant isolation with per-tenant RBAC",
        "Executive dashboard with real-time revenue & stock alerts",
        "Clean Architecture — domain logic fully decoupled from infra",
        "Comprehensive unit test suite with xUnit and Moq",
      ],
      link: "https://github.com/pixelpix13/StockDaddy",
      images: [
        "./images/Stockdaddy/Login page.png",
        "./images/Stockdaddy/Admin dashboard.png",
        "./images/Stockdaddy/Dark Mode.png",
        "./images/Stockdaddy/settings.png",
        "./images/Stockdaddy/Rbac.png",
        "./images/Stockdaddy/Rbac finegraned.png",
      ],
    },
  ],

  // ── Supporting projects (shown as a smaller grid below) ─────────────────
  projects: [
    {
      name: "Bulky MVC - Full-Stack .NET Web API",
      description: "Complete full-stack application with .NET backend and React frontend, demonstrating modern architecture patterns",
      technologies: ["React.js", "ASP.NET Core", "Entity Framework", "TypeScript", ".NET 9", "C#", "Axios"],
      link: "https://github.com/pixelpix13/Bulky_MVC",
      highlights: [
        "Modular .NET 9 backend with ASP.NET Core",
        "React + TypeScript frontend via Axios",
        "Console diagnostic utility for API workflow tracing",
      ]
    },
    {
      name: "Plix - Netflix Clone",
      description: "Event-driven video streaming platform using AWS services for scalable video management and delivery",
      technologies: ["React", "Lambda", "DynamoDB", "CloudFront", "S3", "API Gateway", "EventBridge", "Cognito"],
      link: "https://github.com/pixelpix13/Plix",
      highlights: [
        "Event-driven pipeline for async video transcoding",
        "Secure auth with AWS Cognito + CloudFront delivery",
        "Responsive React + Tailwind CSS frontend",
      ]
    }
  ],

  education: [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Houston",
      location: "Houston, Texas, USA",
      period: "Expected May 2026",
      gpa: undefined,
      relevant: undefined
    },
    {
      degree: "Bachelor of Technology in Computer Engineering",
      institution: "Charotar University of Science and Technology",
      location: "Anand, Gujarat, India",
      period: "Graduated May 2023",
      gpa: "3.80/4.00",
      relevant: undefined
    }
  ],

  certifications: [
    {
      name: "AWS Certified Solutions Architect – Associate",
      url: "https://www.credly.com/badges/532bd91b-3c71-4d26-8592-4796829c3b93/public_url"
    }
  ]
};

export type PortfolioData = typeof portfolioData;
