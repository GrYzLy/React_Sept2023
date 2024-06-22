function Greetings(props) {
  return (
  <div>
    {console.log(props)}
    <h1>Hello: {props.name} </h1>
  </div>  
  );
}


export default Greetings;
