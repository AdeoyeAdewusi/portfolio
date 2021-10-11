import React,{useState} from 'react'
import './style.css'
import Particles from "./contpart";
// 
import axios from 'axios';

const Contact = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [mailSent, setMailSent] = useState()


  const API_PATH = 'http://localhost/api/contact/index.php';

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: 'get',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: message, email, name,
    })
    setMailSent(true);
}



    return (
        <div className='contact' id='Contact'>
        <Particles/>
            <form action='#' className='contact_form'>
                <div  className='contact_email'>
                    <input 
                    name='email' 
                    type='text' 
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email' />
                </div>
                <div className='contact_name'>
                    <input 
                    name='name' 
                    type='text' 
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Name' />
                </div>
                <div className='contact_message'>
                    <textarea 
                    name='message' 
                    placeholder='Message' 
                    rows='20' 
                    cols='30'
                    onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
                <div className='contact_Submit'>
                    <input onClick={handleSubmit} type='submit' value='Submit'/> 
                </div>
                {mailSent  &&
                    <div>Thank you for contcting us.</div>
                }
            </form>
        </div>
    )
}

export default Contact
