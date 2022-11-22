import "./ContactFormStyles.css"
import {FaLinkedin} from "react-icons/fa";

import React, {useState} from 'react'
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  /*
    toast is from React toastify which allows you to add notifications to app!
  */
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      return toast.error("Please fill out all fields!");
    }
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/email`, {
        name, email, subject, message
      });
      setLoading(false);
      toast.success(data.message);

    } catch (err) {
      setLoading(false);
      toast.error(
        err.response && err.response.data.message ? err.response.data.message: err.message
      )
    }
  }
  return (
    <div className = "form">
      <ToastContainer position = "bottom-center" limit={1} />
      <div className = "contactintro">
        <p>Please connect with me on Linkdein (link to my personal page below)!</p>
        <div className = "linkdein">
          <a href = "https://www.linkedin.com/in/andrew-ham00/" target="_blank" rel="noopener noreferrer"><FaLinkedin size = {35} style={{color: "white", marginRight: "32px"}}/></a>
        </div>
        <p> Or fill out the form below and I will do my best to respond via email!</p>
        </div>
        <form onSubmit={submitHandler}>
            <label>Your name</label>  
            <input onChange = {(e) => setName(e.target.value)} type = "text" ></input>
            <label>Email</label>
            <input onChange = {(e) => setEmail(e.target.value)} type = "email"></input>
            <label>Subject</label>
            <input onChange = {(e) => setSubject(e.target.value)} type = "text"></input>
            <label>Message</label>
            <textarea row="7" placeholder="Please enter your message here" onChange = {(e) => setMessage(e.target.value)}/>
            <button disabled = {loading} type = "submit" className = "btn">{loading ? 'Sending information...' : 'Submit'}</button>

            
        </form>
    </div>
  )
}

export default ContactForm