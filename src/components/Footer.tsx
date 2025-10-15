import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-border/50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Surur Samaai</h3>
            <p className="text-muted-foreground">
              Full Stack Developer
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#education" className="block text-muted-foreground hover:text-foreground transition-colors">
                Education
              </a>
              <a href="#experience" className="block text-muted-foreground hover:text-foreground transition-colors">
                Experience
              </a>
              <a href="#projects" className="block text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </a>
              <a href="#skills" className="block text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </a>
              <a href="#testimonials" className="block text-muted-foreground hover:text-foreground transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <p className="text-muted-foreground mb-4">Email: msururs1@gmail.com</p>
            <div className="flex gap-4">
              <a
                href="https://github.com/surur-samaai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass hover:scale-110 transition-transform"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/msururs1/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass hover:scale-110 transition-transform"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:msururs1@gmail.com"
                className="p-2 rounded-lg glass hover:scale-110 transition-transform"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center text-muted-foreground">
          <p>© 2025 Surur Samaai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
