import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, MapPin, Award } from 'lucide-react';
import { portfolioData } from '@/data/portfolio-data';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  gpa?: string;
  relevant?: string[];
}

export function Education() {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Education & Certifications
        </h2>

        <div className="space-y-8">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <GraduationCap className="w-6 h-6" />
              Education
            </h3>
            {education.map((edu: EducationItem, index: number) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div className="space-y-1">
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <CardDescription className="text-base font-semibold">
                        {edu.institution}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <Badge variant="outline">{edu.period}</Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {edu.gpa && (
                    <p className="text-sm">
                      <span className="font-semibold">GPA:</span> {edu.gpa}
                    </p>
                  )}
                  {edu.relevant && (
                    <div>
                      <p className="text-sm font-semibold mb-2">Relevant Coursework:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.relevant.map((course: string) => (
                          <Badge key={course} variant="secondary" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          {certifications && certifications.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Award className="w-6 h-6" />
                Certifications
              </h3>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {certifications.map((cert: any, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        {cert.url ? (
                          <a 
                            href={cert.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors underline"
                          >
                            {cert.name}
                          </a>
                        ) : (
                          <span className="text-muted-foreground">{typeof cert === 'string' ? cert : cert.name}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
