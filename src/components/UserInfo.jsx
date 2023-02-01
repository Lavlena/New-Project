import UserContext from "../context/UserContext";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';


    const UserInfo = () => {

  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const navigation = useNavigate();

  const logOutUser = () => {
    setLoggedInUser(null);
    navigation('/');
  }

  return (
    <div>
            <div >
                    <img
                            src={loggedInUser.avatar}
                            alt="user avatar"
                            style={{width:'40px'}}
                     />
            
                        <span>{loggedInUser.username}</span>
                </div>
                <div>
                
                    <button onClick={() => logOutUser()}>LogOut</button>
            </div>
    </div>
  );
}
 
export default UserInfo;