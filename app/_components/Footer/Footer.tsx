import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 rounded-3xl border border-white/10 bg-white/5 p-6 lg:flex-row lg:items-center lg:justify-between lg:p-8">
          <div className="flex items-center justify-center lg:justify-start bg-white px-10 py-10 rounded-xl border border-amber-400 shadow-lg shadow-amber-400/10">
            <Image
              src="/logoSoldera.svg"
              alt="Soldera Transportes de Cargas"
              width={220}
              height={80}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:min-w-[520px] lg:max-w-[620px]">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400/15 text-amber-300">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Telefone
                </p>
                <span className="text-sm font-medium text-slate-100">(17) 99706-6758</span>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400/15 text-amber-300">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  E-mail
                </p>
                <span className="text-sm font-medium text-slate-100">fabiosoldera41@gmail.com</span>
              </div>
            </div>

            <div className="sm:col-span-2">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 px-4 py-3 text-slate-300">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400/15 text-amber-300">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Endereço
                  </p>
                  <span className="text-sm">Avenida Luiz Brambatti 3180
                    Jardim Santa Helena
                    Fernandópolis SP
                    15607-048</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 text-center text-xs text-slate-400 sm:px-8 lg:px-12">
          © {new Date().getFullYear()} Soldera Transportes de Cargas. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;