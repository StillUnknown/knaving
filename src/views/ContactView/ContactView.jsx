import React, {useRef, useState} from "react";
import emailjs from '@emailjs/browser'
import Popup from '../../components/Popup'
import Footer from '../../components/Footer'
import Info from '../../components/Info'
import './Contactview.css'

const ContactView = () => {
    const [popup, setPopup] = useState(false)
    const form = useRef()


    const sendMail = (event) => {
        event.preventDefault();
        setPopup(true)

        emailjs.sendForm('service_08ctk5', 'templates_bnwfvh', form.current, '17cXuSlvrGbzTCUK_')
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })
    }


    return (
        <>
            <div className='contact-container' id="contact">
                <Footer popup={popup}/>
                <Info popup={popup}/>
                <p id="form" className='quick-message'>Contact me</p>
                <form className={popup ? "form dark": "form"} ref={form} onSubmit={sendMail}>
                    <label className='label'>Name</label>
                    <input required type="text" name="user_name" placeholder='Your name' className='name-input' />
                    <label className='label'>Email</label>
                    <input required type="email" name="user_email" placeholder='Your email'  className='email-input'/>
                    <input required type="text" name="subject" placeholder="Subject" className='subject-input' />
                    <label className='label'>Message</label>
                    <textarea name="message" placeholder='Your message' className='message-input'/>
                    <input type="submit" value="Send" className='send-btn' />
                </form>
                {popup && <Popup popup={popup} setPopup={setPopup}/>}
                <section className={popup ? 'social-media dark': "social-media"}>
                </section>
            </div>
        </>
    )
}

export default ContactView