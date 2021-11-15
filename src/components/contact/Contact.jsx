import './contact.scss';
import { useContext, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../context';

export default function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [name, setName] = useState();
  const [subject, setSubject] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleNameInput = (e) => {
    setName(e.target.value);
  };
  const handleSubjectNameInput = (e) => {
    setSubject(e.target.value);
  };
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handleMessageInput = (e) => {
    setMessage(e.target.value);
  };

  const SendEmail = (e) => {
    e.preventDefault();
    setName('');
    setSubject('');
    setEmail('');
    setMessage('');

    emailjs
      .sendForm(
        'service_xfwb0uy',
        'template_ixg3gtx',
        formRef.current,
        'user_glGdgT6s7shQ7wxhPfyIw'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="wrapper">
        <div className="left">
          <h1 className="title">Let's discuss your project</h1>
          <div className="info">
            <div className="info-item">
              <img
                src="assets/blue-phone.png"
                alt="phone icon"
                className="phone-icon"
              />
              <b>+234 81 3185 2425</b>
            </div>
            <div className="info-item">
              <img
                src="assets/blue-mail.png"
                alt="email icon"
                className="email-icon"
              />
              <b>akindejifuddi@gmail.com</b>
            </div>
            <div className="info-item">
              <img
                src="assets/home-icon.png"
                alt="address icon"
                className="home-icon"
              />
              <b>Femi Okunnu Phase 4, Block 4, Jakande Lekki Lagos, Nigeria.</b>
            </div>
          </div>
        </div>
        <div className="right">
          <p>
            <b>What's your story?</b> Get in touch. Always available for
            freelancing if the right project comes along.
          </p>
          <form ref={formRef} onSubmit={SendEmail}>
            <input
              style={{ backgroundColor: darkMode && '#333' }}
              type="text"
              placeholder="Name"
              name="user_name"
              value={name}
              onChange={handleNameInput}
            />
            <input
              style={{ backgroundColor: darkMode && '#333' }}
              type="text"
              placeholder="Subject"
              name="user_subject"
              value={subject}
              onChange={handleSubjectNameInput}
            />
            <input
              style={{ backgroundColor: darkMode && '#333' }}
              type="text"
              placeholder="Email"
              name="user_email"
              value={email}
              onChange={handleEmailInput}
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
              style={{ backgroundColor: darkMode && '#333' }}
              value={message}
              onChange={handleMessageInput}
            ></textarea>
            <button type="submit">Submit</button>
            {done && <span>`Thanks, I'll reply ASAP :)`</span>}
          </form>
        </div>
      </div>
      <div className="signature">©2021 Fuadeen Akindeji Lasisi. akindejie®</div>
    </div>
  );
}
