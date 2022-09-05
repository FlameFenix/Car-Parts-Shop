import { Link } from 'react-router-dom';
import './SideNav.css';

export const SideNav = () => {
    return (
        <div className="sidenav">
            <ul>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/Register">Register</Link></li>
                <li><Link to="/Logout">Logout</Link></li>
                <li><Link to="/Market/CreateArticle">Create Article</Link></li>
            </ul>
        </div>
    );
}