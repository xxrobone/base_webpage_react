import React from 'react'

//styles
import './ContactFormWrapper.scss'

const ContactFormWrapper = (props) => {
  return (
    <div className="wrapper">
        
        <div className="inner">
        </div>
      <div className='contact_form_wrapper'>
          {props.children}
    </div>
    </div>
  )
}

export default ContactFormWrapper