import { habilidades } from "@/data/habilidades";
import { Download } from "lucide-react";

export default function ComponentAbout() {
  const linkCV =
    "https://drive.google.com/file/d/1-6GhDeE3ac4whWq36YtZUBbVInmJQU_I/view?usp=sharing";
  return (
    <div className="flex w-full bg-card rounded-2xl">
      <div className=" grid grid-cols-2 gap-4 p-3 py-10">
        <div className="image-container flex items-center justify-center">
          <div className="grid grid-cols-3 gap-4">
            {habilidades.map((habilidade) => (
              <div className="flex items-center justify-center">
                <img
                  src={habilidade.image}
                  alt={habilidade.name}
                  className="w-20 h-20"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center text-container text-left">
          <p className="text-md font-bold mb-2 text-success italic">
            Sobre mim
          </p>
          <div className="text-sidebar-foreground text-lg font-bold">
            Desenvolvedor Web com experiência sólida em desenvolvimento
            full-stack, especializado em PHP, Angular e React
          </div>
          <p className="text-sidebar-foreground text-md mt-4">
            Apaixonado por criar aplicações web escaláveis, seguras e
            performáticas, com foco em boas práticas de código e experiência do
            usuário. Atuo no desenvolvimento de APIs RESTful, integrações com
            serviços externos e otimização de banco de dados. Busco sempre
            aprimorar minhas habilidades e contribuir para soluções inovadoras.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <a
              href={linkCV}
              target="_blank"
              download={true}
              className="flex items-center gap-2 bg-primary text-sm text-white p-6 py-3 rounded-md"
            >
              <Download className="w-4 h-4" /> Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
