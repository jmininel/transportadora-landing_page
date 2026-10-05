const About = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-linear-to-br from-slate-950 via-[#0b2034] to-[#123653] py-20 text-white sm:py-24">
      <div className="pointer-events-none absolute -right-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full border border-amber-400/15" />
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
              Sobre nós
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-black leading-tight tracking-tight sm:text-4xl">
              Transportamos confiança, pontualidade e cuidado em cada entrega.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              A Soldeira Transportes nasceu para entregar soluções de logística com responsabilidade,
              atenção aos detalhes e compromisso com o prazo. Nossa missão é facilitar a operação
              de clientes e parceiros com eficiência e segurança em cada rota.
            </p>
          </div>

          <div className="relative rounded-3xl border border-white/15 bg-white/[0.07] p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-sm transition-transform duration-500 hover:-translate-y-1">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-amber-300/20 bg-slate-950/35 p-4 transition-colors duration-300 hover:border-amber-300/50">
                <p className="text-3xl font-black text-amber-400">+10</p>
                <p className="mt-2 text-sm text-slate-300">anos de experiência em logística</p>
              </div>
              <div className="rounded-2xl border border-amber-300/20 bg-slate-950/35 p-4 transition-colors duration-300 hover:border-amber-300/50">
                <p className="text-3xl font-black text-amber-400">100%</p>
                <p className="mt-2 text-sm text-slate-300">foco em atendimento e segurança</p>
              </div>
              <div className="rounded-2xl border border-amber-300/20 bg-slate-950/35 p-4 transition-colors duration-300 hover:border-amber-300/50 sm:col-span-2">
                <p className="text-3xl font-black text-amber-400">+1.000</p>
                <p className="mt-2 text-sm text-slate-300">
                  entregas realizadas com planejamento, rapidez e atenção ao cliente
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;