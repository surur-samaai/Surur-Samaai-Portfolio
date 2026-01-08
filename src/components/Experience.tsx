const experienceData = [
  {
    title: "Junior Software Developer Intern",
    company: "CustomApp",
    period: "2026 - Present",
    description: "Working on cloud-based web and mobile platforms, supporting client-facing solutions across diverse industries. Collaborating in an agile, remote team environment, gaining exposure to real-world production systems, workflows, and client-driven development while building practical experience with JavaScript, Meta, WhatsApp Workflows, and modern development tools.",
  },
  {
    title: "Junior Developer Intern",
    company: "Life Choices Studio",
    period: "2025 - 2026",
    description: "At LC Studio, I was part of a hands-on internship program where I collaborated on multiple real-world software projects across web, mobile, and IoT",
  },
  {
    title: "Tutor/Admin Assistant",
    company: "University of the Western Cape",
    period: "2022 - 2023",
    description: "Tutored and conducted both one-on-one and class consultations to support academic performance",
  },
  {
    title: "Sales Assistant",
    company: "Game4U",
    period: "2022 - 2023",
    description: "Communicated with diverse customers, including non-native English speakers. I achieved the highest sales in-store through excellent interpersonal skills.",
  },
  {
    title: "Customer Service Associate",
    company: "Amazon",
    period: "2019 - 2020",
    description: "Maintained top KPIs, handled customer inquiries, and resolved issues with professionalism. I also gained experience working in a high-performance corporate environment.",
  },
  {
    title: "Construction Worker",
    company: "Haw & Inglis",
    period: "2019 - 2019",
    description: "I was selected during high school for a national construction internship program. Completed theory modules at ACS Academy for Construction Skills. Relocated for four months of practical roadworks supervision in another province. Gained exposure to large-scale construction operations and site safety protocols. I declined contract renewal to pursue a university degree.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary opacity-30" />

            <div className="space-y-12">
              {experienceData.map((exp, index) => (
                <div key={index} className="relative pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-primary ring-4 ring-primary/20 animate-pulse-glow" />

                  <div className="glass rounded-2xl p-6 hover:scale-[1.02] transition-transform">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <span className="text-sm text-primary">{exp.period}</span>
                    </div>
                    <p className="text-secondary mb-3">{exp.company}</p>
                    <p className="text-foreground/80">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
