
import * as Yup from 'yup';
import { useFormik } from 'formik';

import UserContext from '../context/UserContext';
import { useContext, useState } from 'react';

import { useNavigate } from 'react-router-dom';


  const LoginForm = () => {
    const [failedLogIn, setFailedLogIn] = useState(false);
      const [userIsBanned, setUserIsBanned] = useState(false);
        const navigation = useNavigate();
    
    const { users, setLoggedInUser } = useContext(UserContext);
      
    const formik = useFormik({
        initialValues: {
            username:'',
            password:''
  },


    validationSchema: Yup.object().shape({
        username: Yup.string('Must be a string.')
                     .required('Cannot be empty'),
        password: Yup.string('Must be a string.')
                     .min(3,'Must be at least 3 symbol.')
                     .required('Cannot be empty')
       
    }),
    
        onSubmit:( values) => {
            // alert(JSON.stringify(values, null, 2));
            console.log(values);

            // if ( users.find(item => (item.username === values.username) && (item.password === values.password) ) === undefined) {
            //     alert("undefined");
            // } else {
            //     alert("available");
            // }



      const loggedInUser = users.find(item => (item.username === values.username) && (item.password === values.password));
            if (loggedInUser === undefined) {
                console.log ("undefined");
            } else
            if(!loggedInUser.isBanned){
              setLoggedInUser(users.find(item => item.username===values.username));
              navigation('/');
              console.log("available");

            } else if(loggedInUser.isBanned){
              setUserIsBanned(true);
            
            } else {
              setFailedLogIn(true);
              
            }
     
        },
    });

    return (
        <>
        <form className="forma" onSubmit={formik.handleSubmit}>
            {/* <h1>Form of Login</h1> */}
            
            <div>
            <label htmlFor="userName"> Username:
                <input 
                    type="text" 
                    name="username"
                    id='username'
                    value={formik.values.username}
                    onChange={formik.handleChange}/>
            </label>
            </div>

            {formik.touched.username && formik.errors.username ? (
                <span className='error'>{formik.errors.username}</span>)
            : null}

            <div>
            <label htmlFor="password">Password:
                <input 
                    type="password" 
                    name="password"
                    id="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}/>
            </label>
            </div>

            {formik.touched.password && formik.errors.password ? (
                <span className='error'>{formik.errors.password}</span>)
            : null}

                       
           <div>
        <button type='submit'>Submit</button>
       
        </div>
        </form>

        {failedLogIn && <span>Wrong log in info</span>}
          {userIsBanned && <span>Your user has been banned</span>}
        </>
  );  
};

export default LoginForm;
