import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactUs() {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ly16m0j",
        "template_bd0dipy",
        form.current,
        "S9S1-jCvslI-VqOAE"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact-us">
      <div className="contact-container">
        <div className="form-container">
          <h2>Contact Us</h2>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="from_name"
              placeholder="Your name"
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email_id"
              placeholder="Enter Your Email"
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write Message"
              required
            ></textarea>
            <button type="submit" >
              <div>
                subbmit
              </div>
            </button>
          </form>
        </div>
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.799661189412!2d114.16017177652984!3d22.323415242054757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404015ff4c407b5%3A0xa35a6bc4a605e040!2sSecretbase%20Party%20Room!5e0!3m2!1szh-TW!2shk!4v1681369320620!5m2!1szh-TW!2shk"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
export default ContactUs;
