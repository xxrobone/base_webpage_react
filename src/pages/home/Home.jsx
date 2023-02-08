import React from 'react'

// styles & animation
import './Home.scss'
import {motion as mt } from 'framer-motion'

const Home = () => {
  return (
    <mt.div
      className='home'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeIn"}}
    >
      <mt.h1
      initial={{ opacity: 0, translateX: -200 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.75, ease: "easeIn", delay: 0.2}}
      >
        homepage
      </mt.h1>
      <mt.div className="info"
      initial={{ opacity: 0, translateX: -300 }}
      animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.75, ease: "easeOut", delay: 0.5 }}
      >
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, numquam velit dolore mollitia magnam ut dicta quos tenetur minima a aliquam! Sed quos fugit itaque cumque qui eius, deleniti excepturi.</p>
      </mt.div>
    </mt.div>
  )
}

export default Home