import React from "react";
import {Link} from 'react-router-dom';
import backarrow from './back-arrow.png';
function DeleteResFeedback(props){
    return(
        <div>    
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>            
            
            <div className="center">
            <p className="headerstyle">Du har tagit bort boende {props.location.resident_name}</p>
                <Link to={"/ResidentEdit"}><img src={backarrow} alt="backarrow" /></Link>
                        <br></br><br></br>
                        <Link to={"/ResidentEdit"}><button class="button button1">OK</button></Link>
            </div>
        </div>
    )
}

export default DeleteResFeedback;