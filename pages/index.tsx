
import Hero1 from "../components/hero1"
import Tokenomics from "../components/tokenomics"
import Nav from "../components/nav";
import About from "../components/about";
import Project from "../components/project";
import Community from "../components/community";
import Head from 'next/head'


export default function Index() {
  return (
    <>
    <Head>
        <title>Surfer Inu</title>
        <meta name='description' content='Surfer Inu ($SURFINU) is a highly deflationary token on the Ethereum Blockchain that never stops pumping through the use of true deflationary techniques and further income generation.'></meta>
        <meta property="og:image"  content="./meta_image.png"></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <body>
      <Nav/>
      <Hero1/>
      <About/>

      <Tokenomics/>
      <Community /> 
    </body>
    </>
  );
}