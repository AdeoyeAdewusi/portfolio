import React from 'react'
import './style.css'
import Particles from "./contpart";

const Contact = () => {
  
    return (
        <div className='contact' id='Contact'>
        <Particles/>
            <form className='contact_form'>
                <div  className='contact_email'>
                    <input type='text' placeholder='Email' />
                </div>
                <div className='contact_name'>
                    <input type='text' placeholder='Name' />
                </div>
                <div className='contact_message'>
                    <textarea placeholder='Message' rows='20' cols='30'></textarea>
                </div>
                <div className='contact_Submit'>
                    <input type='submit' value='Submit'/> 
                </div>
            </form>
        </div>
    )
}

export default Contact
