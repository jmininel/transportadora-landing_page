import Image from "next/image";

const suppliers = [
  {
    name: "BGC Frigoríficos",
    logo: "/bgc.png",
  },
  {
    name: "Frigoraça",
    logo: "/frigoraca.png",
  },
  {
    name: "Golden Imex",
    logo: "/goldenImex.png",
  },
  {
    name: " Lira Agroindustrial",
    logo: "/lira.jpg",
  },
  {
    name: "Reserva 42 Frigorífico",
    logo: "/reserva42.png",
  },
];

const Services = () => {
  return (
    <section id="partners" className="bg-slate-950 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-5 border-b border-white/15 pb-8 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
              Quem confia na gente
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">
              Parceiros que fazem parte da nossa jornada.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-slate-300 sm:text-lg">
            Parcerias de confiança que ajudam a Soldeira Transportes a levar qualidade e segurança a cada entrega.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {suppliers.map((supplier) => (
            <div
              key={supplier.name}
              className="group flex min-h-[320px] flex-col justify-between overflow-hidden rounded-[22px] border-y-[2px] border-amber-600 bg-white shadow-[0_10px_22px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="h-[5px] w-full bg-amber-600/50" />

              <div className="flex flex-1 flex-col items-center justify-center px-4 py-5">
                <div className="mb-5 flex h-32 w-32 items-center justify-center rounded-[18px] border-[2px] border-slate-900 bg-[#0f172a] p-3 shadow-[inset_0_0_0_2px_rgba(251,146,60,0.32)]">
                  <Image
                    src={supplier.logo}
                    alt={`Logo ${supplier.name}`}
                    width={180}
                    height={120}
                    className="h-full w-full object-contain"
                    sizes="(max-width: 640px) 80vw, (max-width: 1280px) 40vw, 20vw"
                  />
                </div>

                <h3 className="text-center text-lg font-black leading-tight tracking-tight text-slate-900">
                  {supplier.name}
                </h3>
              </div>

              <div className="h-[5px] w-full bg-amber-600/50" />
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-amber-400/30 bg-amber-600 px-6 py-10 text-center text-slate-950 sm:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/80">
            Solicite uma cotação
          </p>
          <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
            Precisa de transporte seguro ? Fale com a Soldeira transportes hoje mesmo.
          </h3>
          <a
            href="https://wa.me/5517997066758?text=Gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800">
            Falar com a equipe
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;