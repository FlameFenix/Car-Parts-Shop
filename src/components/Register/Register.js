import { auth } from '../../services/dbInit';
import { createUserWithEmailAndPassword } from "firebase/auth";

import './Register.css';
export const Register = () => {

    const registerHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const { email, password, repeatPassword } = Object.fromEntries(formData);
        
        if (password !== repeatPassword) {
            return alert('Password and Repeat Password not match!');
        }

        try {
            const user = createUserWithEmailAndPassword(
                auth,
                email,
                password
            )
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }

        e.target.reset();
    }

    return (
        <div className="register">
            <h2>Register</h2>
            <form onSubmit={registerHandler} className="register-form">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" />

                <label htmlFor="repeatPassword">Repeat Password</label>
                <input type="password" name="repeatPassword" />

                <input type="submit" className="submit-btn" value="Register" />
            </form>
        </div>
    );
}