import LoginForm from "./LoginForm";
const Login = () =>{
    const niceTextStyle = {
        color: "blue",
        fontSize: 56
      }
      return (
        <>
          <h1 style={niceTextStyle}>Login</h1>  
          <p style={{textTransform:'uppercase', color:"#0B6600"}}>Welcome to Login!</p>
        <LoginForm />
        </>

      );
};
export default Login;