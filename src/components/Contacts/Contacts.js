import './Contacts.css';

export const Contacts = () => {
    return (
        <div className="contacts">
            <h2>Contact us</h2>
            <p className="contacts-message">for any questions please contact us!</p>

            <div className="contacts-details">
                <div className="contacts-form">
                    <form>
                        <label htmlFor="Name">Name</label>
                        <input type="text" placeholder="Type your full name" name="Name" />

                        <label htmlFor="Email">Email</label>
                        <input type="email" placeholder="Type your email address" name="Email" />

                        <label htmlFor="Subject">Subject</label>
                        <input type="text" placeholder="Type subject" name="Subject" />

                        <label htmlFor="Message">Message</label>
                        <textarea name="Message" id="Message" cols="20" rows="5" placeholder="Type your message" />
                        <input type="submit" value="Send" className="submit-btn" />
                    </form>
                </div>

                <div className="contacts-info">

                    <p><i class="fa-solid fa-phone"></i> Phone: </p>
                    <p><i class="fa-solid fa-at"></i> Email: </p>
                    <p><i class="fa-brands fa-facebook"></i> Facebook:</p>
                    <p><i class="fa-brands fa-linkedin"></i> LinkedIn: </p>
                    <address> <i class="fa-solid fa-location-dot"></i> Address:</address>

                </div>
            </div>
        </div>
    )
}