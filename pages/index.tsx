
import Hero from "../components/hero";
import Nav from "../components/nav";
import About from "../components/about";
import Tokenomics from '../assets/tokenomics'

export default function Index() {
  return (
    <body>
      <Nav/>
      <Hero/>
      <About/>
     <div className='bg-blue-400 flex justify-center py-32 '>
      <Tokenomics />
    </div>
    </body>
  );
}