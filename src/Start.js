import React from "react";
import {Link} from 'react-router-dom';

function Start() {
    return (
    <div>
        <div class="center paddingheader">
            <h1 class='headerstyle'>Dogood</h1>
            <link rel="stylesheet" href="styleOne.css" />
        </div>


        <div className="center">
            <Link to="/Resident" ><button class="button button1" id='startaSamtal' >Starta samtal</button></Link>
            <br></br>
            <br></br>
            <Link to="/LoginConfirm" ><button class="button button2" id='redigera'>Redigera</button></Link>
        </div>
    </div>

    );
}

export default Start;
