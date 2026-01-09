import { 
  SiDotnet, SiSharp, SiTypescript, SiJavascript, SiPython,
  SiReact, SiTailwindcss, SiHtml5, SiCss3,
  SiNodedotjs, SiExpress, SiPostgresql, SiMysql, SiMongodb,
  SiAmazon, SiDocker, SiAwslambda,
  SiCplusplus, SiNextdotjs
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import type { IconType } from 'react-icons';

// Map skills to their respective icons
const skillIconMap: Record<string, IconType> = {
  '.NET 9': SiDotnet,
  'ASP.NET Core': SiDotnet,
  'C#': SiSharp,
  'TypeScript': SiTypescript,
  'JavaScript': SiJavascript,
  'Python': SiPython,
  'C++': SiCplusplus,
  'React': SiReact,
  'Tailwind CSS': SiTailwindcss,
  'HTML/CSS': SiHtml5,
  'HTML': SiHtml5,
  'CSS': SiCss3,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  'PostgreSQL': SiPostgresql,
  'SQL Server': SiMysql,
  'MongoDB': SiMongodb,
  'AWS': SiAmazon,
  'Azure AD': VscAzure,
  'Azure': VscAzure,
  'Docker': SiDocker,
  'Lambda': SiAwslambda,
  'Next.js': SiNextdotjs,
};

const SkillIcon = ({ skill }: { skill: string }) => {
  const Icon = skillIconMap[skill];
  
  if (Icon) {
    return <Icon className="w-12 h-12" />;
  }
  
  // Fallback for skills without icons
  return (
    <div className="text-2xl font-bold">
      {skill.substring(0, Math.min(3, skill.length)).toUpperCase()}
    </div>
  );
};

export function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['.NET 9', 'C#', 'TypeScript', 'JavaScript', 'Python', 'C++']
    },
    {
      title: 'Front-End',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'Next.js']
    },
    {
      title: 'Back-End and Databases',
      skills: ['ASP.NET Core', 'PostgreSQL', 'SQL Server', 'MongoDB']
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Azure', 'Docker', 'Lambda']
    },
    {
      title: 'Other Tech Skills',
      skills: ['REST APIs', 'OAuth2/OIDC', 'JWT', 'Clean Architecture', 'EF Core']
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
            My Skills
          </h2>
        </div>

        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index} style={{animation: `slideInUp 0.6s ease-out ${index * 0.15}s forwards`, opacity: 0}}>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-5 md:mb-6 bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                {category.skills.map((skill, skillIndex) => {
                  // Create random animation combinations
                  const animations = ['animate-bounce-slow', 'animate-float', 'animate-pulse-glow', ''];
                  const randomAnim = animations[skillIndex % animations.length];
                  
                  return (
                    <div
                      key={skill}
                      className={`group relative flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-xl border-2 border-border bg-card hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-110 sm:hover:scale-125 hover:-translate-y-2 sm:hover:-translate-y-4 transition-all duration-500 cursor-pointer overflow-hidden ${randomAnim}`}
                      style={{animationDelay: `${skillIndex * 0.1}s`}}
                    >
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      
                      {/* Rotating ring on hover */}
                      <div className="absolute inset-0 border-4 border-cyan-500/0 group-hover:border-cyan-500/50 rounded-xl group-hover:animate-rotate-slow transition-all" />
                      
                      <div className="relative z-10 group-hover:scale-110 sm:group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                        <SkillIcon skill={skill} />
                      </div>
                      <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center px-1 sm:px-2 relative z-10 group-hover:font-bold group-hover:text-cyan-500 transition-all">
                        {skill}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
