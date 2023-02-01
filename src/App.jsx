import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Info from './components/Info';
import Header from './components/Header';

function App() {
 
  return (
    <>
    <Header />
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