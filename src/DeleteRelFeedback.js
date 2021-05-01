import React from "react";
import {Link} from 'react-router-dom';
import backarrow from './back-arrow.png';
function DeleteRelFeedback(props){
    return(
        <div>    
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>            
            
            <div className="center">
            <p className="headerstyle">Du har tagit bort anhörig {props.location.relative_name}</p>
                <Link to ={"/RelativeEdit?resident_id="+props.location.resident_id+"&resident_name="+props.location.resident_name}><img src={backarrow} alt="backarrow" /></Link>
                        <br></br><br></br>
                        <Link to ={"/RelativeEdit?resident_id="+props.location.resident_id+"&resident_name="+props.location.resident_name}><button class="button button1">OK</button></Link>
            </div>
        </div>
    )
}

export default DeleteRelFeedback;