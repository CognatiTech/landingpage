import { WhatsappBtn } from "./whatsappBtn";

export function Header() {
  return (
    <header className="flex justify-center items-center p-4 shadow-lg fixed z-50 w-full bg-slate-50">
      <div className="flex items-center justify-between w-full max-w-7xl">
        <div className="flex items-center gap-2">
          <img className="w-12 h-12" src="./logo.png" alt="logomarca Cognati" />
          <h1 className="font-bold text-2xl tracking-tighter">Cognati</h1>
        </div>
        <nav className="gap-3 md:flex hidden">
          <a
            className="hover:underline hover:underline-offset-4 hover:-translate-y-1 p-2"
            href="#inicio"
          >
            Inicio
          </a>
          <a
            className="hover:underline hover:underline-offset-4 hover:-translate-y-1 p-2"
            href="#servicos"
          >
            Serviços
          </a>
          <a
            className="hover:underline hover:underline-offset-4 hover:-translate-y-1 p-2"
            href="#sobre"
          >
            Sobre Nós
          </a>
          <a
            className="hover:underline hover:underline-offset-4 hover:-translate-y-1 p-2"
            href="#contato"
          >
            Contato
          </a>

          <a
            className="hover:underline hover:underline-offset-4 hover:-translate-y-1 p-2"
            href="#"
          >
            Fale conosco
          </a>
        </nav>
        <WhatsappBtn/>
      </div>
    </header>
  );
}
