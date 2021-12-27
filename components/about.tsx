/* This example requires Tailwind CSS v2.0+ */



export default function About() {
  if (typeof window !== "undefined") {
    var style =  window.innerWidth > 640 ? {backgroundImage: "url('/wave1.png')"} : {};
  }

  return (
    <div id="story"
     className="bg-blue-400 h-5/6 py-24 overflow-hidden ">

      <div className="relative left-8 sm:left-16 h-auto rounded-2xl pt-12 px-8 overflow-hidden transition-colors
      bg-gradient-to-r from-white to-blue-00 
      ">
      <div className="h-full bg-no-repeat bg-cover bg-right bg-local bg-opacity-40 "
      style = {style}
      >

        <h1 
        className="font-extrabold text-3xl sm:text-5xl text-center sm:text-left pr-10 sm:pr-0
                  tracking-wider">
          Origin Story & Ecosystem
        </h1>
        <p className="mt-6 text-lg tracking-wide font-semibold w-5/6 leading-7 z-10 text-opacity-100 text-center sm:text-left">
        It was a swampy, ominous spring day in the city of Cincinatti. The air buzzed with anticipation, and a blanket of gloom and foreboding hung like an anchor over the town. Suddenly, in the flash of a moment, a single bullet ripped through the air and found its mark. <br/><br/>

        As Harambe’s body hit the dirt, a deep wave of grief pulsed out. The good people of the metaverse sensed the magnitude of the tragedy, and a single tear caressed down the faces of freedom loving HODLers everywhere.  <br/><br/>

        Soon, flows of single tears everywhere joined together, and from a million tears, a thousand rivers of grief were born, churning and flowing until they became the most terrifying disaster of them all - a tsunami of FUD.   <br/><br/>

        On that day, a young dog felt the tug of destiny, and rather than cower in fear, our hero answered the call. That dog was no normal dog - he was Surfer Inu. <br/><br/>

        As the Tsunami rumbled past him, Surfer Inu grabbed a piece of driftwood and dropped in, shredding the gnar and getting totally pitted. Seeing our hero conquer the FUD, the HODLers rejoiced, and from their cheers emerged a glimmer of hope. 

        <br/><br/>

        And just as he had grabbed the reins of destiny, Surfer Inu wrested control of the Tsunami and pointed it to the one place it belonged - the moon.  <br/><br/>

        The good people of the metaverse watched in awe as one dog, the father of a movement, rode the Tsunami into the sky. Green candles rained down upon everyone, and rumor has it, if you look hard enough into the clear night sky, you can still see Surfer shredding the gnar in a galaxy far, far away. 
        <br/><br/>
        
        </p>
        </div>

      

      </div>
      </div>
    
  );
}
