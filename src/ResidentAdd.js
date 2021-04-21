import axios from "axios";
import React, { useState, useEffect, useRef} from "react";
import {Link} from 'react-router-dom';
import backarrow from './back-arrow.png';


function ResidentAdd() {
    const nameToSave = useRef(null);
    const api_url = "http://master.api.dd1369-meetings.com/residents";
    const admin_token ="eyJhbGciOiJIUzI1NiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAABXLMQ6AIAwAwK-Qzh3EGgN-xTiQ0JgOUENxMv5d3O8eEDPYIOupmgFBUofNrz5EmhYihNu41VR4oM7WUy5Sh7u4lVFF69_3GR2hi-jCAe8Hn9XQrFUAAAA.YfG4Z-45ykLbThHxkyJ4XojOB8dtmIq4907owb-7xyc"; 
    const saveResident = async (e) => {
        e.preventDefault();            
        await axios.post(api_url,{'name':nameToSave.current.value},{headers: {'Content-Type':'application/json', 'Authorization':admin_token}});            
    };        
        
    

    return (
    <div>
    <ul class="breadcrumb br2">
    <li>Redigera: Lägger till boende</li>
    </ul>
        <div className="upper-left">
            <Link to = "/ResidentEdit"><img src={backarrow} /></Link>
        </div>
        <div class="center paddingheader">
            <h1 class='headerstyle'>Lägg till boende</h1>
            <link rel="stylesheet" href="styleOne.css" />
        </div>


        <div className="center">
        <form onSubmit={saveResident}>
            <label>
                 <p class ="form-headline">Namn:</p>
                 <br></br>
                <input type="text" name="name" ref={nameToSave}/>
            </label>
            <br></br>
            <input type="submit" value="Spara"/>
        </form>
        </div>
    </div>

    );
}




export default ResidentAdd;

