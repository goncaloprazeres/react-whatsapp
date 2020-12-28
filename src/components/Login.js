import React from 'react'
import Api from '../Api'
import './Login.css'

function Login({onReceive}) {

    const handleFacebookLogin = async ()=>{
        let result = await Api.fbPopup();
        if(result){
            onReceive(result.user);
        }else{
            alert("For some reason went wrong");
        }
    }
    return (
        <div className="login">
            <button onClick={handleFacebookLogin}>Login With Facebook</button>
        </div>
    )
}

export default Login
