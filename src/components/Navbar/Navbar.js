import './Navbar.css'
import { Link } from 'react-router-dom';
export const Navbar = () => {

    return (
        < nav className="navigation" >
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
                    <Link to="/Contacts">Contacts</Link>
                </li>
            </ul>
        </nav >
    )
}