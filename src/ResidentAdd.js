import axios from "axios";
import React, { useRef} from "react";
import {Link} from 'react-router-dom';
import backarrow from './back-arrow.png';


function ResidentAdd() {
    const nameToSave = useRef(null);
    const api_url = "http://master.api.dd1369-meetings.com/residents";
    const admin_token = localStorage.getItem("admin_token");
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
            <Link to = "/ResidentEdit"><img src={backarrow} alt="backarrow"/></Link>
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

