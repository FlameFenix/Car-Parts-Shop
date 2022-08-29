import './App.css';

import { Routes, Route, Link } from 'react-router-dom';
import { ListOfArticles } from './components/ListOfArticles/ListOfArticles';
import { CreateArticle } from './components/ListOfArticles/CreateArticle/CreateArticle';


function App() {


  return (
    <div className="container">
      <h1>Hello</h1>
      <nav>
        <ul>
          <li>
            <Link to="/Market">Market</Link>
        </li>
        </ul>
      </nav>
      <div className="main">
        <Routes>
          <Route path="Market" element={<ListOfArticles />} />
          <Route path="CreateArticle" element={<CreateArticle />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
