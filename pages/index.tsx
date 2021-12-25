
import Hero from "../components/hero";
import Nav from "../components/nav";
import About from "../components/about";


export default function Index() {
  return (
    <body>
      <Nav/>
      <Hero/>
      <About/>
     <div className='bg-blue-400 flex justify-center py-32 '>
      <img src='./tokenomics.svg' />
    </div>
    </body>
  );
}