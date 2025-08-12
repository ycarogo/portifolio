import { ArrowRight, FileJson } from "lucide-react";

export default function ContentHome() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="flex w-full">
      <div className=" grid md:grid-cols-2 grid-cols-1 gap-4 p-6 md:py-20 py-0">
        <div className="relative image-container flex items-center justify-center order-1 md:order-2">
          <img src="/image/laptop.svg" alt="" className="w-100 h-100" />
        </div>
        <div className="flex flex-col justify-center text-container text-left order-2 md:order-1">
          <h2 className="text-4xl font-bold mb-10">
            Olá, me chamo <span className="text-primary">Ycaro</span>
          </h2>
          <div className="text-sidebar-foreground text-2xl mt-4 font-bold">
            Sou um desenvolvedor Web Full Stack!
          </div>
          <p className="text-sidebar-foreground text-md mt-4">
            Desde 2019 atuando com desenvolvimento web com foco em sistemas
            SAAS. Implementando soluções diversas para os clientes.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <button
              onClick={scrollToAbout}
              className="flex items-center gap-2 bg-secondary text-sm text-white p-5 md:p-4 py-3 rounded-md cursor-pointer hover:bg-secondary/90 transition-colors"
            >
              <FileJson className="w-4 h-4" /> Sobre mim
            </button>
            <button
              onClick={scrollToProjects}
              className="flex items-center gap-2 bg-primary text-sm text-white p-6 py-3 rounded-md cursor-pointer hover:bg-primary/90 transition-colors"
            >
              Projetos <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
