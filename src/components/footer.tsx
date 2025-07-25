import {
  EnvelopeIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  PhoneCallIcon,
} from "@phosphor-icons/react";
import { WhatsappBtn } from "./whatsappBtn";

export function Footer() {
  return (
    <footer
      className="px-4 py-6 bg-[#FF9800] text-lg border-yellow-100 xl:bg-[url('./bg-footer.png')] bg-[length:600px_600px] bg-no-repeat bg-[position:-180px_-30px]"
      id="contato"
    >
      <div className="max-w-2xl m-auto">
        <h2 className="text-xl font-bold mb-2 text-[#333333]">
          Entre em Contato Conosco
        </h2>
        <p className="text-[#333333]">
          Se precisar de mais informações ou tiver alguma dúvida, nossa equipe
          está à disposição para ajudar. Você pode nos contatar através dos
          seguintes canais:
        </p>
        <div className="flex justify-start mt-6 mb-3">
          <WhatsappBtn />
        </div>
        <div className="flex items-center gap-4">
          <a
            className="inline-block w-fit text-center px-1 text-[#333333] text-4xl duration-75 rounded-2xl hover:scale-105 hover:shadow-yellow-800/80 hover:shadow-lg"
            href="#"
          >
            <LinkedinLogoIcon />
          </a>
          <a
            className="inline-block w-fit text-center p-1 text-[#333333] text-4xl duration-75 rounded-2xl hover:scale-105 hover:shadow-yellow-800/80 hover:shadow-lg"
            href="https://www.instagram.com/cognati.tech/"
            target="_blank"
          >
            <InstagramLogoIcon />
          </a>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <PhoneCallIcon />
          <span>(21) 98532-9011</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <EnvelopeIcon />
          <span>contato@cognati.tech</span>
        </div>
        <p className="text-xs mt-2">Estamos ansiosos para ouvir você!</p>
        <h2 className="mt-16 text-center text-xs">🐝 Cognati Tech @2024</h2>
      </div>
    </footer>
  );
}
