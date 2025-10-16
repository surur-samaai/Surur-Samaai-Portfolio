import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { Button } from "./ui/button";

const projectsData = [
  {
    title: "HR Management Dashboard",
    description:
      "My very first collaborative project, an HR Dashboard System with both an admin and employee login. This website was entirely frontend as it was our first project. Use the Links below to check it out. Admin logins (USERNAME: Admin PASSWORD: Adm1n@23). Employee logins (USERNAME: Emp010 PASSWORD: Work@25)",
    image: "/images/hr-dashboard.jpg",
    tags: ["Vue.js", "HTML", "CSS"],
    github: "https://github.com/surur-samaai/group-project",
    demo: "https://sururteammanagementdashboard.netlify.app",
  },
  {
    title: "E-Commerce Website(PrimeFit)",
    description:
      "PrimeFit is a full-stack e-commerce fitness platform that makes working out from home simple and convenient. Built with Vue.js, Node.js, and MySQL, it offers a subscription-based model where users can access gym equipment, workout plans, and personal trainers — all in one place. Designed for ease, flexibility, and motivation, PrimeFit redefines fitness by bringing the gym to your home.",
    image: "/images/primefit.jpg",
    tags: ["Node.js", "Vue.js", "MySQL", "Javascript"],
    github: "https://github.com/surur-samaai/E-commerece_Project/tree/main",
    demo: "#",
  },
  {
    title: "Digital Tracking System(Iliso)",
    description:
      "A real-time attendance management solution built using Python, MySQL, and Google Sheets integration. This system uses NFC technology to allow employees to clock in and out seamlessly, while automatically updating a live dashboard that tracks on-site and off-site staff. The management at LC Studio decided to use our system to track the attendance of their employees.",
    image: "/images/iliso.jpg",
    tags: ["Python", "PHP", "MySQL", "Javascript", "HTML", "Rasberry Pi"],
    github: "https://github.com/surur-samaai/iliso_digital_tracking_system/tree/main",
    demo: "#",
  },
  {
    title: "Android Data Aggregation App(Price Pulse)",
    description: "A Flutter-based mobile application that scrapes real-time product prices from major South African retailers including Pick n Pay, Woolworths, Checkers, and Game/Makro. The app allows users to instantly compare prices across stores through a clean, responsive interface. Built using Flutter and Python (BeautifulSoup/Playwright) for scraping, the project also explores the ethical and legal aspects of web data extraction, delivering a fully functional and research-backed MVP.",
    image: "/images/pricepulse.jpg",
    tags: ["Dart", "Flutter", "Python"],
    github: "https://github.com/keanan557/Price-Pulse/tree/main",
    demo: "#",
  },
  // {
  //   title: "Service Finder",
  //   description: "Another future project placeholder.",
  //   image: "/images/sample5.jpg",
  //   tags: ["TypeScript", "Tailwind"],
  //   github: "#",
  //   demo: "#",
  // },
];

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProjectTitle, setModalProjectTitle] = useState("");
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // showAll toggles whether all projects are visible
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 3);

  const openModal = (title: string) => {
    setModalProjectTitle(title);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalProjectTitle("");
  };

  // close on Esc and focus management
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (modalOpen) {
      window.addEventListener("keydown", onKey);
      setTimeout(() => closeBtnRef.current?.focus(), 0);
    }
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen]);

  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Featured Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
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

                  {project.demo && project.demo !== "#" ? (
                    <Button size="sm" className="flex-1 gradient-btn" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View
                      </a>
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      className="flex-1 gradient-btn"
                      onClick={() => openModal(project.title)}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show more / show less button */}
        {projectsData.length > 3 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll((s) => !s)}
              className="px-6 py-3 rounded-full border border-border/50 bg-background/60 hover:bg-background/70 transition"
              aria-expanded={showAll}
            >
              {showAll ? "Show less" : `Show more (${projectsData.length - 3} more)`}
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          aria-modal="true"
          role="dialog"
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          />

          <div className="relative z-10 w-full max-w-md bg-background/90 border border-border rounded-2xl p-6 shadow-xl">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold">Preview coming soon</h3>
              <button
                ref={closeBtnRef}
                aria-label="Close preview modal"
                onClick={closeModal}
                className="ml-3 inline-flex p-2 rounded-md hover:bg-muted-foreground/10 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-foreground/80 mb-4">
              The preview for <strong>{modalProjectTitle}</strong> is not hosted yet. Please check back soon.
            </p>

            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded-md bg-primary/10 border border-primary/20 text-primary hover:opacity-90"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
