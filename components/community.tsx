import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faTelegramPlane,
    faDiscord,
    faMedium,
    faMediumM
  } from "@fortawesome/free-brands-svg-icons";

export default function Community() {
    return (
      <main id = "community" className="bg-blue-400 sm:pt-32">
        <div className="px-4 flex-col items-center justify-center mx-auto max-w-7xl w-full text-center">
            <h1 className="font-extrabold text-5xl sm:text-6xl text-white"> Our community is growing faster than ever 🚀 </h1>
            <div className="text-lg font-bold text-white pt-8 sm:text-3xl">
            <span className="text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-100 to-orange-300 font-bold">Surfer Inu </span>
                is a cryptocurrency developed by the DegenAnimal community surfing the web3 ecosystem. <br/> <br></br>
               <span className="px-4"> Join our community to never miss an update! </span>
             </div>

             <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 py-12"> 
                <a href="" target={"_blank"}>
                <button className=' flex items-center justify-center font-bold text-2xl tracking-wide w-full h-auto sm:w-32 px-6 py-3 rounded-lg bg-white text-orange-400'>
                        <FontAwesomeIcon icon={faMedium} /> <span className ="pl-2 text-sm">Medium</span> 
                </button>
                </a>

                <a href="" target={"_blank"}>
                <button className='flex items-center justify-center font-bold text-2xl tracking-wide w-full h-auto sm:w-32 px-6 py-3 rounded-lg bg-white text-orange-400'>
                        <FontAwesomeIcon icon={faTelegramPlane} /> <span className ="pl-2 text-sm">Telegram</span> 
                </button>
                </a>
                <a href="https://twitter.com/SurferInu" target={"_blank"}>
                <button className=' flex items-center justify-center font-bold text-2xl tracking-wide w-full h-auto sm:w-32  px-6 py-3 rounded-lg bg-white text-orange-400'>
                        <FontAwesomeIcon icon={faTwitter} /> <span className ="pl-2 text-sm">Twitter</span> 
                </button>
                </a>
            </div>
         
        </div>



      </main>
    );
  }
  

