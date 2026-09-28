import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Header = () => {
  const menuLinks = [
    { url: "#about", label: "Sobre nós" },
    { url: "#services", label: "Serviços" },
    { url: "#contact", label: "Contatos" }
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/10 bg-[#f8f6ef]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-12">
        <Link href="#top" className="flex items-center transition-transform duration-300 hover:scale-[1.03]">
          <Image src="/logoSoldera.svg" width={156} height={52} alt="Soldera Transportes" className="h-11 w-auto" />
        </Link>
        <nav aria-label="Menu principal" className="flex items-center gap-5">
          <ul className="hidden items-center gap-6 text-sm font-semibold text-slate-700 md:flex">
            {menuLinks.map((link) => (
              <li key={link.url}>
                <Link
                  href={link.url}
                  className="relative inline-flex items-center px-1 py-2 leading-6 tracking-[0.02em] transition-colors duration-200 hover:text-amber-600 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-amber-500 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-amber-500 hover:text-slate-950 hover:shadow-lg hover:shadow-amber-500/20">
            Cotar carga <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;