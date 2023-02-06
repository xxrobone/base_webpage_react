import React, {useState} from 'react'

// styles
import './Contact.scss'
import ContactSidebar from '../../components/contactSidebar/ContactSidebar'
import ContactFormWrapper from '../../components/contactForm/ContactFormWrapper'
import ContactInfo from '../../components/contactForm/ContactInfo'
import Form from '../../components/form/Form'
import InputField from '../../components/inputfield/InputField'
import TextAreaField from '../../components/textareafield/TextAreaField'


const Contact = () => {
    const [input, setInput] = useState({ username: "", email: "", message: ""});

    const users = [];
    
    
  const handleOnChange = (e) => {
    const {name, value} = e.target;
      setInput({ ...input, [name]: value });
      console.log({...input, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    users.push(input);
  }
  return (
      <div className='contact'>
          <ContactSidebar />
          <ContactFormWrapper>
              <ContactInfo />
              <Form onSubmit={handleSubmit}>
                  <InputField
                  id="username"
                  type="text"
                  name="username"
                  value={input.username}
                  label="Username"
                  onChange={handleOnChange}
                  />
                  <InputField
                  id="email"
                  type="email"
                  name="email"
                  value={input.email}
                  label="Email"
                  onChange={handleOnChange}
                  />
                  <TextAreaField
                  id="msg"
                  type="textarea"
                  name="message"
                  value={input.message}
                  label="Message"
                  onChange={handleOnChange}
                  />
              </Form>
          </ContactFormWrapper>
          
    </div>
  )
}

export default Contact