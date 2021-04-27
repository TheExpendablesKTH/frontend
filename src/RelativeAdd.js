import React, { useState, useEffect, useRef} from "react";
import {Link} from 'react-router-dom';
import backarrow from './back-arrow.png';
import { findGetParameter } from "./Relative";
import Resident from "./Resident";
import axios from 'axios';
function RelativeAdd() {
    const resident_name = findGetParameter("resident_name");
    const resident_id = findGetParameter("resident_id");
    const nameToSave = useRef(null);
    const phoneToSave = useRef(null);
    const api_url = "http://master.api.dd1369-meetings.com/residents/"+resident_id+"/relatives";
    const saveRelative = async (e) => {
        e.preventDefault();            
        await axios.post(api_url,{'name':nameToSave.current.value,'phone':phoneToSave.current.value},{headers: {'Content-Type':'application/json', 'Authorization':localStorage.getItem("admin_token")}});            
    };

    return (
    <div><ul class="breadcrumb br2">
    <li>Redigera: Lägger till anhörig till {resident_name}</li>
    </ul>
        <div className="upper-left">
          <Link to = {"/RelativeEdit?resident_id="+resident_id+"&resident_name="+resident_name}><img src={backarrow} /></Link>
        </div>
        <div class="center paddingheader">
            <h1 class='headerstyle'>Lägg till anhörig</h1>
            <link rel="stylesheet" href="styleOne.css" />
        </div>


        <div className="center">
        <form onSubmit={saveRelative}>
            <label>
                 <p class ="form-headline">Namn:</p>
                 <br></br>
                <input type="text" name="name" ref={nameToSave}/>
                <br></br>
                <p class ="form-headline">Telefonnummer:</p>
                 <br></br>
                <input type="text" name="phone" ref={phoneToSave}/>
            </label>
            <br></br>
            <input type="submit" value="Spara" />
        </form>
        </div>
    </div>

    );
}

export default RelativeAdd;
