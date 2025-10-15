import { Briefcase, FolderGit2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="glass rounded-2xl overflow-hidden aspect-[4/3] animate-fade-in-up">
              <img
                src="/images/professional_image.jpg"
                alt="Developer workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">About Me</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              A dedicated web developer with an academic background in Psychology and Classical Cultures. My diverse skill set has been cultivated through roles in education, sales, customer service, and construction, which have enhanced my problem-solving, communication, and leadership competencies.

During my tenure at the Life Choices coding bootcamp, I successfully built and deployed full-stack web applications, including an HR platform, an e-commerce site, and a data analytics dashboard utilizing Oracle APEX, to name a few. My experience spans both front-end and back-end development, providing me with substantial hands-on experience in collaborative team projects, working in agile environments.

I am committed to continuous learning, consistently developing my skills, and actively seeking impactful opportunities for growth and contribution.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform">
                <Briefcase className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="text-sm text-muted-foreground mb-1">Experience(Years)</h3>
                <p className="text-2xl font-bold">2+</p>
              </div>
              
              <div className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform">
                <FolderGit2 className="w-8 h-8 mx-auto mb-3 text-secondary" />
                <h3 className="text-sm text-muted-foreground mb-1">Projects</h3>
                <p className="text-2xl font-bold">5+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
