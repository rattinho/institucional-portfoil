function index() {
  return (
    <section
      id="step"
      className="flex h-screen flex-col items-start justify-center bg-preto p-56"
    >
      <h1 className="mt-10 w-full text-start text-lg uppercase tracking-wider text-azul-claro">
        Step
      </h1>
      <h2 className="mb-12 mt-5 w-full text-start text-6xl text-white">
        Maximize your returns with a<br />
        Reserve account that generates.
      </h2>
      <div className="flex w-full items-stretch gap-12 text-white">
        <div className="bg-preto2 group flex flex-col items-start gap-3 rounded-3xl p-10 transition-all duration-500 hover:scale-105 hover:bg-white">
          <span
            className="text-9xl transition-all duration-500 group-hover:text-preto"
            style={{
              mask: 'linear-gradient(to bottom, white -10%, transparent 80%)',
            }}
          >
            1
          </span>
          <h3 className="text-3xl transition-all duration-500 group-hover:text-preto">
            Open your account
          </h3>
          <p className="font-light tracking-wider text-branco/75 transition-all duration-500 group-hover:text-preto/75">
            Sign up to finpay and set up your account from the dashboard.
          </p>
        </div>
        <div className="bg-preto2 group flex flex-col items-start gap-3 rounded-3xl p-10 transition-all duration-500 hover:scale-105 hover:bg-white">
          <span
            className="text-9xl transition-all duration-500 group-hover:text-preto"
            style={{
              mask: 'linear-gradient(to bottom, white -10%, transparent 80%)',
            }}
          >
            2
          </span>
          <h3 className="text-3xl transition-all duration-500 group-hover:text-preto">
            Transfer your money
          </h3>
          <p className="font-light tracking-wider text-branco/75 transition-all duration-500 group-hover:text-preto/75">
            Move money from to another account into and start to earning up.
          </p>
        </div>
        <div className="bg-preto2 group flex flex-col items-start gap-3 rounded-3xl p-10 transition-all duration-500 hover:scale-105 hover:bg-white">
          <span
            className="text-9xl transition-all duration-500 group-hover:text-preto"
            style={{
              mask: 'linear-gradient(to bottom, white -10%, transparent 80%)',
            }}
          >
            3
          </span>
          <h3 className="text-3xl transition-all duration-500 group-hover:text-preto">
            Watch your balance grow
          </h3>
          <p className="font-light tracking-wider text-branco/75 transition-all duration-500 group-hover:text-preto/75">
            Accessed instantly and remain insulated from market volatility.
          </p>
        </div>
      </div>
    </section>
  );
}

export default index;
