import React from 'react'

// styles
import './Form.scss'

const Form = (props) => {
    return (
      <div className='form_container'>
        <form className='form'>
            {props.children}
        </form>            
      </div>
  )
}

export default Form