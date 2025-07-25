import { Footer } from "../../components/footer";
import { WhatsappBtn } from "../../components/whatsappBtn";
import { MainSection } from "./main-section";

export default function Home() {
  return (
    <>
      <MainSection />
      <section className="py-12 px-4" id="servicos">
        <div>
          <h2 className="text-3xl font-medium text-center text-[#FF9800] mb-4">
            Nossos Serviços
          </h2>

          <div
            id="services"
            className="min-h-96 flex items-center justify-center gap-12 flex-wrap"
          >
            <div className="w-60 h-[340px] bg-[#fefefe] flex justify-end rounded-xl flex-col bg-cover p-4 hover:scale-110 hover:duration-300 border-2 border-[#FF9800]/30">
              <img src="./servico01.png" className="w-44 m-auto" />
              <h3 className="uppercase font-semibold text-left text-lg mb-2 mt-2">
                Landing Page
              </h3>
              <p className="font-light">
                Transforme visitantes em clientes com uma landing page projetada
                para conversões.
              </p>
            </div>
            <div className="w-60 h-[340px] bg-[#fefefe] flex justify-end rounded-xl flex-col bg-cover p-4 hover:scale-110 hover:duration-300 border-2 border-[#FF9800]/30">
              <img src="./servico03.png" className="w-44 m-auto" />
              <h3 className="uppercase font-semibold text-left text-lg mb-2 mt-2">
                Sistemas
              </h3>
              <p className="font-light">
                Automatize processos e aumente a eficiência com um sistemas
                feito para você.
              </p>
            </div>
            <div className="w-60 h-[340px] bg-[#fefefe] flex justify-end rounded-xl flex-col bg-cover p-4 hover:scale-110 hover:duration-300 border-2 border-[#FF9800]/30">
              <img src="./servico02.png" className="w-44 m-auto" />
              <h3 className="uppercase font-semibold text-left text-lg mb-2 mt-2">
                Aplicativos
              </h3>
              <p className="font-light">
                Leve sua ideia para a palma da mão do público com aplicativos
                ios e android.
              </p>
            </div>
            <div className="w-60 h-[340px] bg-[#fefefe] flex justify-end rounded-xl flex-col bg-cover p-4 hover:scale-110 hover:duration-300 border-2 border-[#FF9800]/30">
              <img src="./servico04.png" className="w-44 m-auto" />
              <h3 className="uppercase font-semibold text-left text-lg mb-2 mt-2">
                Site institucional
              </h3>
              <p className="font-light">
                Fortaleça sua marca online com um site institucional que reflete
                seus valores.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="min-h-[85vh] py-16 px-4 flex items-center justify-center bg-[url('./bg-about-us.jpg')] bg-fixed"
        id="sobre"
      >
        <div className="flex items-center flex-col md:flex-row justify-center gap-4">
          <img
            className="w-96 rounded-lg"
            src="/mockup.png"
            alt="imagem principal"
          />
          <div className="max-w-lg ml-4">
            <h1 className="text-4xl font-bold text-[#FF9800] text-center md:text-left mb-2">
              Sobre Nós
            </h1>
            <h2 className="text-center md:text-left text-zinc-50">
              Somos um grupo de desenvolvimento dedicada a transformar suas
              ideias em realidade! Especializamos-nos na criação de sites,
              sistemas web, aplicativos e soluções sob medida, com foco em
              resolver seus problemas de maneira simples e direta. Nossa missão
              é entregar resultados que simplificam processos e maximizam o
              valor para o seu negócio, sempre com agilidade e eficiência.
            </h2>
            <div className="flex justify-center md:justify-start mt-6">
              <WhatsappBtn />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
