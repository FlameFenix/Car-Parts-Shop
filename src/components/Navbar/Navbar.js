import './Navbar.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { BsCart2 } from 'react-icons/bs'
import { useCart } from 'react-use-cart';

export const Navbar = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();

    const { user, isAuthenticated } = useContext(AuthContext);

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
                <li>
                    <Link to="/Cart">
                        
                        <BsCart2>

                        </BsCart2>
                        <span class='badge badge-warning' id='lblCartCount'> {items.length} </span>
                    </Link>
                </li>
                {isAuthenticated == true &&
                    <div>
                        <li><Link to="/Logout">Logout</Link></li>
                        <li><Link to="/Market/CreateArticle">Create Article</Link></li>
                    </div>
                }

                {isAuthenticated == false &&
                    <div>
                        <li><Link to="/Register">Register</Link></li>
                        <li><Link to="/Login">Login</Link></li>
                    </div>
                }
            </ul>
        </nav >
    )
}