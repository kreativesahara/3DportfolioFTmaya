import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'
import CoverImage from '../assets/animateone.gif'

const About = () => {
  return (
    <div>
      <Navbar/>
      <div className='about-hero'>
        <div className='section-heading'>
          <h3>Story Board</h3>
        </div>
      </div>
      <div className='about-content'>
        <section>
          <img src={CoverImage} alt="The Galactic War concept art" />
          <h1>The Galactic War: <br />A Battle for Supremacy </h1>
        </section>
        <section>
          <p>
            The year is <strong>2342</strong>. The galaxy is on the brink of all-out war. Two factions, the technologically advanced Empyrean Alliance and the militaristic Dominion, vie for supremacy over countless star systems. Their conflict has ignited a cosmic fire, consuming planets and leaving entire civilizations in ruins.
            <br /><br />
            <b>The Battleground: <i>Cyber Arenas</i> </b>
              In the midst of this galactic turmoil, a new form of warfare has emerged: the Cyber Arena.
              These digital battlegrounds are holographic simulations of real-world combat, designed to test the skills and
              trategies of the galaxy's finest warriors. The data collected from these arenas is invaluable, providing
              crucial insights into enemy tactics and weapon systems.
            <br /><br />
            <b>The Game: <i>Competitive Gameplay </i></b>
            Players take on the roles of elite soldiers from either the Empyrean Alliance or the Dominion.
            They compete in a variety of game modes, each designed to replicate different aspects of galactic warfare: <br /><br />
              <ol>
                <li>* Deathmatch: A free-for-all where players fight to eliminate as many opponents as possible.</li>
                <li>* Team Deathmatch: Players are divided into teams, battling for supremacy through coordinated attacks and strategic teamwork.</li>
                <li>* Capture the Flag: Teams compete to capture and hold enemy flags, testing their ability to defend their own territory while infiltrating enemy lines.</li>
                <li>* Domination: Players fight for control of specific points on the map, requiring strategic positioning and effective teamwork.</li>
                <li>* Search and Destroy: Teams alternate between attacking and defending objectives, simulating high-stakes combat operations.</li>
              </ol>
            <br /><br />
            <b>Progression and Rewards</b>
            As players progress through the ranks, they unlock new weapons, armor, and abilities, allowing them to customize their characters to suit their preferred playstyle. Victory in matches grants experience points and in-game currency, which can be used to purchase upgrades and cosmetic items.
            <br /><br />
            The ultimate goal for every player is to rise to the top of the leaderboards and become a legendary champion of their faction. Their skills will not only determine their in-game success but also contribute to the overall war effort, potentially tipping the scales in favor of their chosen side.
            <br /><br />
            The Galactic War is more than just a game; it's a test of skill, strategy, and loyalty. 
            <br />
            Will you join the Empyrean Alliance or the Dominion? The fate of the galaxy depends on your valor.
            </p>
          <code>This is a cyber Arcade Game that we all longed to play on our <br /> Video Games</code>
        </section>
      </div>
      <Footer/>
    </div>

  )
}

export default About