import {
  SiDotnet, SiSharp, SiTypescript, SiJavascript, SiPython,
  SiReact, SiTailwindcss, SiHtml5,
  SiNodedotjs, SiExpress, SiPostgresql, SiMysql, SiMongodb,
  SiAmazon, SiDocker, SiPostman,
  SiCplusplus
} from 'react-icons/si';
import { VscAzure, VscLock, VscJson, VscCode, VscServerProcess, VscDatabase } from 'react-icons/vsc';
import type { IconType } from 'react-icons';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/motion/primitives';

const ease = [0.22, 1, 0.36, 1] as const;

interface Skill { name: string; description: string; icon: IconType; }
interface SkillCategory { title: string; skills: Skill[]; }

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
  if (Icon) return <Icon className="w-10 h-10 sm:w-11 sm:h-11" />;
  return (
    <div className="text-lg font-bold">
      {skill.name.substring(0, Math.min(3, skill.name.length)).toUpperCase()}
    </div>
  );
};

export function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Backend & Architecture',
      skills: [
        { name: '.NET 9 with C#',       description: 'Building enterprise-grade backend systems and REST APIs', icon: SiDotnet },
        { name: 'ASP.NET Core Web API', description: 'Creating scalable, high-performance web services',         icon: VscServerProcess },
        { name: 'Entity Framework Core', description: 'Modern ORM for database operations and migrations',       icon: VscDatabase },
        { name: 'Clean Architecture',   description: 'Implementing maintainable, testable code structures',      icon: VscCode },
        { name: 'Python',               description: 'Scripting, automation, and backend development',           icon: SiPython },
      ],
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js',       description: 'Building interactive, component-based user interfaces', icon: SiReact },
        { name: 'TypeScript',     description: 'Type-safe JavaScript for robust applications',          icon: SiTypescript },
        { name: 'Tailwind CSS',   description: 'Utility-first styling for modern, responsive designs',  icon: SiTailwindcss },
        { name: 'HTML5 & CSS3',   description: 'Semantic markup and modern styling techniques',         icon: SiHtml5 },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'PostgreSQL', description: 'Advanced relational database with complex queries',              icon: SiPostgresql },
        { name: 'SQL Server',  description: 'Enterprise-level database management and optimization',         icon: SiMysql },
        { name: 'MongoDB',     description: 'NoSQL database for flexible, document-based storage',          icon: SiMongodb },
      ],
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS Cloud Services',      description: 'EC2, S3, Lambda, RDS, DynamoDB for scalable infrastructure', icon: SiAmazon },
        { name: 'Azure Active Directory',  description: 'OAuth2, OIDC authentication and authorization',               icon: VscAzure },
        { name: 'Docker',                  description: 'Containerization for consistent deployments',                 icon: SiDocker },
      ],
    },
    {
      title: 'Additional Skills',
      skills: [
        { name: 'REST APIs',    description: 'Designing and consuming RESTful web services',           icon: VscJson },
        { name: 'OAuth2 & OIDC', description: 'Secure authentication and authorization flows',        icon: VscLock },
        { name: 'JWT Tokens',   description: 'Stateless authentication for distributed systems',      icon: VscLock },
        { name: 'Postman',      description: 'API testing, debugging, and documentation',             icon: SiPostman },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 px-6 md:px-8 bg-card relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section label */}
        <Reveal y={20} className="flex items-center gap-3 mb-6">
          <span className="h-[1.5px] w-6 bg-primary block" />
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
            Technical Expertise
          </span>
        </Reveal>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-tight">
            <Reveal y={40}>Skills &amp;</Reveal>
            <Reveal y={40} delay={0.1}>Technologies</Reveal>
          </h2>
          <motion.p
            className="text-sm text-muted-foreground max-w-xs"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Hover each card to see how I use it
          </motion.p>
        </div>

        <div className="space-y-10 md:space-y-12">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease }}
            >
              {/* Category label */}
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-sm uppercase tracking-[0.15em] font-semibold text-muted-foreground">
                  {category.title}
                </h3>
                <div className="flex-1 h-px bg-border/60" />
              </div>

              {/* Cards */}
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {category.skills.map((skill, si) => (
                  <motion.div
                    key={si}
                    className="group relative h-40 sm:h-44 w-40 sm:w-44 perspective-1000"
                    initial={{ opacity: 0, y: 24, scale: 0.92 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.5, delay: si * 0.07, ease }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Flip container */}
                    <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 cursor-pointer">

                      {/* Front */}
                      <div className="absolute inset-0 backface-hidden">
                        <div className="w-full h-full rounded-xl border border-border/70 bg-background p-4 flex flex-col items-center justify-center group-hover:border-primary/50 transition-colors duration-500 overflow-hidden">
                          {/* Shine */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                          <div className="relative z-10 flex flex-col items-center gap-2.5 text-center">
                            <div className="text-muted-foreground group-hover:text-primary transition-colors duration-400">
                              <SkillIcon skill={skill} />
                            </div>
                            <h4 className="text-xs sm:text-sm font-semibold text-foreground leading-tight px-2">
                              {skill.name}
                            </h4>
                            <p className="text-[10px] text-muted-foreground/60">Hover to flip</p>
                          </div>

                          {/* Bottom accent */}
                          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                      </div>

                      {/* Back */}
                      <div className="absolute inset-0 backface-hidden rotate-y-180">
                        <div className="w-full h-full rounded-xl border border-primary/50 bg-background p-4 flex flex-col items-center justify-center overflow-hidden"
                          style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.07) 0%, rgba(11,11,11,1) 100%)' }}
                        >
                          <div className="flex flex-col items-center justify-center gap-2 text-center">
                            <div className="text-primary/80 scale-75">
                              <SkillIcon skill={skill} />
                            </div>
                            <h4 className="text-xs font-bold text-primary">{skill.name}</h4>
                            <p className="text-[10px] leading-relaxed text-muted-foreground px-1">{skill.description}</p>
                          </div>
                          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
                        </div>
                      </div>

                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
