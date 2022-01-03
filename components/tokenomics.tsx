export default function Tokenomics() {
  if (typeof window !== "undefined") {
    var img =  window.innerWidth < 640 ? "./tokenomics_mobile.svg" : "./tokenomics.svg";
  }

  return (
    <div id="tokenomics" className="bg-blue-400 sm:pt-10 pb-24 flex-col items-center justify-center">
        <h2 className="pb-16 sm:pb-24 text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-orange-400 pt-10 font-extrabold text-5xl sm:text-6xl sm:pr-16">$SURFINU</h2>
        <img src={img} className="px-10 pb-10"/>
    
    </div>
  );
}
