import React, {useState, useRef } from "react";
import {Link, Redirect} from 'react-router-dom';
import backarrow from './back-arrow.png';
import { findGetParameter } from "./Relative";
import axios from 'axios';

function RelativeAdd() {
    const resident_name = findGetParameter("resident_name");
    const resident_id = findGetParameter("resident_id");
    const nameToSave = useRef(null);
    const phoneToSave = useRef(null);
    const api_url = "http://master.api.dd1369-meetings.com/residents/"+resident_id+"/relatives";
    const [added, setAdded] = useState(false);
    const saveRelative = async (e) => {
        e.preventDefault();            
        await axios.post(api_url,{'name':nameToSave.current.value,'phone':phoneToSave.current.value},{headers: {'Content-Type':'application/json', 'Authorization':localStorage.getItem("admin_token")}});            
        setAdded(true);
    };

    return (
    <div>{added && <Redirect to={{pathname:"/AddRelFeedback", relative_name:nameToSave.current.value, resident_id:resident_id, resident_name:resident_name}}/>}  
    {!added && <div><ul class="breadcrumb br2">
    <li>Redigera: Lägger till anhörig till {resident_name}</li>
    </ul>
        <div className="upper-left">
          <Link to = {"/RelativeEdit?resident_id="+resident_id+"&resident_name="+resident_name}><img src={backarrow} alt="backarrow" /></Link>
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
        </div></div>}
    </div>

    );
}

export default RelativeAdd;
