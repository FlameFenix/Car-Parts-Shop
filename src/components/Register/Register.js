import { auth } from '../../services/dbInit';
import { createUserWithEmailAndPassword } from "firebase/auth";

import './Register.css';
export const Register = () => {

    const registerHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const { email, password } = Object.fromEntries(formData);

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
            <form onSubmit={registerHandler} className="register-form">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" />

                <input type="submit" className="submit-btn" value="Register" />
            </form>
        </div>
    );
}