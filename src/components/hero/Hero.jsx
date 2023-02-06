import React from 'react'
import office from '../../videos/office.webm'

import './Hero.scss'

export default function Hero() {
  return (
    <div className='hero'>
      <h1>Page title</h1>
      <video autoPlay loop muted
                    style={{
                       position: "absolute",
                       top: '0',
                       left: '0',
                        width: "100%",
                        height: "80%",
                        zIndex: "-1",
                        objectFit: "cover",

                    }}
                >
                    <source src={office} type="video/webm" />
             </video>
    </div>
  )
}
