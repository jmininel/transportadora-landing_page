import { ArrowUpRight, MapPinned, PackageCheck, Truck, Zap } from "lucide-react";

const services = [
  {
    title: "Transporte Urbano",
    description: "Entregas rápidas e organizadas para clientes que precisam de agilidade no dia a dia.",
    icon: Truck,
  },
  {
    title: "Transporte Regional",
    description: "Rotas planejadas com foco em segurança, pontualidade e eficiência operacional.",
    icon: MapPinned,
  },
  {
    title: "Carga Especial",
    description: "Atendimento cuidadoso para itens que exigem atenção, monitoramento e responsabilidade.",
    icon: PackageCheck,
  },
  {
    title: "Entregas Urgentes",
    description: "Soluções de logística para demandas imediatas com máximo comprometimento e rapidez.",
    icon: Zap,
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-slate-950 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-5 border-b border-white/15 pb-8 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
              Nossos serviços
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">
              Soluções de logística pensadas para cada tipo de demanda.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-slate-300 sm:text-lg">
            A Soldera Transportes entrega confiança, organização e pontualidade para empresas e clientes que valorizam qualidade.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative flex min-h-64 flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-white/6 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-amber-600 hover:bg-white/11">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-600 text-slate-950 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <service.icon size={22} strokeWidth={2.2} />
                </div>
                <ArrowUpRight size={19} className="text-white/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-amber-400" />
              </div>
              <div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400">Serviço 0{services.indexOf(service) + 1}</p>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-amber-400/30 bg-amber-600 px-6 py-10 text-center text-slate-950 sm:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/80">
            Solicite uma cotação
          </p>
          <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
            Precisa de transporte seguro ? Fale com a Soldera transportes hoje mesmo.
          </h3>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800">
            Falar com a equipe
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;