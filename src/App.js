import logo from './logo.svg';
import './App.css';
 import ToDo from './Components/ToDoComponent/ToDo';
import Greating from './Components/Greating';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './Pages/HomePages/HomePage'
import AboutPage from './Pages/AboutPage/AboutPages'
import ArticleListPage from './Pages/ArticlePage/ArticleListPage'
import ArticlePage from './Pages/ArticlePage/ArticlePage'
import NavBar from './NavBar/NavBar';
import NavbarTest from './NavBar/Navbartest'
function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <NavbarTest/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/articles" element={<ArticleListPage/>}/>
        <Route path="/article" element={<ArticlePage/>}/>
      </Routes>
      </BrowserRouter>
    <Greating/>
    <br/>
    <br/>
    <ToDo/>
    </>
    
  );
}

export default App;
