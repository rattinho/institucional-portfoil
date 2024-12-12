import { BsBank2 } from 'react-icons/bs';
import { MdArrowRightAlt } from 'react-icons/md';

function index() {
  return (
    <section
      id="whyus"
      className="flex flex-wrap items-stretch justify-center gap-7 px-56"
    >
      <h1 className="mt-10 w-full text-center text-lg font-semibold uppercase tracking-wider text-azul-claro">
        Why Us
      </h1>
      <h2 className="mb-12 mt-5 w-full text-center text-6xl font-semibold text-preto">
        Why they prefer GWallet
      </h2>
      <div className="flex flex-1 flex-col items-start gap-6 rounded-3xl bg-branco p-16">
        <h3 className="text-9xl font-semibold text-azul-claro">3k+</h3>
        <p className="text-[40px] font-semibold leading-snug text-preto">
          Businesses already running <br /> on GWallet
        </p>
      </div>
      <div className="flex flex-1 flex-col items-start justify-between rounded-3xl bg-branco p-16">
        <h3 className="text-[40px] font-semibold text-preto">
          Instant Withdraw your funds at any time
        </h3>
        <div className="flex w-full items-center justify-center">
          <BsBank2 className="aspect-square h-20 w-20 rounded-xl bg-azul-claro p-3 text-white" />
          <div className="flex flex-col items-center justify-center gap-3">
            <MdArrowRightAlt className="-mb-6 h-14 w-14 text-azul-claro" />
            <MdArrowRightAlt className="-mt-6 h-14 w-14 rotate-180 text-preto" />
          </div>
          <BsBank2 className="aspect-square h-[86px] w-[86px] rounded-full bg-preto p-3 text-white" />
        </div>
      </div>
      <div className="flex w-full items-center gap-24 overflow-hidden rounded-3xl bg-branco p-16 pb-0">
        <div className="flex w-1/3 flex-col items-start gap-4">
          <h3 className="text-[40px] font-semibold text-preto">
            No asset Volatility
          </h3>
          <p className="text-xl tracking-widest text-preto/75">
            Generate returns on your
            <br /> cash reserves without making
            <br /> any investments.
          </p>
        </div>
        <div className="flex-1 rounded-t-3xl bg-white p-6 drop-shadow-xl">
          <img
            src="./graph.webp"
            alt="graph"
            className="w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default index;
