import React, {useState, useEffect} from "react";
import {Link, Redirect} from 'react-router-dom';
import backarrow from './back-arrow.png';
import axios from 'axios';
function LoginForm() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [failed, setFailed] = useState(false);
    const api_url = "http://master.api.dd1369-meetings.com/";
    const device_token = localStorage.getItem("DeviceToken");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const result = await axios.post(api_url + "/authenticate/admin",{'username':username,'password':password},{headers:{'Content-Type':'application/json','Authorization':device_token}}).catch(err =>{
            setFailed(true);
        });
        if (!failed){
            localStorage.setItem("admin_token",result.data.token);            
            setLoggedIn(true);            
        }
    };
    return (
    <div>
    {loggedIn && <Redirect to={{pathname:"/ResidentEdit"}}/>}
    {!loggedIn && <div><ul class="breadcrumb br2">
    <li> Loggar in som admin </li>
    </ul>
        <div className="upper-left">
          <Link to = {"/LoginConfirm"}><img src={backarrow} /></Link>
        </div>
        <div class="center paddingheader">
            <h1 class="headerstyle">Logga in som admin</h1>
            <link rel="stylesheet" href="styleOne.css" />
        </div>


        <div className="center">
        <form onSubmit={handleSubmit}>
            <label>
                 <p class ="form-headline">Användarnamn:</p>
                 <br></br>
                <input type="text" id="username" name="username" required/>
                <br></br>
                <p class ="form-headline">Lösenord:</p>
                 <br></br>
                <input type="password" id="password" name="password" required/>
            </label>
            <br></br>
            {failed && <p>Inloggningen misslyckades. Försök igen.</p>}
            <br></br>
            <input type="submit" value="Logga in" />
        </form>
        </div>
    </div>
    }
    </div>

    );
}

export default LoginForm;

