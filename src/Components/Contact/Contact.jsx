import styles from './Contact.module.css'; 
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cfv1ici', 'template_3qrhc2i', form.current, {
        publicKey: 's11BSk0BkqGs29Ow2',
      })
      .then(
        () => setSuccess(true),
        () => setError(true)
      );
  };

  return (
      <div className={styles.formContainer}>
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Your message" name="message" />
          <button className={styles.fancy_button} type="submit">
            Submit
          </button>
          {error && <p style={{ color: 'red' }}>Error sending message.</p>}
          {success && <p style={{ color: 'green' }}>Message sent!</p>}
        </motion.form>
      </div>
  )
};