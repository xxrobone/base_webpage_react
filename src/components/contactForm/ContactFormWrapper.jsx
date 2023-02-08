import React from 'react'

//styles
import './ContactFormWrapper.scss'
import { motion as mt } from 'framer-motion'

const ContactFormWrapper = (props) => {
  return (
    <mt.div className="wrapper"
    initial={{ opacity: 0, translateY: 300 }}
      animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.75, ease: "easeIn", delay: 0.4 }}
    >
        
        <div className="inner">
        </div>
      <div className='contact_form_wrapper'>
          {props.children}
    </div>
    </mt.div>
  )
}

export default ContactFormWrapper