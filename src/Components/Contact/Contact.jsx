import { useRef, useState } from 'react';
import './Contact.module.css';
import styles from './Contact.module.css';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

export const Contact = () => {
    const form = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_cfv1ici', 'template_3qrhc2i', form.current, {
                publicKey: 's11BSk0BkqGs29Ow2'
            })
            .then(
                (result) => {
                    setSuccess(true);
                },
                (error) => {
                    setError(true);
                }
            );
    };

    return (
        <div className={styles.formContainer}>
            <motion.form ref={form} onSubmit={sendEmail}>
                <input type='text' required placeholder='Name' name='name' />
                <input type='email' required placeholder='Email' name='email' />
                <textarea rows={8} placeholder='Your message' name='message' />
                <button className={styles.fancy_button} type='submit' value='send'>
                    Submit
                </button>
                {error && 'Error'}
                {success && 'Success'}
            </motion.form>
        </div>
    );
};
