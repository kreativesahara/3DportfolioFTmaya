import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer';
import CoverImage from '../assets/animateone.gif';

const About = () => {
  return (
    <div className="bg-bg-primary min-h-screen">
      <Navbar/>
      
      {/* About Hero Section */}
      <div className="pt-[calc(var(--navbar-height)+var(--space-2xl))] pb-xl">
        <div className="text-center py-3xl px-lg pb-xl">
          <h3 className="text-[clamp(1.75rem,4vw,3rem)] font-extrabold bg-gradient-to-br from-accent-primary to-accent-secondary bg-clip-text text-transparent">
            Story Board
          </h3>
        </div>
      </div>
      
      {/* About Content Container */}
      <main className="bg-bg-elevated rounded-lg border border-border-color p-2xl mx-lg md:mx-auto mb-xl max-w-[1280px]">
        <div className="flex flex-col gap-lg md:flex-row md:items-start">
          <img src={CoverImage} alt="The Galactic War concept art" className="rounded-md w-full max-w-[400px] h-auto object-cover" />
          <h1 className="text-[clamp(2rem,5vw,3.75rem)] font-bold text-text-primary leading-[1.2] tracking-tighter shadow-2xl">
            The Galactic War: <br />A Battle for Supremacy 
          </h1>
        </div>
        
        <div className="mt-xl flex flex-col gap-lg">
          <p className="text-text-secondary text-[1rem] leading-[1.8] font-normal">
            The year is <strong className="text-accent-secondary">2342</strong>. The galaxy is on the brink of all-out war. Two factions, the technologically advanced Empyrean Alliance and the militaristic Dominion, vie for supremacy over countless star systems. Their conflict has ignited a cosmic fire, consuming planets and leaving entire civilizations in ruins.
            <br /><br />
            <b className="text-text-primary font-bold">The Battleground: <i className="text-accent-primary not-italic font-semibold">Cyber Arenas</i> </b>
              In the midst of this galactic turmoil, a new form of warfare has emerged: the Cyber Arena.
              These digital battlegrounds are holographic simulations of real-world combat, designed to test the skills and
              strategies of the galaxy's finest warriors. The data collected from these arenas is invaluable, providing
              crucial insights into enemy tactics and weapon systems.
            <br /><br />
            <b className="text-text-primary font-bold">The Game: <i className="text-accent-primary not-italic font-semibold">Competitive Gameplay </i></b>
            Players take on the roles of elite soldiers from either the Empyrean Alliance or the Dominion.
            They compete in a variety of game modes, each designed to replicate different aspects of galactic warfare: <br /><br />
            
            <ol className="list-none pl-lg text-text-secondary flex flex-col gap-sm">
              <li className="py-1 leading-relaxed"><span className="text-accent-secondary mr-2">*</span> Deathmatch: A free-for-all where players fight to eliminate as many opponents as possible.</li>
              <li className="py-1 leading-relaxed"><span className="text-accent-secondary mr-2">*</span> Team Deathmatch: Players are divided into teams, battling for supremacy through coordinated attacks and strategic teamwork.</li>
              <li className="py-1 leading-relaxed"><span className="text-accent-secondary mr-2">*</span> Capture the Flag: Teams compete to capture and hold enemy flags, testing their ability to defend their own territory while infiltrating enemy lines.</li>
              <li className="py-1 leading-relaxed"><span className="text-accent-secondary mr-2">*</span> Domination: Players fight for control of specific points on the map, requiring strategic positioning and effective teamwork.</li>
              <li className="py-1 leading-relaxed"><span className="text-accent-secondary mr-2">*</span> Search and Destroy: Teams alternate between attacking and defending objectives, simulating high-stakes combat operations.</li>
            </ol>
            
            <br />
            <b className="text-text-primary font-bold">Progression and Rewards</b><br />
            As players progress through the ranks, they unlock new weapons, armor, and abilities, allowing them to customize their characters to suit their preferred playstyle. Victory in matches grants experience points and in-game currency, which can be used to purchase upgrades and cosmetic items.
            <br /><br />
            The ultimate goal for every player is to rise to the top of the leaderboards and become a legendary champion of their faction. Their skills will not only determine their in-game success but also contribute to the overall war effort, potentially tipping the scales in favor of their chosen side.
            <br /><br />
            The Galactic War is more than just a game; it's a test of skill, strategy, and loyalty. 
            <br />
            Will you join the Empyrean Alliance or the Dominion? The fate of the galaxy depends on your valor.
          </p>
          
          <code className="font-mono text-accent-secondary bg-surface-glass px-md py-sm rounded-sm inline-block mt-lg border border-border-color shadow-md text-sm md:text-base italic">
            This is a cyber Arcade Game that we all longed to play on our <br className="hidden md:block"/> Video Games
          </code>
        </div>
      </main>
      
      <Footer/>
    </div>
  );
};

export default About;