import React from 'react'

//styles
import './ContactFormWrapper.scss'

const ContactFormWrapper = (props) => {
  return (
      <div className='contact_form_wrapper'>
          {props.children}
    </div>
  )
}

export default ContactFormWrapper