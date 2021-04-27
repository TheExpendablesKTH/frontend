import React, { useState, useEffect, useRef} from "react";
import { Link } from 'react-router-dom';
import backarrow from './back-arrow.png';
import axios from 'axios';
import { findGetParameter } from './Relative';
function ConfirmDeleteRes(){
    const nameToSave = useRef(null);
    const [loading, setLoading] = useState(false);
    const resident_id = findGetParameter("resident_id");
    const resident_name = findGetParameter("resident_name");
    const api_url = "http://master.api.dd1369-meetings.com";
    const deleteResident = async (e) => {
        setLoading(true);        
        e.preventDefault();    
        await axios.delete(api_url+"/residents/"+resident_id,{headers: {'Content-Type':'application/json', 'Authorization':localStorage.getItem("admin_token")}});                      
        setLoading(false);       
    };
    return(
        <div>        
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>            
            
            <div className="center">
            <p className="headerstyle">Bekräfta borttagning av boende</p>
                <Link to={"/ResidentEditor?resident_id="+resident_id+"&resident_name="+resident_name}><img src={backarrow} /></Link>
                        <br></br><br></br>
                        <button onClick={deleteResident} class="button button2" id='raderaAnhorig' >Jag vill radera boende: {resident_name}</button>
            </div>
        </div>
    )
}

export default ConfirmDeleteRes;