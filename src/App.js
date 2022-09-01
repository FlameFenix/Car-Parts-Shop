import './App.css';

import { Routes, Route } from 'react-router-dom';
import { ListOfArticles } from './components/ListOfArticles/ListOfArticles';
import { CreateArticle } from './components/ListOfArticles/CreateArticle/CreateArticle';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { Contacts } from './components/Contacts/Contacts';


function App() {


  return (
    <div>

      <Navbar />

      <div className="container">
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Market" element={<ListOfArticles />} />
            <Route path="/Market/CreateArticle" element={<CreateArticle />} />
            <Route path="/Contacts" element={<Contacts />} />
          </Routes>
        </div>
      </div>

      <Footer />

    </div>
  );
}

export default App;
