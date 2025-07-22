import { ArrowRight, FileJson } from "lucide-react";

export default function ContentHome() {
  return (
    <div className="flex w-full">
      <div className=" grid grid-cols-2 gap-4 p-6 py-20">
        <div className="flex flex-col justify-center text-container text-left">
          <h2 className="text-4xl font-bold mb-10">
            Olá, me chamo <span className="text-primary">Ycaro</span>
          </h2>
          <div className="text-sidebar-foreground text-2xl mt-4 font-bold">
            Sou um desenvolvedor Full Stack!
          </div>
          <p className="text-sidebar-foreground text-md mt-4">
            Desde 2019 atuando com desenvolvimento web com foco em sistemas
            SAAS. Implementando soluções diversas para os clientes.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <button className="flex items-center gap-2 bg-secondary text-sm text-white p-6 py-3 rounded-md">
              <FileJson className="w-4 h-4" /> Sobre mim
            </button>
            <button className="flex items-center gap-2 bg-primary text-sm text-white p-6 py-3 rounded-md">
              Projetos <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="relative image-container flex items-center justify-center">
          <img src="/image/laptop.svg" alt="" className="w-100 h-100" />
          <span className="absolute -bottom-10 left-0 rotate-140">
            <img src="/image/arrow.svg" alt="" />
          </span>
        </div>
      </div>
    </div>
  );
}
