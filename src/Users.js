import { useState } from 'react';
import logo from './logo.svg';


function Users() {
  const[value1,setVal1]=useState("This is my code")
  // let value="This is my code";
  function apple()
  {
    alert('function call')
  }
  return (
    <div className="App">
    <h1 style={{color:'blue',fontFamily:"initial",backgroundColor:"yellow",width:300}}>
      {value1} <button style={{color:"red",backgroundColor:"green"}} onClick={()=>setVal1('updateCode is')}>Click me</button></h1>
    
    </div>
  );
}

export default Users;
