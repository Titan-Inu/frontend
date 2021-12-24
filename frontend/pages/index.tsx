
import Hero from "../components/hero";
import About from "../components/about";
import Tokenomics from '../assets/tokenomics'

export default function Index() {
  return (
    <body>
      <Hero />
      <About/>
     <div className='bg-blue-400 flex justify-center py-16 '>
      <Tokenomics />
    </div>
    </body>
  );
}