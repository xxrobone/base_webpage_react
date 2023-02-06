import React from 'react'

//styles
import './ContactFormWrapper.scss'

const ContactFormWrapper = (props) => {
  return (
    <div class="wrapper">
        
        <div class="inner">
        </div>
      <div className='contact_form_wrapper'>
          {props.children}
    </div>
    </div>
  )
}

export default ContactFormWrapper