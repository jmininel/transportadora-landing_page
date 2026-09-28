import Image from "next/image";
import { ArrowDownRight, MoveRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-slate-950">
      <div className="relative min-h-[670px] w-full sm:min-h-[720px] lg:min-h-[700px]">
        <Image
          src="/banner.png"
          alt="Transportadora trabalhando com logística e entregas"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,18,33,.96)_0%,rgba(6,18,33,.78)_43%,rgba(6,18,33,.18)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(6,18,33,.75),transparent_42%)]" />
        <div className="absolute -right-20 top-20 h-80 w-80 rounded-full border border-amber-300/30 lg:h-[34rem] lg:w-[34rem]" />
        <div className="absolute right-0 top-1/2 h-px w-1/2 overflow-hidden bg-white/20"><div className="route-line h-full w-1/3 bg-amber-400" /></div>

        <div className="relative z-10 flex h-full items-center">
          <div className="max-w-3xl px-6 pt-16 sm:px-10 lg:px-16">
            <span className="reveal-up inline-flex items-center gap-2 border-l-2 border-amber-400 pl-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> Logística com confiança
            </span>

            <h1 className="reveal-up delay-1 mt-6 max-w-3xl text-5xl font-black leading-[.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl">
              Sua carga no lugar certo,
              <span className="block text-amber-400">no tempo certo<span className="text-white">.</span></span>
            </h1>

            <p className="reveal-up delay-2 mt-7 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
              Na Soldera Transportes, entregamos segurança, agilidade e compromisso em cada rota,
              conectando pessoas, negócios e oportunidades com eficiência.
            </p>

            <div className="reveal-up delay-3 mt-9 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-amber-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-amber-300 hover:shadow-xl hover:shadow-amber-400/20">
                Solicitar cotação <ArrowDownRight size={17} className="transition-transform duration-300 group-hover:translate-y-1" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/60 hover:bg-white/10">
                Conhecer serviços <MoveRight size={17} />
              </a>
            </div>
            <div className="reveal-up delay-4 mt-20 grid max-w-xl grid-cols-3 border-t border-white/20 pt-5 text-white sm:mt-24">
              <div><p className="text-2xl font-black text-amber-400">+10</p><p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-slate-300">anos na estrada</p></div>
              <div className="border-l border-white/20 pl-4"><p className="text-2xl font-black text-amber-400">1.000+</p><p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-slate-300">entregas feitas</p></div>
              <div className="border-l border-white/20 pl-4"><p className="text-2xl font-black text-amber-400">24h</p><p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-slate-300">suporte próximo</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;