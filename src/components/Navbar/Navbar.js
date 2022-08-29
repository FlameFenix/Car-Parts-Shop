import './Navbar.css'
import { Link } from 'react-router-dom';
export const Navbar = () => {

    return (
        < nav >
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/Market">Market</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav >
    )
}