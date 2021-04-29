import React from "react";
import {Link} from 'react-router-dom';

function Start() {
    return (
    <div>
        <div className="center paddingheader">
            <h1 className='headerstyle'>Dogood</h1>
            <link rel="stylesheet" href="styleOne.css" />
        </div>


        <div className="center">
            <Link to="/Resident" ><button className="button button1" id='startaSamtal' >Starta samtal</button></Link>
            <br></br>
            <br></br>
            <Link to="/LoginConfirm" ><button className="button button2" id='redigera'>Redigera</button></Link>
        </div>
    </div>

    );
}

export default Start;
