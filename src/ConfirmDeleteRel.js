import React, {useState} from "react";
import {Link, Redirect} from 'react-router-dom';
import backarrow from './back-arrow.png';
import axios from 'axios';
import { findGetParameter } from './Relative';
function ConfirmDeleteRel(){
    const resident_id = findGetParameter("resident_id");
    const resident_name = findGetParameter("resident_name");
    const api_url = "http://master.api.dd1369-meetings.com";
    const admin_token = localStorage.getItem("admin_token");
    const relative_id = findGetParameter("relative_id");
    const relative_name = findGetParameter("relative_name");
    const [deleted, setDeleted] = useState(false);
    const deleteRelative = async(e) => {
        e.preventDefault();
        await axios.delete(api_url + "/residents/" + resident_id + "/relatives/"+ relative_id,{headers:{'Content-Type':'application/json', 'Authorization':admin_token}});
        setDeleted(true);
    }
    return(
        <div>
            {deleted && <Redirect to={{pathname:"/DeleteRelFeedback", relative_name:relative_name, resident_id:resident_id, resident_name:resident_name}}/>}        
            {!deleted && <div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>            
            
            <div className="center">
            <p className="headerstyle">Bekräfta borttagning av anhörig</p>
                <Link to={"/RelativeEditor?resident_id="+resident_id+"&resident_name="+resident_name+"&relative_id="+relative_id}><img src={backarrow} alt="backarrow" /></Link>
                        <br></br><br></br>
                        <button onClick={deleteRelative} class="button button2" id='raderaAnhorig' >Jag vill radera anhörig: {relative_name} till boenden: {resident_name} </button>
            </div></div>}
        </div>
    )
}

export default ConfirmDeleteRel;
