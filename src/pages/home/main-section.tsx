import { WhatsappBtn } from "../../components/whatsappBtn";

export function MainSection(){
  return (
    <main
        className="min-h-[85vh] px-4 py-12 md:px-0 flex items-center justify-center bg-[#33333] bg-[url('./bg-main.webp')] bg-cover"
        id="inicio"
      >
        <div className="flex items-center flex-col-reverse md:flex-row mt-8 justify-center gap-4">
          <div className="max-w-lg">
            <h3 className="text-sm text-[#FF9800] text-center md:text-left">
              Digital sem complicação
            </h3>
            <h1 className="text-4xl font-bold text-[#FF9800] text-center md:text-left mb-2">
              Cognati - Seu Parceiro na Jornada Digital
            </h1>
            <h2 className="text-center md:text-left text-zinc-50">
              Na Cognati, somos mais do que uma software house. Somos seus
              parceiros na jornada digital, nos dedicados a transformar suas
              ideias em soluções que fazem a diferença.
            </h2>
            <div className="flex justify-center md:justify-start mt-6">
              <WhatsappBtn />
            </div>
          </div>
          <img
            className="w-96 rounded-lg"
            src="./main-img.png"
            alt="imagem principal"
          />
        </div>
      </main>
  )
}