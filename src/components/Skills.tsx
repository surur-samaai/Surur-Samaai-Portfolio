// src/components/Skills.tsx
import React, { useEffect, useState } from "react";

const skillsData = [
  { name: "Vue", icon: "/images/vue.svg" },
  { name: "Node", icon: "/images/nodejs.svg" },
  { name: "React", icon: "/images/react.svg" },
  { name: "Javascript", icon: "/images/js.svg" },
  { name: "Java", icon: "/images/java.svg" },
  { name: "MySQL", icon: "/images/mysql.svg" },
  { name: "PostgreSQL", icon: "/images/postgres.svg" },
  // { name: "Oracle", icon: "/images/oracle.svg" },
  // { name: "HTML", icon: "/images/html.svg" },
  // { name: "CSS", icon: "/images/css.svg" },
  { name: "Python", icon: "/images/python.svg" },
  { name: "TypeScript", icon: "/images/typescript.svg" },
  { name: "PHP", icon: "/images/php.svg" },
  { name: "Wordpress", icon: "/images/wordpress.svg" },
  { name: "Flutter", icon: "/images/flutter.svg" },
  // { name: "Github", icon: "/images/github.svg" },
];

// const badgesData = [
//   "/images/cloud-essentials.png",
//   "/images/LifeChoicesAcademy-APIIntegrationDeveloper-2025-08-07.png",
//   "/images/LifeChoicesAcademy-WordPressSiteBuilderPortfolioEdition-2025-05-09.png",
//   "/images/LifeChoicesAcademy-UIUXDesignFoundations&Practice-2025-04-17.png",
//   "/images/LifeChoicesAcademy-SCRUMProjectPlanning&AgileFundamentals-2025-03-16.png",
//   "/images/LifeChoicesAcademy-Real-TimeSystemsDeveloper-2025-04-23.png",
//   "/images/LifeChoicesAcademy-MobileAppDeveloper-2025-07-21.png",
//   // add more badge png paths here...
// ];
const makeThemedPath = (original: string, theme: "light" | "dark") => {
  // Turn "/images/foo.svg" into "/images/foo-light.svg" or "/images/foo-dark.svg"
  const lastSlash = original.lastIndexOf("/");
  const dir = lastSlash >= 0 ? original.slice(0, lastSlash + 1) : "";
  const file = lastSlash >= 0 ? original.slice(lastSlash + 1) : original;
  const dot = file.lastIndexOf(".");
  if (dot === -1) return `${dir}${file}-${theme}`; // unlikely, keep simple
  const name = file.slice(0, dot);
  const ext = file.slice(dot); // includes the dot
  return `${dir}${name}-${theme}${ext}`;
};

const Skills: React.FC = () => {
  const [isLight, setIsLight] = useState<boolean>(() =>
    typeof document !== "undefined" ? document.documentElement.classList.contains("light") : false
  );

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === "site-theme") {
        setIsLight(e.newValue === "light");
      }
    };
    const onThemeChange = () => {
      setIsLight(document.documentElement.classList.contains("light"));
    };

    window.addEventListener("storage", onStorage);
    window.addEventListener("themechange", onThemeChange);

    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("themechange", onThemeChange);
    };
  }, []);

  // const marqueeBadges = [...badgesData, ...badgesData];

  return (
    <section id="skills" className="relative py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Tech Stack</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {skillsData.map((skill, index) => {
            // preferred themed path (e.g., "/images/vue-light.svg")
            const themed = makeThemedPath(skill.icon, isLight ? "light" : "dark");

            // keep local state for fallback handling per-image
            // but we can use a simple approach: set the src to themed and
            // on error fallback to original icon
            return (
              <div
                key={index}
                className="glass rounded-2xl p-8 text-center hover:scale-110 transition-transform group"
              >
                <img
                  src={themed}
                  alt={skill.name}
                  className="w-16 h-16 mx-auto mb-4 group-hover:animate-float object-contain"
                  // if themed asset missing, fall back to the original image
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    if (img.src.endsWith(themed)) {
                      img.src = skill.icon;
                    }
                  }}
                />
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>
            ); 
          })}
        </div>
        
      </div>
      {/* <div className="max-w-4xl mx-auto mt-10">
          <div className="text-center mb-4">
            <div className="marquee-heading">Badges</div>
          </div>

          <div className="marquee">
            <div className="marquee__track" role="list" aria-label="Badges marquee">
              {marqueeBadges.map((badgePath, idx) => (
                <div className="marquee__item" role="listitem" key={`${badgePath}-${idx}`}>
                  <img src={badgePath} alt={`Badge ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div> */}
    </section>
  );
};

export default Skills;
