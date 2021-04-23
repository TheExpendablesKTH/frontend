import React, {useState, useEffect} from "react";
import {Link, Redirect} from 'react-router-dom';
import backarrow from './back-arrow.png';

function LoginForm() {
    const [loggedIn, setLoggedIn] = useState();
    const [failed, setFailed] = useState();
    const [adminToken, setAdminToken] = useState();
    useEffect(() => {
        setLoggedIn(false);
        setFailed(false);
        },[]);
    const handleSubmit = (event) => {
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;
        //change the condition in the if statement
        if ((username === "hehe") && (password === "yikes")) {
          setFailed(false);
          setAdminToken("some_token"); //get from request
          setLoggedIn(true);
        } else {
          setFailed(true);
        }
        event.preventDefault();
    };
    return (
    <div>
    {loggedIn && <Redirect to={{pathname:"/ResidentEdit", adminToken:adminToken}}/>}
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
