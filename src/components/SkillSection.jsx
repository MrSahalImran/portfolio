import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  {
    name: "HTML/CSS",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
  },
  {
    name: "JavaScript",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/20",
  },
  {
    name: "React",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    bgColor: "bg-blue-600/10",
    borderColor: "border-blue-600/20",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
  },
  {
    name: "Next.js",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    bgColor: "bg-gray-800/10",
    borderColor: "border-gray-500/20",
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
  },
  {
    name: "Express",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    bgColor: "bg-gray-700/10",
    borderColor: "border-gray-500/20",
  },
  {
    name: "MongoDB",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    bgColor: "bg-green-600/10",
    borderColor: "border-green-600/20",
  },
  {
    name: "PostgreSQL",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    bgColor: "bg-blue-700/10",
    borderColor: "border-blue-700/20",
  },
  // Tools & Others
  {
    name: "Git",
    category: "tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    bgColor: "bg-orange-600/10",
    borderColor: "border-orange-600/20",
  },
  {
    name: "Docker",
    category: "tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/20",
  },
  {
    name: "VS Code",
    category: "tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    name: "Linux",
    category: "tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    bgColor: "bg-yellow-600/10",
    borderColor: "border-yellow-600/20",
  },
  {
    name: "Redux",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
  {
    name: "AWS",
    category: "tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    bgColor: "bg-orange-400/10",
    borderColor: "border-orange-400/20",
  },
];

const categories = ["all", "frontend", "backend", "tools"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
            {filteredSkills.map((skill, key) => (
              <div
                key={key}
                className={cn(
                  "group relative bg-card rounded-xl p-6 shadow-sm card-hover transition-all duration-300",
                  "border-2 hover:scale-105 hover:shadow-lg",
                  skill.bgColor,
                  skill.borderColor
                )}
              >
                {/* Skill Icon */}
                <div className="flex flex-col items-center space-y-3">
                  <div className="relative">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-12 h-12 md:w-16 md:h-16 object-contain transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback if image fails to load
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    {/* Fallback icon */}
                    <div className="hidden w-12 h-12 md:w-16 md:h-16 bg-primary/20 rounded-lg items-center justify-center">
                      <span className="text-lg font-bold text-primary">
                        {skill.name.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-sm md:text-base font-medium text-center leading-tight">
                    {skill.name}
                  </h3>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
