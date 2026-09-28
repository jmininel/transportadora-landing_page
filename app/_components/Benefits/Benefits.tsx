const benefits = [
  {
    title: "Entrega segura",
    text: "Cargas monitoradas com atenção, cuidado e responsabilidade em cada etapa do transporte.",
    accent: "01",
  },
  {
    title: "Agilidade no prazo",
    text: "Planejamento eficiente para manter sua operação em movimento sem atrasos desnecessários.",
    accent: "02",
  },
  {
    title: "Atendimento próximo",
    text: "Equipe dedicada para oferecer suporte ágil e soluções que realmente atendem suas demandas.",
    accent: "03",
  },
  {
    title: "Cobertura confiável",
    text: "Serviços pensados para logística urbana e regional com foco em rotina, previsibilidade e qualidade.",
    accent: "04",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="bg-[#f3f0e8] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            Por que escolher a Soldera?
          </p>
          <h2 className="mt-4 max-w-xl text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
            Logística que move sua operação com segurança e eficiência.
          </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-600 sm:justify-self-end sm:text-lg">
            Mais do que transportar mercadorias, levamos confiança para cada entrega e previsibilidade para cada cliente.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-3xl border border-slate-900/15 bg-white/25">
          {benefits.map((item) => (
            <div key={item.title} className="group grid gap-4 border-b border-slate-900/15 px-5 py-6 transition-colors duration-300 last:border-b-0 hover:bg-white/60 sm:grid-cols-[80px_1fr_1.5fr] sm:items-center sm:px-6">
              <span className="font-mono text-sm font-bold text-amber-600 transition-colors duration-300 group-hover:text-slate-950">{item.accent}</span>
              <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
              <p className="max-w-lg text-sm leading-6 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-5 rounded-3xl border-l-4 border-amber-400 bg-slate-950 px-6 py-7 text-white sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
            Solução sob medida
          </p>
          <h3 className="max-w-2xl text-xl font-bold sm:text-2xl">
            Atendimento pensado para quem precisa de rapidez, organização e confiança.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
