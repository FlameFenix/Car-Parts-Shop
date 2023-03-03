import './App.css';

import { AuthContext } from './contexts/authContext';

import { Routes, Route } from 'react-router-dom';
import { ListOfArticles } from './components/ListOfArticles/ListOfArticles';
import { CreateArticle } from './components/ListOfArticles/CreateArticle/CreateArticle';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { Contacts } from './components/Contacts/Contacts';
import { Register } from './components/Register/Register';
import { SideNav } from './components/SideNav/SideNav';
import { Logout } from './components/Logout/Logout';
import { Login } from './components/Login/Login';

import { useState } from 'react';
import { Cart } from './components/Cart/Cart';
import { CartProvider, useCart } from 'react-use-cart';
import { CartContext } from './contexts/cartContext';


function App() {

  const [cartItems, setCartItems] = useState([]);

  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { addItem } = useCart();

  const onLoginHandler = (email) => {
    localStorage.setItem('user', JSON.stringify(email));
    setIsAuthenticated(true);
  }

  const onLogoutHandler = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
  }

  const onAddHandler = (item) => {

    console.log(item);
    setCartItems(state => [
      ...state,
      item
    ])

    addItem(item)
  }

  return (
    <div>
      <CartContext.Provider value={{ cartItems, onAddHandler }}>
        <CartProvider>

          <AuthContext.Provider value={{ user, onLoginHandler, onLogoutHandler, isAuthenticated }}>

            <Navbar />
{/* 
            <SideNav /> */}

            <div className="container">

              <div className="main">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Market" element={<ListOfArticles />} />
                  <Route path="/Market/CreateArticle" element={<CreateArticle />} />
                  <Route path="/Contacts" element={<Contacts />} />
                  <Route path="/Register" element={<Register />} />
                  <Route path="/Login" element={<Login />} />
                  <Route path="/Logout" element={<Logout />} />
                  <Route path="/Cart" element={<Cart />} />
                </Routes>
              </div>
            </div>

            <Footer />

          </AuthContext.Provider>

        </CartProvider>
      </CartContext.Provider>
    </div>
  );
}

export default App;
