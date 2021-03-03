import React from "react";
import {Link} from 'react-router-dom';

function Start() {
    return (
    <div>
        <div class="center paddingheader">
            <h1 class='headerstyle'>doGood</h1>
            <link rel="stylesheet" href="StyleOne.css" />
        </div>
    
    
        <div className="center">
            <Link to="/Resident" ><button class="button button1" id='startaSamtal' >Starta Samtal</button></Link>
            <button class="button button2" id='redigera'>Redigera</button>
        </div>
    </div>
    
    );
}

export default Start;