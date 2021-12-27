
import Hero1 from "../components/hero1"
import Tokenomics from "../components/tokenomics"
import Nav from "../components/nav";
import About from "../components/about";
import Project from "../components/project";
import Community from "../components/community";


export default function Index() {
  return (
    <body>
      <Nav/>
      <Hero1/>
      <About/>

      <Tokenomics/>
      <Community /> 
    </body>
  );
}