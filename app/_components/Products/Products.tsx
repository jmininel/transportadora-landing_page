import Image from "next/image";

const cargoExamples = [
  {
    name: "Peças bovinas selecionadas",
    description: "Peças de carne preparadas para seguir viagem.",
    image: "/carga-cortes.jpg",
    imageAlt: "Carne bovina preparada em close",
  },
  {
    name: "Carnes e cortes variados",
    description: "Exemplo de produtos do setor frigorificado transportados pela empresa.",
    image: "/image2.jpg",
    imageAlt: "Cortes bovinos frescos",
  },
  {
    name: "Cortes bovinos",
    description: "Carnes bovinas acondicionadas para transporte frigorificado.",
    image: "/image3.jpg",
    imageAlt: "Peças de carne bovina",
  },
];

const Products = () => {
  return (
    <section id="products" className="bg-[#f8f6ef] py-20 text-slate-950 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-6 border-b border-slate-900/15 pb-8 lg:grid-cols-[1fr_24rem] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
              Cargas frigorificadas
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-black leading-tight sm:text-5xl">
              Produtos que seguem com a gente.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-slate-600 sm:text-lg">
            Peças de carne e cortes bovinos fazem parte do universo de cargas atendidas pela Soldera Transportes.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {cargoExamples.map((example, index) => (
            <article key={example.name}>
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-200 rounded-3xl">
                <Image
                  src={example.image}
                  alt={example.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
                <span className="absolute bottom-4 right-4 font-mono text-sm font-semibold text-white drop-shadow">
                  0{index + 1}
                </span>
              </div>
              <div className="flex flex-col gap-2 border-b border-slate-900/15 py-5 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-bold">{example.name}</h3>
                <p className="max-w-sm text-sm leading-6 text-slate-600 sm:text-right">
                  {example.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;