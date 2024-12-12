import { FiArrowUpRight } from 'react-icons/fi';

import { SiNubank } from 'react-icons/si';
import { SiIcicibank } from 'react-icons/si';
import { FaGooglePay } from 'react-icons/fa';
import { FaPaypal } from 'react-icons/fa';

import { FaCreditCard } from 'react-icons/fa6';
import { BsBank2 } from 'react-icons/bs';

import { RiVisaLine } from 'react-icons/ri';
import { HiOutlineSignal } from 'react-icons/hi2';
import { MdTrackChanges } from 'react-icons/md';

function index() {
  return (
    <section
      id="hero"
      className="relative flex h-screen items-center justify-center overflow-hidden bg-branco px-52"
    >
      <div className="z-10 flex flex-1 flex-col items-start gap-10 text-preto">
        <h1 className="text-7xl leading-[5rem]">
          <strong>Get paid early</strong>
          <br /> save automatically <br />
          all your pay.
        </h1>
        <p className="text-xl">
          Supports small business with simple invoicing, <br />
          powerful integrations, and cash flow management tools.
        </p>
        <div className="flex w-2/3 items-center rounded-xl border-[1px] border-black/10 bg-white pl-10">
          <input
            type="text"
            placeholder="Your business email"
            className="w-full border-0 bg-transparent pr-5 !outline-none"
          />
          <button className="flex items-center gap-2 text-nowrap rounded-xl bg-azul-claro px-3 py-4 text-lg text-white transition-all hover:bg-preto">
            Get Started
            <FiArrowUpRight className="mb-1 h-6 w-6" />
          </button>
        </div>
        <div className="flex w-1/2 items-center justify-between text-preto">
          <SiNubank className="h-14 w-14" />
          <SiIcicibank className="h-12 w-12" />
          <FaGooglePay className="h-20 w-20" />
          <FaPaypal className="h-12 w-12" />
        </div>
      </div>

      <div className="z-10 flex flex-1 flex-col items-center pr-24">
        <div className="relative flex w-7/12 flex-col items-start gap-1 rounded-3xl bg-white p-8 drop-shadow-xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="aspect-square w-12 rounded-xl bg-azul-claro pt-[.4rem] text-center text-3xl font-bold text-white">
              A
            </span>
            <div className="flex flex-col items-start text-preto">
              <span className="-mb-1 text-lg font-bold">Alexander Frank</span>
              <span className="text-preto/75">alexander@email.com.br</span>
            </div>
          </div>
          <div className="flex w-full flex-col items-start rounded-xl border-[1px] border-black/15 p-4">
            <span className="font-bold text-preto/75">Invoice</span>
            <span className="text-4xl font-bold text-preto">$1,234,567</span>
            <span className="text-sm text-preto/75">Dec. 09, 2024</span>
          </div>
          <div className="flex w-full items-center justify-between rounded-xl border-2 border-azul-claro bg-white p-4 font-bold text-preto drop-shadow-md">
            <div className="flex items-center gap-3">
              <FaCreditCard className="mb-[.1rem]" />
              Credit Card
            </div>
            <div className="grid aspect-square w-5 place-content-center rounded-full border-[1px] border-azul-claro">
              <div className="aspect-square w-3 rounded-full bg-azul-claro"></div>
            </div>
          </div>
          <div className="flex w-full items-center justify-between rounded-xl border-[1px] border-black/15 p-4 font-bold text-preto">
            <div className="flex items-center gap-3">
              <BsBank2 className="mb-[.1rem]" />
              Bank Account
            </div>
            <div className="grid aspect-square w-5 place-content-center rounded-full border-[1px] border-black/15"></div>
          </div>
          <button className="mt-4 w-full rounded-xl bg-preto py-2 text-center text-lg font-light text-white transition-all hover:bg-azul-claro">
            Pay
          </button>

          <div className="absolute left-[65%] top-[-23%] flex aspect-[3_/_4] w-7/12 flex-col items-start justify-between overflow-hidden rounded-3xl bg-azul-claro drop-shadow-xl">
            <div className="flex w-full flex-col items-start p-8 text-white">
              <span className="font-light tracking-wider">Credit Card</span>
              <span className="text-nowrap text-2xl tracking-widest">
                234 **** ****
              </span>
            </div>
            <div className="flex w-full items-center justify-between bg-preto px-8 py-1 text-white">
              <RiVisaLine className="h-16 w-16" />
              <HiOutlineSignal className="h-10 w-10" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-[-10%] top-[0] z-0 h-full">
        <MdTrackChanges className="h-[200%] w-[200%] text-black/5" />
      </div>
    </section>
  );
}

export default index;
