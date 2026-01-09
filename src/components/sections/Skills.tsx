import { 
  SiDotnet, SiSharp, SiTypescript, SiJavascript, SiPython,
  SiReact, SiTailwindcss, SiHtml5,
  SiNodedotjs, SiExpress, SiPostgresql, SiMysql, SiMongodb,
  SiAmazon, SiDocker, SiPostman,
  SiCplusplus
} from 'react-icons/si';
import { VscAzure, VscLock, VscJson, VscCode, VscServerProcess, VscDatabase } from 'react-icons/vsc';
import type { IconType } from 'react-icons';

interface Skill {
  name: string;
  description: string;
  icon: IconType;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

// Map skills to their respective icons
const skillIconMap: Record<string, IconType> = {
  '.NET 9 with C#': SiDotnet,
  'ASP.NET Core Web API': VscServerProcess,
  'Entity Framework Core': VscDatabase,
  'Clean Architecture': VscCode,
  'C#': SiSharp,
  'TypeScript': SiTypescript,
  'JavaScript': SiJavascript,
  'Python': SiPython,
  'C++': SiCplusplus,
  'React.js': SiReact,
  'Tailwind CSS': SiTailwindcss,
  'HTML5 & CSS3': SiHtml5,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  'PostgreSQL': SiPostgresql,
  'SQL Server': SiMysql,
  'MongoDB': SiMongodb,
  'AWS Cloud Services': SiAmazon,
  'Azure Active Directory': VscAzure,
  'Docker': SiDocker,
  'REST APIs': VscJson,
  'OAuth2 & OIDC': VscLock,
  'JWT Tokens': VscLock,
  'Postman': SiPostman,
};

const SkillIcon = ({ skill }: { skill: Skill }) => {
  const Icon = skillIconMap[skill.name];
  
  if (Icon) {
    return <Icon className="w-10 h-10 sm:w-12 sm:h-12" />;
  }
  
  // Fallback for skills without icons
  return (
    <div className="text-xl sm:text-2xl font-bold">
      {skill.name.substring(0, Math.min(3, skill.name.length)).toUpperCase()}
    </div>
  );
};

export function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Backend & Architecture',
      skills: [
        { name: '.NET 9 with C#', description: 'Building enterprise-grade backend systems and REST APIs', icon: SiDotnet },
        { name: 'ASP.NET Core Web API', description: 'Creating scalable, high-performance web services', icon: VscServerProcess },
        { name: 'Entity Framework Core', description: 'Modern ORM for database operations and migrations', icon: VscDatabase },
        { name: 'Clean Architecture', description: 'Implementing maintainable, testable code structures', icon: VscCode },
        { name: 'Python', description: 'Scripting, automation, and backend development', icon: SiPython },
      ]
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', description: 'Building interactive, component-based user interfaces', icon: SiReact },
        { name: 'TypeScript', description: 'Type-safe JavaScript for robust applications', icon: SiTypescript },
        { name: 'Tailwind CSS', description: 'Utility-first styling for modern, responsive designs', icon: SiTailwindcss },
        { name: 'HTML5 & CSS3', description: 'Semantic markup and modern styling techniques', icon: SiHtml5 },
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'PostgreSQL', description: 'Advanced relational database with complex queries', icon: SiPostgresql },
        { name: 'SQL Server', description: 'Enterprise-level database management and optimization', icon: SiMysql },
        { name: 'MongoDB', description: 'NoSQL database for flexible, document-based storage', icon: SiMongodb },
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS Cloud Services', description: 'EC2, S3, Lambda, RDS, DynamoDB for scalable infrastructure', icon: SiAmazon },
        { name: 'Azure Active Directory', description: 'OAuth2, OIDC authentication and authorization', icon: VscAzure },
        { name: 'Docker', description: 'Containerization for consistent deployments', icon: SiDocker },
      ]
    },
    {
      title: 'Additional Skills',
      skills: [
        { name: 'REST APIs', description: 'Designing and consuming RESTful web services', icon: VscJson },
        { name: 'OAuth2 & OIDC', description: 'Secure authentication and authorization flows', icon: VscLock },
        { name: 'JWT Tokens', description: 'Stateless authentication for distributed systems', icon: VscLock },
        { name: 'Postman', description: 'API testing, debugging, and documentation', icon: SiPostman },
      ]
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-muted/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Hover over each skill to learn more about how I use it
          </p>
        </div>

        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} style={{animation: `slideInUp 0.6s ease-out ${categoryIndex * 0.15}s forwards`, opacity: 0}}>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-7 md:mb-8 bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group relative h-40 sm:h-44 w-40 sm:w-44 perspective-1000"
                    style={{animationDelay: `${skillIndex * 0.1}s`}}
                  >
                    {/* Card container with flip */}
                    <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 cursor-pointer">
                      
                      {/* Front of card */}
                      <div className="absolute inset-0 w-full h-full backface-hidden">
                        <div className="w-full h-full bg-card border-2 border-border rounded-xl p-3 sm:p-4 group-hover:border-cyan-500 group-hover:shadow-xl group-hover:shadow-cyan-500/30 transition-all duration-500 overflow-hidden flex flex-col items-center justify-center">
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-teal-500/5 to-emerald-500/5 rounded-xl pointer-events-none" />
                          
                          {/* Shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                          
                          {/* Content */}
                          <div className="relative z-10 flex flex-col items-center space-y-2 text-center">
                            {/* Icon */}
                            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-cyan-500/10 to-teal-500/10 transition-all duration-500 group-hover:scale-110">
                              <div className="text-cyan-600 group-hover:text-cyan-500 transition-colors">
                                <SkillIcon skill={skill} />
                              </div>
                            </div>
                            
                            {/* Skill name */}
                            <h4 className="text-sm sm:text-base font-bold text-foreground group-hover:text-cyan-500 transition-colors px-2 leading-tight">
                              {skill.name}
                            </h4>
                            
                            {/* Hover hint */}
                            <p className="text-xs text-muted-foreground opacity-70">
                              Hover to flip
                            </p>
                          </div>
                          
                          {/* Bottom accent line */}
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 pointer-events-none" />
                        </div>
                      </div>
                      
                      {/* Back of card */}
                      <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                        <div className="w-full h-full bg-gradient-to-br from-cyan-500/10 via-teal-500/10 to-emerald-500/10 border-2 border-cyan-500 rounded-xl p-3 sm:p-4 shadow-xl shadow-cyan-500/30 overflow-hidden flex flex-col items-center justify-center">
                          {/* Content */}
                          <div className="relative z-10 flex flex-col items-center justify-center space-y-2 text-center h-full">
                            {/* Small icon */}
                            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-cyan-500/20">
                              <div className="text-cyan-600 scale-75">
                                <SkillIcon skill={skill} />
                              </div>
                            </div>
                            
                            {/* Skill name */}
                            <h4 className="text-xs sm:text-sm font-bold text-cyan-600">
                              {skill.name}
                            </h4>
                            
                            {/* Description */}
                            <p className="text-xs leading-relaxed text-foreground px-1 sm:px-2">
                              {skill.description}
                            </p>
                          </div>
                          
                          {/* Top accent line */}
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 pointer-events-none" />
                        </div>
                      </div>
                      
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
