import React from "react";
import {Link} from 'react-router-dom';
import backarrow from './back-arrow.png';

function LoginConfirm() {
    return (
    <div>
        <ul class="breadcrumb br2">
            <li> Loggar in som admin </li>
        </ul>
        <div className="upper-left">
          <Link to = {"/Start"}><img src={backarrow} alt="backarrow" /></Link>
        </div>
        <div class="center paddingheader">
            <p class='headerstyle'>Du har försökt komma åt en sida som kräver inloggning som admin.</p>
            <p class='headerstyle'>Vill du fortsätta till inloggningen?</p>
            <link rel="stylesheet" href="styleOne.css" />
        </div>


        <div className="center">
            <Link to={"/LoginForm"}><button class="button button1">Fortsätt till inloggning</button></Link>
            <br></br>
            <br></br>
            <Link to="/Start" ><button class="button button2">Gå tillbaka</button></Link>
        </div>
    </div>

    );
}

export default LoginConfirm;
