import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projectsData = [
  {
    title: "HR Management Dashboard",
    description: "My very first collaborative project, an HR Dashboard System with both an admin and employee login. This website was entirely frontend as it was our first project. Use the Links below to check it out. Admin logins (USERNAME: Admin PASSWORD: Adm1n@23). Employee logins (USERNAME: Emp010 PASSWORD: Work@25)",
    image: "/images/hr-dashboard.jpg",
    tags: ["Vue.js", "HTML", "CSS"],
    github: "https://github.com/surur-samaai/group-project",
    demo: "https://sururteammanagementdashboard.netlify.app",
  },
  {
    title: "E-Commerce Website",
    description: "PrimeFit is a full-stack e-commerce fitness platform that makes working out from home simple and convenient. Built with Vue.js, Node.js, and MySQL, it offers a subscription-based model where users can access gym equipment, workout plans, and personal trainers — all in one place. Designed for ease, flexibility, and motivation, PrimeFit redefines fitness by bringing the gym to your home.",
    image: "/images/primefit.jpg",
    tags: ["Node.js", "Vue.js", "MySQL", "Javascript"],
    github: "https://github.com/surur-samaai/E-commerece_Project/tree/main",
    demo: "#",
  },
  {
    title: "Digital Tracking System(Iliso)",
    description: "Digital Time Attendance System using python, and a rasberry pi",
    image: "/images/iliso.png",
    tags: ["Python", "PHP", "MySQL", "Javascript", "HTML", "Rasberry Pi"],
    github: "https://github.com/surur-samaai/iliso_digital_tracking_system/tree/main",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Featured Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="glass rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 border border-primary/20 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1 gradient-btn" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
