import React from 'react'
//import Clock from 'react-clock'
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer'
import HeaderImage from './assets/animateone.gif'
import Clock from './components/clock/Clock'
import './Control.css'
function App  () {
  return (
    < > 
      <Navbar />   
      <header className='pt-16 justify-center h-screen'>
        <article className='text-center'>
          <div className='title'>
            <span className='text-6xl shadow-2xl font-bold text-red mt-20'>Kreativ_Saharaa</span> 
            <span className='font-bold shadow-2xl'>Bring your imagination<br/> to life</span>
           </div>
        </article>
      </header>
      <Clock />
      <h3 className='text-6xl font-bold'>Get Started</h3>
      <main className=' w-full h-fit md:flex md:flex-col'>
        <section className='avatar'>
          <img src={HeaderImage} alt="" />
          <h2 className='font-bold'>PRODUCT DESIGN</h2>
          <p>Our team of experienced designers will elevate your product to 
            new heights. From concept to launch, we provide end-to-end product 
            design solutions tailored to your specific needs. Our services include user 
            research, UI/UX design, prototyping, and design system development. Let us
            help you create a product that not 
            only looks amazing but also delivers exceptional user experiences.</p>
        </section>
        <section className='avatar'>
          <img src={HeaderImage} alt="" />
          <h2 className='font-bold'>2D & 3D ANIMATION</h2>
          <p>Our talented animation team specializes in crafting captivating visual
            stories. Whether you need engaging 2D animation for a playful brand identity or
            immersive 3D animation for a blockbuster film, we've got you covered. Our
            expertise in character development, storytelling, and technical animation ensures
            that your project stands out. Let's create something extraordinary together.</p>
        </section>
        <section className='avatar'>
          <img src={HeaderImage} alt="" />
          <h2 className='font-bold'>VIDEO RENDERING AND EDITING</h2>
          <p>Our expert team provides top-tier video rendering and editing services to
            bring your vision to life. We handle complex projects with precision,
            ensuring seamless transitions, flawless visual effects, and optimized
            performance. From quick turnarounds to high-end productions, we deliver
            exceptional results. Let us handle the technicalities while you focus on
            the creative process.</p>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default App