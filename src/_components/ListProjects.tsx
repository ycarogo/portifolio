import { projects } from "@/data/projects";
import CardProject from "./CardProject";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ListProjects() {
  const [arrayProjects, setArrayProjects] = useState(projects.slice(0, 3));

  const handleShowMore = () => {
    setArrayProjects([...arrayProjects, ...projects.slice(3)]);
  };

  return (
    <div id="projects" className="w-full gap-4 p-10 py-20">
      <div className="w-full p-6">
        <div className="relative flex flex-col justify-center text-container">
          <span className="absolute -bottom-10 -left-17">
            <img src="/image/asterisk.svg" alt="" className="w-13 h-13" />
          </span>
          <p className="text-md font-bold mb-2 text-success italic">Projetos</p>
          <div className="text-sidebar-foreground text-lg font-bold">
            Lista dos meus principais projetos desenvolvidos.
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 w-full">
          {arrayProjects.map((project) => (
            <CardProject key={project.name} {...project} />
          ))}
        </div>
        {projects.length > 2 && arrayProjects.length < projects.length && (
          <div className="flex justify-center mt-6">
            <button
              className="flex items-center gap-2 bg-secondary text-sm text-white p-6 py-3 rounded-md hover:bg-secondary/80 transition-all duration-300 cursor-pointer"
              onClick={handleShowMore}
            >
              Ver mais <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
