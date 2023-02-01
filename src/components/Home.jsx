const Home = () =>{
    const niceTextStyle = {
        color: "white",
        fontSize: 56
      }
   
      return (
        <div className="homehome">
          <h1 style={niceTextStyle}>Home</h1>  
          <p style={{textTransform:'uppercase', color:"#fff", fontSize:'2em'}}>Welcome to my page!</p>
        </div>
      );
};
export default Home;