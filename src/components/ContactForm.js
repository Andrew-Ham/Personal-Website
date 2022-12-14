import "./ContactFormStyles.css"
import {FaLinkedin} from "react-icons/fa";

import React, {useState, useRef} from 'react'
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser'



const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const form = useRef();
  const service = process.env.REACT_APP_SERVICE_ID;
  const template = process.env.REACT_APP_TEMPLATE_ID;
  const user = process.env.REACT_APP_USER_ID;

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
      emailjs.sendForm(service, template, form.current, user)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setLoading(false);
      toast.success("Message sent successfully! I'll be in touch soon! Thank you!");

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
        {/* <form ref={form} onSubmit={sendEmail}>
          <label>Your name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Subject</label>
          <input type="text" name="user_subject" />
          <label>Message</label>
          <textarea name="message" row="7" placeholder="Please enter your message here"/>
          <input type="submit" value="Send" />
        </form> */}
        <form ref={form} onSubmit={submitHandler}>
            <label>Your name</label>  
            <input onChange = {(e) => setName(e.target.value)} type = "text" name="user_name"></input>
            <label>Email</label>
            <input onChange = {(e) => setEmail(e.target.value)} type = "email" name="user_email"></input>
            <label>Subject</label>
            <input onChange = {(e) => setSubject(e.target.value)} type = "text" name = "user_subject"></input>
            <label>Message</label>
            <textarea row="7" placeholder="Please enter your message here" onChange = {(e) => setMessage(e.target.value)} name = "user_message"/>
            <button disabled = {loading} type = "submit" className = "btn">{loading ? 'Sending information...' : 'Submit'}</button>

            
        </form>
    </div>
  )
}

export default ContactForm