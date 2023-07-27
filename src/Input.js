import { useState } from "react"

function Input(){
  const [changeText,setChangeText]=useState(null)
    function getData(value){
        setChangeText(value.target.value)
    }

    return(
        <div>
            <h1>Input Example</h1>
            <h2>Value:----{changeText}</h2>
            <input type="text"  onChange={getData}></input>
        </div>
    )
}
export default Input;