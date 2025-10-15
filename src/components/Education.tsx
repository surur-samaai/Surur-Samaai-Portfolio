import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "Certificate of Completion in Full-Stack Development",
    institution: "Life Choices Coding Academy",
    period: "2024 - 2025",
    description: "I completed an intensive 6-month coding bootcamp focused on full-stack web development, where I built multiple group and solo projects using HTML, CSS, JavaScript, Vue.js, Node.js, and MySQL. Throughout the program, I gained hands-on experience with Git, GitHub, APIs, authentication, and deployment. Working in Agile-based teams allowed me to contribute to project planning, UI/UX design, and code integration, while strengthening my problem-solving, debugging, and version control skills in real-world development environments.",
  },
  {
    degree: "Bachelor of Arts Degree (Psychology)",
    institution: "University of the Western Cape",
    period: "2020 - 2023",
    description: "I earned a BA in Psychology and Classical Culture with a 75% average, gaining a strong foundation in human behavior, critical thinking, and cultural analysis. Through coursework and independent research, I developed strong academic writing, research, and communication skills, while delivering presentations and engaging in discussions on classical civilizations and psychological theory. Completing research assignments and essays honed my time management and analytical abilities, and participating in group work further strengthened my interpersonal and collaborative skills.",
  },
  
];

const Education = () => {
  return (
    <section id="education" className="relative py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Education</span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-primary mb-2">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-3">{edu.period}</p>
                  <p className="text-foreground/80">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
