import { FaGoogleWallet } from 'react-icons/fa';

function index() {
  return (
    <nav className="sticky top-0 z-50 flex h-[var(--menu-heigh)] w-full items-center justify-between bg-branco px-28 text-preto">
      <div className="flex items-center gap-32">
        <div className="flex items-center gap-3">
          <FaGoogleWallet className="h-10 w-10" />
          <h1 className="text-3xl font-extrabold">GWallet</h1>
        </div>
        <div className="flex items-center gap-10 text-base">
          <button className="border-b-2 border-transparent transition-all hover:border-preto">
            Products
          </button>
          <button className="border-b-2 border-transparent transition-all hover:border-preto">
            Costumers
          </button>
          <button className="border-b-2 border-transparent transition-all hover:border-preto">
            Pricing
          </button>
          <button className="border-b-2 border-transparent transition-all hover:border-preto">
            Learn
          </button>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <button className="transition-al w-24 rounded-xl border-[1px] border-preto py-2 transition-all hover:tracking-widest hover:drop-shadow-md">
          Login
        </button>
        <button className="w-24 rounded-xl border-[1px] border-preto bg-preto py-2 text-branco transition-all hover:tracking-widest hover:drop-shadow-md">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default index;
