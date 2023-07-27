import React, { useState } from "react";

function Condition() {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [userErr, setUserErr] = useState(true)

    return (
        <div style={{backgroundColor:"skyblue"}}>
            <form style={{alignSelf:"flex-start"}}>
                <input style={{borderWidth:2,borderColor:"black"}} type="text" placeholder="username"  ></input>
                <br/><br/>
                <input style={{borderWidth:1,borderColor:"black"}} type="text" placeholder="password"  ></input>
                <br/><br/>
                <button type="submit">Submit</button>
            </form>

        </div>
    )


}

export default Condition;
