import { Github, Linkedin, Mail, Rocket, Dock } from "lucide-react";
import BackgroundVideo from "./BackgroundVideo";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <BackgroundVideo />

      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

      <div className="relative z-20 container mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-fade-in-up">
          <span className="gradient-text">Surur</span>
        </h1>

        <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-foreground/90">
          Full-Stack Developer
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Delivering powerful full-stack systems driven by a passion for solving real-world challenges.
        </p>

        <div className="flex items-center justify-center gap-6 mb-12">
          <a
            href="https://github.com/surur-samaai"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg glass hover:scale-110 transition-transform"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/msururs1/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg glass hover:scale-110 transition-transform"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:msururs1@gmail.com"
            className="p-3 rounded-lg glass hover:scale-110 transition-transform"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="/Surur_Samaai_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg glass hover:scale-110 transition-transform"
          >
            <Dock className="w-6 h-6" />
          </a>
        </div>

        <div className="animate-float">
  <img
    src="/images/astronaut.svg"
    alt="Astronaut"
    className="w-12 h-12 mx-auto text-primary"
  />
</div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-foreground/30" />
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
