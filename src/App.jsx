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
      <div>
        <div>
        <Link to = "/">Home</Link>
        </div>
        <div>
        <Link to = "/login">Login</Link>
        </div>
        <div>
        <Link to = "/register">Register</Link>
        </div>
        <div>
        <Link to = "/info">Info</Link>
        </div>
        {/* <div>
          <span>{item.username}</span>
          <img src={item.avatar} alt="user avatar" style={{width:'30px', height:'auto'}}/>
          
          <button onClick={() => banOrUnbanUser(data.id)}>
          {data.isBanned ? 'UnBan' : 'Ban'}
        </button>
        </div> */}
      </div>


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