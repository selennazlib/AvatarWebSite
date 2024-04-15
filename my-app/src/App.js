import './App.css';
import Main from './components/Main';
import Homepage from './pages/Homepage';
import AboutMe from './pages/AboutMe';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';







function App() {
  return (
    <div className='App'>
       <nav className='nav'>
        <Link to="/" className='nav-item'>Homepage </Link>
        <Link to="/about-me" className='nav-item'>About Me</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about-me" element={<AboutMe/>}/>
      </Routes>
      
       
      <div>
        <Main/>
      </div>

    </div>
  )
}

export default App;
