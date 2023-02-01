import UserInfo from './UserInfo';
import UserContext from '../context/UserContext';
import { useContext} from "react";
import { Link } from 'react-router-dom';
const Header = () => {

    const { loggedInUser } = useContext(UserContext);
  return (
    <>
    <header>
      <h1>Hello! Good Mood Off</h1>
    <div className='header'>
      <div className='logo'>
<img src="https://thumbs.dreamstime.com/b/daisy-flower-logo-shop-company-hand-drawn-style-173814420.jpg" alt="logo"style={{width:'120px'}}/>
      </div>
        <div className='home'>
          <Link to = "/">Home</Link>
        </div>
        <div className='info'>
         <Link to = "/info">Info</Link>
        </div>

        {loggedInUser ? 
        <UserInfo/>
        :
        <div className='logreg'>
          <div className='login'>
              <Link to = "/login">Login</Link>
          </div>
          <div className='register'>
              <Link to = "/register">Register</Link>
          </div>
       </div>
        }
       </div>

     </header>
     </>
    );

};

export default Header;