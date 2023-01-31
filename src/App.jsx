import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Info from './components/Info';

function App() {
  return (
    <>
    <header>
      <h1>Hello! Good Mood Off</h1>
      <nav>
      <ul>
        <li>
          <Link to = "/">Home</Link>
        </li>
        <li>
          <Link to = "/login">Login</Link>
        </li>
        <li>
          <Link to = "/register">Register</Link>
        </li>
        <li>
          <Link to = "/info">Info</Link>
        </li>
      </ul>
      </nav>
    </header>
    <hr/>
      
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/login' element = {<Login />}/>
        <Route path='/register' element = {<Register />}/>
        <Route path='/info' element = {<Info />}/>
      </Routes>
      <hr/>
      <footer>
        <h1><p>© 2023 All rights reserved</p></h1>
      </footer>
    </>
  );
}

export default App;
