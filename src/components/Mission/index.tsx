import { FiArrowUpRight } from 'react-icons/fi';

function index() {
  return (
    <section
      id="mission"
      className="flex flex-wrap items-stretch justify-center gap-x-24 gap-y-7 px-56"
    >
      <h1 className="mt-10 w-full text-center text-lg font-semibold uppercase tracking-wider text-azul-claro">
        Our Mission
      </h1>
      <h2 className="w-full text-center text-6xl font-semibold leading-snug text-preto">
        We've helped
        <br /> innovative companies
      </h2>
      <h3 className="text-center text-xl tracking-widest text-preto/75">
        Hundreds of all sizes and across all industries
        <br /> have made a big improvements with us.
      </h3>

      <div className="my-14 flex w-full items-center justify-around px-36">
        <div className="flex flex-col items-center justify-center gap-3 text-preto">
          <h1 className="text-7xl font-semibold">24%</h1>
          <p className="text-2xl">Revenue business</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 text-preto">
          <h1 className="text-7xl font-semibold">180K</h1>
          <p className="text-2xl">In annual revenue</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 text-preto">
          <h1 className="text-7xl font-semibold">10+</h1>
          <p className="text-2xl">Months of runway</p>
        </div>
      </div>

      <h3 className="w-full text-center text-2xl font-bold uppercase text-preto">
        Choose plan:
      </h3>
      <div className="group flex aspect-video flex-1 cursor-pointer flex-col items-start justify-between gap-6 rounded-3xl bg-branco p-16 drop-shadow-none transition-all duration-500 hover:scale-105 hover:drop-shadow-xl">
        <h1 className="text-7xl text-preto transition-all duration-500 group-hover:tracking-widest">
          Plus
        </h1>
        <h2 className="flex w-full justify-between text-4xl text-preto">
          £2.99/month
          <FiArrowUpRight className="transition-all duration-500 group-hover:-translate-y-4 group-hover:translate-x-4 group-hover:scale-125" />
        </h2>
      </div>
      <div className="group flex aspect-video flex-1 cursor-pointer flex-col items-start justify-between gap-6 rounded-3xl bg-azul-claro p-16 drop-shadow-none transition-all duration-500 hover:scale-105 hover:drop-shadow-xl">
        <h1 className="text-7xl text-white transition-all duration-500 group-hover:tracking-widest">
          Premium
        </h1>
        <h2 className="flex w-full justify-between text-4xl text-white">
          £6.99/month
          <FiArrowUpRight className="transition-all duration-500 group-hover:-translate-y-4 group-hover:translate-x-4 group-hover:scale-125" />
        </h2>
      </div>
    </section>
  );
}

export default index;
