export default function Tokenomics() {
  return (
    <div className="bg-blue-400 h-screen relative grid place-items-stretch pt-10">
      <div className="w-5/6 h-5/6 lg: h-3/4 rounded-2xl bg-gradient-to-b from-white to-blue-400 mx-32 flex flex-col items-center gap-y-20">
          <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-blue-300 to-blue-400 pt-10 font-extrabold text-6xl">$SURFINU</h2>
        <img src="./tokenomics.svg" className="px-10 pb-10"/>
      </div>
    </div>
  );
}
