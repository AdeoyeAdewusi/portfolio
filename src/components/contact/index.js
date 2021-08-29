import React, {useState} from 'react'
import './style.css'
import Particles from "./contpart";

const Contact = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const submitRequest = async (e) => {
        e.preventDefault();
 
        console.log('contact component', email, name, message)

        const response = await fetch("/access", { 
          method: 'POST', 
          headers: { 
              'Content-type': 'application/json'
          }, 
          body: JSON.stringify({email, message}) 
      }); 
        const resData = await response.json(); 
        if (resData.status === 'success'){
          alert("Message Sent."); 
          this.resetForm()
          
      }else if(resData.status === 'fail'){
          alert("Message failed to send.")
      }
      };

    return (
        <div className='contact' id='Contact' Submit={submitRequest}>
        <Particles/>
            <form className='contact_form'>
                <div  className='contact_email'>
                    <input type='text' placeholder='Email' />
                </div>
                <div className='contact_name'>
                    <input type='text' placeholder='Name' onChange  ={e => setName({message: e.target.value})}/>
                </div>
                <div className='contact_message'>
                    <textarea placeholder='Message' rows='20' cols='30' onChange  ={e => setMessage({message: e.target.value})}></textarea>
                </div>
                <div className='contact_Submit'>
                    <input type='submit' value='Submit'/> 
                </div>
            </form>
        </div>
    )
}

export default Contact
