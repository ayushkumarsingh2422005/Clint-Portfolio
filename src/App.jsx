import './App.css';
import Nev from './Components/Nev';
import bg from './Assets/bg.jpg';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';
import Hero from './Components/Hero';
import Works from './Components/Works';
import Cursor from './Components/Cursor';
import About from './Components/About';
import bg2 from './Assets/bg2.jpg'
import Acadmic from './Components/Acadmic';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const bgRef = useRef(null);

  useEffect(() => {
    gsap.to(bgRef.current, {
      scrollTrigger: {
        trigger: ".top_page",
        start: "bottom bottom", // When the bottom of the trigger element hits the bottom of the viewport
        end: "bottom top",         // When the top of the trigger element hits the top of the viewport
        scrub: true,            // Smooth scrubbing
        // markers: true           // Show markers for debugging
      },
      // scale: 0.5, // Scale down the background image
      duration: 3,
      backgroundSize: "300%"
    });
  }, []);

  return (
    <>
      <div className='h-screen w-full fixed top-0 left-0 -z-50' style={{
        backgroundImage: `url('${bg}')`,
        backgroundSize: '100%',
        backgroundPosition: 'top center',
      }} ref={bgRef}></div>
      <div className='bg-[#000000bb] h-screen w-full top_page'>
        <Nev />
        <Hero />
      </div>
      <div className='bg-[#000000bb] w-full'>
        <Works />
      </div>
      <div className='bg-[#000000dd] w-full h-screen about_parent'>
        <About />
      </div>
      <div className='bg-[#000000bb] w-full h-screen overflow-y-scroll'>
        <Acadmic />
      </div>
      {/* <Cursor /> */}
    </>
  );
}

export default App;
