import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import HeaderImage from './assets/animateone.gif';
import Clock from './components/clock/Clock';
import ServiceCard from './components/ServiceCard';
import { TypewriterCursor, LaserTypewriter } from './components/TextEffects';
import servicesData from '../data/services.json';

function App() {
  return (
    <> 
      <Navbar />   
      
      {/* Hero Header */}
      <header className="relative min-h-[75vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[url(./assets/animateone.gif)] bg-cover bg-center bg-no-repeat text-text-primary">
        {/* Dark Overlay Filter */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[rgba(10,10,15,0.6)] via-[rgba(10,10,15,0.4)] to-[rgba(10,10,15,0.85)]" />
        
        <article className="relative z-20 flex flex-col items-center text-center gap-lg">
          <div className="flex flex-col items-center text-center gap-lg">
            <TypewriterCursor
              text="Kreativ_ Sahara"
              delay={200}
              speed={120}
              className="text-[clamp(2.5rem,7vw,5rem)] font-black tracking-tighter bg-gradient-to-br from-accent-primary to-accent-secondary bg-clip-text text-transparent"
            />
            <div className="mt-2 text-[clamp(1rem,2.5vw,1.5rem)] font-normal text-text-secondary max-w-[500px] leading-relaxed">
              <LaserTypewriter
                text="Bring your imagination to life"
                delay={2200}
                speed={0.06}
              />
            </div>
           </div>
        </article>
      </header>

      <Clock />

      {/* Services Section Heading */}
      <div className="text-center py-3xl px-lg pb-xl">
        <h3 className="text-[clamp(1.75rem,4vw,3rem)] font-extrabold bg-gradient-to-br from-accent-primary to-accent-secondary bg-clip-text text-transparent">
          Get Started
        </h3>
      </div>

      {/* Services Grid */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl px-lg py-2xl max-w-[1280px] mx-auto">
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            image={HeaderImage}
          />
        ))}
      </main>

      <Footer />
    </>
  );
}

export default App;