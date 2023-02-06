import React from 'react'

// styles
import './ContactSidebar.scss'
const ContactSidebar = () => {
  return (
    <div className="container">
        <div className="contact_sidebar">
            <div className="mail_btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                        d="M22 7L13.03 12.7C12.7213 12.8934 12.3643 12.996 12 12.996C11.6357 12.996 11.2787 12.8934 10.97 12.7L2 7"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
        <div className="icons">
            <span className="icon first"></span>
        </div>
    </div>
  )
}

export default ContactSidebar