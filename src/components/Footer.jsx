import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='box font-bold'>
        <div className='footer  text-6xl'>Kreativ ///// Saharaa</div>
        <div className='footer'>
          <ul className='text-center '>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='footer'>
          <ul className='text-center '>
            <li>Terms</li>
            <li>Privacy</li> 
            <li>Cookies</li>
         </ul>
        </div>
      </div>
      <div className='text-center font-bold'>Copyright &copy; 2023 Kreativ Saharaa</div>
    </footer>
  )
}

export default Footer