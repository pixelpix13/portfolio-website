import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, MapPin } from 'lucide-react';
import { portfolioData } from '@/data/portfolio-data';

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-40 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional journey building scalable applications and modernizing systems
          </p>
        </div>

        <div className="space-y-6">
          {experience.map((job, index) => (
            <Card 
              key={index} 
              className="hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden"
              style={{animation: `slideInUp 0.6s ease-out ${index * 0.2}s forwards`, opacity: 0}}
            >
              {/* Animated border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div className="space-y-1">
                    <CardTitle className="text-2xl">{job.title}</CardTitle>
                    <div className="text-base text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        <span className="font-semibold">{job.company}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <Badge variant="outline" className="font-medium">{job.period}</Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {job.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 font-bold">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
