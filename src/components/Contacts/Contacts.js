import { Link } from 'react-router-dom';
import { db } from '../../services/dbInit';
import { collection, addDoc } from 'firebase/firestore';

import './Contacts.css';
import { useState } from 'react';

export const Contacts = () => {

    const [message, setMessage] = useState({});

    const [errors, setErrors] = useState({});

    const [isMessageSent, setMessageSent] = useState(false);

    const setValues = (e) => {
        setMessage(state => ({
            ...state,
            [e.target.name]: e.target.value

        }))
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if (errors.Name ||
            errors.Email ||
            errors.Subject ||
            errors.Message ||
            message.Name === undefined ||
            message.Name === '' ||
            message.Subject === undefined ||
            message.Subject === '' ||
            message.Email === undefined ||
            message.Email === '' ||
            message.Message === undefined ||
            message.Message === '') {
            return alert('You should fill all fields');
        }

        const contacts = collection(db, 'Contacts')

        addDoc(contacts, message)
            .then(res => {
                console.log(res)
                setMessageSent(true);
            })
            .catch(error => alert(error));
        setMessage({ Name: '', Subject: '', Email: '', Message: '' });
    }

    const validationHandler = (e, minLength, maxLength) => {
        const valueLength = e.target.value.length;

        if (valueLength < minLength || valueLength > maxLength) {
            setErrors(state => ({
                ...state,
                [e.target.name]: true
            }))
        } else {
            setErrors(state => ({
                ...state,
                [e.target.name]: false
            }))
        }

    }

    return (
        <div className="contacts">
            <h2>Contact us</h2>
            <p className="contacts-message">for any questions please contact us!</p>

            {isMessageSent &&
                <div className="alert alert-success" role="alert">
                    Your message was sent successfully! <Link to="/" className="alert-link">Back to Home page</Link>
                </div>
            }

            <div className="contacts-details">
                <div className="contacts-form">
                    <form onSubmit={submitHandler}>
                        <label htmlFor="Name">Name</label>
                        <input
                            type="text"
                            placeholder="Type your full name"
                            name="Name"
                            value={message.Name}
                            onChange={setValues}
                            onBlur={(e) => validationHandler(e, 3, 20)}
                        />

                        {errors.Name &&
                            <div class="alert alert-danger" role="alert">
                                Name must be between 3 and 20 symbols!
                            </div>
                        }

                        <label htmlFor="Email">Email</label>
                        <input type="email"
                            placeholder="Type your email address"
                            name="Email"
                            value={message.Email}
                            onChange={setValues} />

                        <label htmlFor="Subject">Subject</label>
                        <input type="text"
                            placeholder="Type subject"
                            name="Subject"
                            value={message.Subject}
                            onChange={setValues}
                            onBlur={(e) => validationHandler(e, 3, 20)}
                        />

                        {errors.Subject &&
                            <div class="alert alert-danger" role="alert">
                                Subject must be between 3 and 20 symbols!
                            </div>
                        }

                        <label htmlFor="Message">Message</label>
                        <textarea name="Message"
                            id="Message"
                            cols="20"
                            rows="5"
                            placeholder="Type your message"
                            value={message.Message}
                            onChange={setValues}
                            onBlur={(e) => validationHandler(e, 10, 255)}
                        />

                        {errors.Message &&
                            <div class="alert alert-danger" role="alert">
                                Message must be between 10 and 255 symbols!
                            </div>
                        }
                        <input type="submit" value="Send" className="submit-btn" />
                    </form>
                </div>

                <div className="contacts-info">

                    <p><i className="fa-solid fa-phone"></i> Phone: </p>
                    <p><i className="fa-solid fa-at"></i> Email: </p>
                    <p><i className="fa-brands fa-facebook"></i> Facebook:</p>
                    <p><i className="fa-brands fa-linkedin"></i> LinkedIn: </p>
                    <address> <i className="fa-solid fa-location-dot"></i> Address:</address>

                </div>
            </div>
        </div>
    )
}