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

  projects: [
    {
      name: "StockDaddy - Inventory Management System",
      description: "Modular .NET 9 backend system architected using Clean Architecture principles for inventory and operations management",
      technologies: ["React", "ASP.NET Core", "PostgreSQL", "TypeScript", ".NET 9", "EF Core", "Clean Architecture", "xUnit", "Moq"],
      link: "https://github.com/pixelpix13/StockDaddy-Admin",
      highlights: [
        "Architected modular backend using Clean Architecture for independent evolution of domain logic and infrastructure",
        "Implemented multi-tenant inventory system with tenant isolation and role-based access",
        "Built React + TypeScript admin UI integrated with backend REST APIs",
        "Wrote comprehensive unit tests using xUnit and Moq to validate business logic and reduce regression risk"
      ]
    },
    {
      name: "Bulky MVC - Full-Stack .NET Web API",
      description: "Complete full-stack application with .NET backend and React frontend, demonstrating modern architecture patterns",
      technologies: ["React.js", "ASP.NET Core", "Entity Framework", "TypeScript", ".NET 9", "C#", "Axios"],
      link: "https://github.com/pixelpix13/Bulky_MVC",
      highlights: [
        "Owned the architecture of a modular .NET 9 backend using ASP.NET Core, driving design decisions from requirements through testing",
        "Built a React + TypeScript frontend integrated with backend services via Axios, ensuring consistent API consumption patterns and predictable client–server interactions",
        "Developed a console-based diagnostic utility to trace API workflows and automate request validation, reducing manual debugging effort and improving developer productivity"
      ]
    },
    {
      name: "Plix - Netflix Clone",
      description: "Event-driven video streaming platform using AWS services for scalable video management and delivery",
      technologies: ["React", "Lambda", "DynamoDB", "CloudFront", "S3", "API Gateway", "EventBridge", "Cognito", "Tailwind CSS", "AWS"],
      link: "https://github.com/pixelpix13/Plix",
      highlights: [
        "Engineered event-driven pipeline for asynchronous video transcoding and metadata generation",
        "Implemented secure authentication with AWS Cognito and optimized delivery through CloudFront",
        "Built responsive React frontend with Tailwind CSS for enhanced user interaction"
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
