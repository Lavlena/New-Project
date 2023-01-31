import RegisterForm from "./RegisterForm";
const Register = () =>{
    const niceTextStyle = {
        color: "green",
        fontSize: 56
      }
      return (
        <>
          <h1 style={niceTextStyle}>Register</h1>  
          <p style={{textTransform:'uppercase', color:"#0B6600"}}>Welcome to Register!</p>
       <RegisterForm />
        </>
      );
};
export default Register;