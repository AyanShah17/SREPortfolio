import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SkillsContent() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "JavaScript", "Dart", "Bash"],
    },
    {
      category: "DevOps/SRE",
      skills: ["Docker", "GitHub Actions", "CI/CD", "Prometheus", "Grafana", "Monitoring", "Logging"],
    },
    {
      category: "Frameworks",
      skills: ["FastAPI", "Node.js", "Express", "Flutter"],
    },
    {
      category: "Cloud/Infrastructure",
      skills: ["Supabase", "Firebase", "Heroku", "Render"],
    },
    {
      category: "Databases & Tools",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Git", "Jira", "Agile"],
    },
  ]

  return (
    <div>
      <div className="space-y-4 text-center">
        <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Skills</h3>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed">
          My expertise and technical proficiencies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card">
            <Card className="h-full border-t-4 border-t-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
