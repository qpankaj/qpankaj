import React, { useState } from "react";




function Register() {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    async function signup(){

        let item = {name , password , email}
        
        let result = await fetch("http://localhost:8000/api/register",{
            method:'Post',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        });

        result=await result.json();
        console.warn("result",result)

             
        }
    





    return (
        
        <div className="col-sm-6 offset-sm-3">
            <h1>User name</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
            <br />
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
            <br />
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
            <br />
            <button onClick={signup} className="btn btn-primary">Sign up</button>




        </div>
    )

    }

export default Register