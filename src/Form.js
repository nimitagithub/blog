
import React,{useState} from "react";
//import Button from 'react-bootstrap/Button';
function Form() {
const [interest,setaInterest]=useState('')
const [name,setName]=useState('')
const [check,setCheck]=useState('')
    function getForm(e) {
        console.log("interest",interest,"name",name,"check",check)
        e.preventDefault()
    }


    return (
        <div className="App">
            <h1>Handle Form in React</h1>
            <form onSubmit={getForm}>
                <input type="text" placeholder="Please enter Your Name" value={name} onChange={(e)=>setName(e.target.value)}></input>
                <br /><br />
                <select onChange={(e)=>setaInterest(e.target.value)}>
                    <option>tab1</option>
                    <option>tab2</option>
                    <option>tab3</option>
                    <option>tab4</option>
                </select>
                <br /><br />
                <input type="checkbox" onChange={(e)=>setCheck(e.target.value)} ></input><span style={{ color: 'green' }}>Accept Term & Conditions</span>
                <br /><br />
                <button type="submit">Submit</button>
                <button type="reset">clear</button>

                {/* <Button variant="primary" onClick={()=>alert("gunjan........thanks")}>Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button> */}
            </form>
        </div>
    );
}

export default Form;
