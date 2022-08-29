import './App.css';

import { Routes, Route, Link } from 'react-router-dom';
import { ListOfArticles } from './components/ListOfArticles/ListOfArticles';
import { CreateArticle } from './components/ListOfArticles/CreateArticle/CreateArticle';
import { Navbar } from './components/Navbar/Navbar';


function App() {


  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Hello</h1>
        <div className="main">
          <Routes>
            <Route path="Market" element={<ListOfArticles />} />
            <Route path="CreateArticle" element={<CreateArticle />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
