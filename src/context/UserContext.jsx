import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [loggedInUser, setLoggedInUser] = useState();

  const [users, setUsers] = useState([
   {
      id: 0,
      level: 'admin',
      isBanned: false,
      username: 'Elena',
      password: '123',
      avatar: 'https://png.pngitem.com/pimgs/s/22-223925_female-avatar-female-avatar-no-face-hd-png.png'
    }, {
      id: 1,
      level: 'user',
      isBanned: false,
      username: 'Viktor',
      password: '456',
      avatar: 'https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg'
    }, {
      id: 2,
      level: 'user',
      isBanned: false,
      username: 'Edvard',
      password: '789',
      avatar: 'https://e7.pngegg.com/pngimages/146/939/png-clipart-avatar-boy-male-avatar-child-face-thumbnail.png'
    }
  ]);
  const addNewUser = (newUser) => {
    setUsers([...users, newUser]);
  }

  const banOrUnbanUser = (id) => {
    setUsers(users.map(user => user.id.toString() === id.toString() ? {...user, isBanned:!user.isBanned} : user)); 
  }

  return (
    <UserContext.Provider
      value={{
        users,
        addNewUser,
        banOrUnbanUser,
        loggedInUser,
        setLoggedInUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider };
export default UserContext;