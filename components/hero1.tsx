import Header from "./header";

export default function Hero() {
  return (
    <main className="lg:relative bg-blue-400">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Meet SURFER INU, </span>{' '}
              <span className="block text-white xl:inline">riding the wave of the Metaverse!</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-white sm:text-xl md:mt-5 md:max-w-3xl">
            Surfer Inu ($SURFINU) is a highly deflationary token on the
                Ethereum Blockchain that never stops pumping through the use of
                true deflationary techniques and further income generation.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="https://uniswap.org/"
                  target="_blank"
                  className="w-full flex items-center justify-center px-8 py-6 font-bold
                  bg-orange-500 hover:bg-orange-400 text-white text-xl tracking-wider border-b-4 border-orange-700 hover:border-orange-900 rounded-lg"
                >
                  Buy on Uniswap
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-6 font-bold
                  bg-orange-500 hover:bg-orange-400 text-white text-xl tracking-wider border-b-4 border-orange-700 hover:border-orange-900 rounded-lg"
                >
                  Documentation
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute h-shiba object-cover sm:pt-16"
            src="./shibaSurf.png"
            alt=""
          />
        </div>
      </main>
  );
}
