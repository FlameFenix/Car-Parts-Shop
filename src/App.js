import './App.css';

import { Routes, Route } from 'react-router-dom';
import { ListOfArticles } from './components/ListOfArticles/ListOfArticles';
import { CreateArticle } from './components/ListOfArticles/CreateArticle/CreateArticle';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';


function App() {


  return (
    <div>
      
      <Navbar />

      <div className="container">
        <div className="main">
          <Routes>
            <Route path="Market" element={<ListOfArticles />} />
            <Route path="Market/CreateArticle" element={<CreateArticle />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
