import './Login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/dbInit';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const { onLoginHandler } = useContext(AuthContext);

    const navigate = useNavigate();

    const LoginHandler = (e) => {
        e.preventDefault();

        const { email, password } = Object.fromEntries(new FormData(e.target));

        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log(res);
                onLoginHandler(email);
                navigate('/');
            })
            .catch(error => console.log(error.message));
    }

    return (
        <div className="login">
            <h2>Login</h2>
            <form className="login-form" onSubmit={LoginHandler}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" />

                <input type="submit" className="submit-btn" value="Login" />
            </form>
        </div>
    );
}