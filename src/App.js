import './App.css';

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


function App() {


  return (
    <div>

      <Navbar />

      <SideNav />

      <div className="container">

        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Market" element={<ListOfArticles />} />
            <Route path="/Market/CreateArticle" element={<CreateArticle />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Logout" element={<Logout />} />
          </Routes>
        </div>
      </div>

      <Footer />

    </div>
  );
}

export default App;
