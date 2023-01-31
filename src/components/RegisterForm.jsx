import * as Yup from 'yup';
import { useFormik } from 'formik';
import UserContext from '../context/UserContext';
import { useContext, useState } from 'react';

import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const [invalidUsername, setInvalidUsername] = useState(false);
    const { users, addNewUser, setLoggedInUser } = useContext(UserContext);
    const navigation = useNavigate();


    const formik = useFormik({
        initialValues: {
            username:'',
            password:'',
            passwordRepeat:'',
            avatar:''
        
        },

    validationSchema: Yup.object().shape({
        username: Yup.string('Must be a string.')
                     .required('Cannot be empty'),
        password: Yup.string('Must be a string.')
                     .min(3,'Must be at least 3 symbol.')
                     .required('Cannot be empty'),
        passwordRepeat: Yup.string('Must be a string.')
                           .oneOf([Yup.ref('password'),null],'Password and repeat password must be the same')
                           .required('Cannot be empty'),
        // avatar: Yup.required('Cannot be empty')
                           
    }),
    
        onSubmit:( values) => {
            // alert(JSON.stringify(values, null, 2));
            console.log(values);
            if ( users.find(item => item.username === values.username)){
                setInvalidUsername(true);
            } else {
                let newUser = {
                    ...values,
                    id: Date.now(),
                    level: "user",
                    isBanned: false
                };
                addNewUser(newUser);
                setLoggedInUser(newUser);
                navigation('/');
            } 
         }

        })
     
    return (
        <>
        <form className="forma" onSubmit={formik.handleSubmit}>
            {/* <h1>Form of Registration</h1> */}
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
            <label htmlFor="passwordRepeat"> Password Repeat:
                <input 
                    type="password" 
                    name="passwordRepeat"
                    id="passwordRepeat"
                    value={formik.values.passwordRepeat}
                    onChange={formik.handleChange}/>
            </label>
            </div>

            {formik.touched.passwordRepeat && formik.errors.passwordRepeat ? (
                <span className='error'>{formik.errors.passwordRepeat}</span>)
            : null}

            <div>
            <label htmlFor="avatar"> User Picture:
                <input 
                    type="url" 
                    name="avatar"
                    id='uemail'
                    value={formik.values.avatar}
                    onChange={formik.handleChange}/>
            </label>
            </div>

            {formik.touched.avatar && formik.errors.avatar ? (
                <span className='error'>{formik.errors.avatar}</span>)
            : null}
        <div>
        <button type='submit'>Submit</button>

        </div>
        </form>
        {
        invalidUsername && <span>User with such name already exists.</span>
      }
        </>
  );  
};

export default RegisterForm;
