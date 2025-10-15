const skillsData = [
  { name: "Vue", icon: "/images/vue.svg" },
  { name: "Node", icon: "/images/nodejs.svg" },
  { name: "React", icon: "/images/react.svg" },
  { name: "Javascript", icon: "/images/js.svg" },
  { name: "Java", icon: "/images/java.svg" },
  { name: "MySQL", icon: "/images/mysql.svg" },
  { name: "PostgreSQL", icon: "/images/postgres.svg" },
  { name: "Oracle", icon: "/images/oracle.svg" },
  { name: "HTML", icon: "/images/html.svg" },
  { name: "CSS", icon: "/images/css.svg" },
  { name: "Python", icon: "/images/python.svg" },
  { name: "TypeScript", icon: "/images/typescript-16.svg" },
  { name: "PHP", icon: "/images/php.svg" },
  { name: "Wordpress", icon: "/images/wordpress.svg" },
  { name: "Flutter", icon: "/images/flutter.svg" },
  { name: "Github", icon: "/images/github.svg" },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Tech Stack</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
  {skillsData.map((skill, index) => (
    <div
      key={index}
      className="glass rounded-2xl p-8 text-center hover:scale-110 transition-transform group"
    >
      <img
        src={skill.icon}
        alt={skill.name}
        className="w-16 h-16 mx-auto mb-4 group-hover:animate-float"
      />
      <h3 className="text-lg font-semibold">{skill.name}</h3>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default Skills;
