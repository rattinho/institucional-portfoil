import { FaCreditCard } from 'react-icons/fa6';
import { BsBank2 } from 'react-icons/bs';
import { FaShieldAlt } from 'react-icons/fa';

function index() {
  return (
    <section
      id="future"
      className="grid h-screen w-full place-items-center bg-[linear-gradient(to_bottom,_#E9F3F4_0%,_#E9F3F4_20%,_white_20%)]"
    >
      <div className="flex w-11/12 flex-col items-center justify-center gap-20 rounded-3xl bg-white p-28 drop-shadow-xl">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col items-start gap-3 text-start">
            <h1 className="font-semibold text-azul-claro">FUTURE PAYMENT</h1>
            <h2 className="text-6xl font-bold leading-snug tracking-wider text-preto drop-shadow-md">
              Experience that grows
              <br /> with your scale.
            </h2>
          </div>
          <p className="mt-10 text-start text-2xl tracking-widest text-preto">
            Design a financial operating system that works for
            <br /> your business and streamlined cash flow
            <br /> management
          </p>
        </div>
        <div className="flex w-full items-center justify-between gap-36">
          <div className="flex flex-col items-start text-preto">
            <FaCreditCard className="h-14 w-14 text-azul-claro drop-shadow-md" />
            <h1 className="mt-6 text-3xl font-bold">Free transfers</h1>
            <p className="mt-2 text-xl">
              Create a financial experienceay and automate repeat purchases by
              scheduling recurring payments.
            </p>
          </div>
          <div className="flex flex-col items-start text-preto">
            <BsBank2 className="h-14 w-14 text-azul-claro drop-shadow-md" />
            <h1 className="mt-6 text-3xl font-bold">Multiple account</h1>
            <p className="mt-2 text-xl">
              Run your operations with cash from your account and generate yieid
              on funds stored in your account.
            </p>
          </div>
          <div className="flex flex-col items-start text-preto">
            <FaShieldAlt className="h-14 w-14 text-azul-claro drop-shadow-md" />
            <h1 className="mt-6 text-3xl font-bold">Unmatched security</h1>
            <p className="mt-2 text-xl">
              Securely manage your finances with organization-wide MFA,
              card-locking, and account-level controls.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
