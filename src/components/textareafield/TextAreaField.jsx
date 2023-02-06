import React from 'react'

// styles
import './TextAreaField.scss'

const TextAreaField = ({id, name, value, type, label, onChange}) => {
  return (
      <>
        <label>{label}</label>
        <textarea 
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        required
        />
        <span className="highlight"></span>
    </>
  )
}

export default TextAreaField