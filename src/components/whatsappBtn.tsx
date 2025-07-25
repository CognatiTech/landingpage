import { WhatsappLogoIcon } from "@phosphor-icons/react";
import { Link } from "react-router";

export function WhatsappBtn() {
  return (
    <Link
      className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg flex items-center gap-1"
      to="https://wa.me/5521985329011"
      target="_blank"
    >
      <WhatsappLogoIcon weight="fill" size={24} />
      <span className="text-emerald-50">Fale conosco</span>
    </Link>
  );
}
