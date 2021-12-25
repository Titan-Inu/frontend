import Header from "./header";

export default function Hero() {
  return (
    <div className=" flex relative bg-blue-400 pb-24 overflow-hidden pl-12 pointer-events-auto ">
      {/* <div className="relative pt-6">
        <Header />
      </div> */}
      <main className="relative mt-20 mx-10 max-w-7xl ">
        <div
          className="md:grid md:grid-cols-12 
          md:gap-8"
        >
          <div className="px-4 sm:px-6 md:max-w-2xl md:col-span-7 md:text-left flex ">
            <div>
              <h1
                className=" font-extrabold text-white
                  tracking-wide
                   sm:mt-5 md:mt-4 lg:text-5xl xl:text-6xl"
              >
                <span className="md:block my-12">
                  Meet SURFER INU, riding the wave of the Metaverse!
                </span>
              </h1>
              <p className="mt-3 text-base text-white sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Surfer Inu ($SURFINU) is a highly deflationary token on the
                Ethereum Blockchain that never stops pumping through the use of
                true deflationary techniques and further income generation.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-12 ">
                <a className="align-middle bg-orange-500 hover:bg-orange-400  pointer-events-auto z-50 cursor-pointer
                text-white
                text-center text-xl tracking-wider
                font-bold py-6 border-b-4 border-orange-700 hover:border-orange-900 rounded-lg" target="_blank" href="https://uniswap.org/">
                  Buy on Uniswap
                </a>
                <a className=" bg-orange-500 hover:bg-orange-400 text-white pointer-events-auto z-50 cursor-pointer
                text-center text-xl tracking-wider
                font-bold py-6 border-b-4 border-orange-700 hover:border-orange-900 rounded-lg">
                  Documentation
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="absolute flex w-full justify-end pr-36 pt-12 items-center z-10">
        <img src='./shibaSurf.png' className="h-shiba"></img>
      </div>
    </div>
  );
}
