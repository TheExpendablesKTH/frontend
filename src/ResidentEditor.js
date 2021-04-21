import React, { useState, useEffect, useRef} from "react";
import { Link } from 'react-router-dom';
import backarrow from './back-arrow.png';
import axios from 'axios';
import { findGetParameter } from './Relative';

function ResidentEditor() {
    const nameToSave = useRef(null);
    const [loading, setLoading] = useState(false);
    const resident_id = findGetParameter("resident_id");
    const resident_name = findGetParameter("resident_name");
    const api_url = "http://master.api.dd1369-meetings.com/residents";
    const admin_token ="eyJhbGciOiJIUzI1NiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAABXLMQ6AIAwAwK-Qzh3EGgN-xTiQ0JgOUENxMv5d3O8eEDPYIOupmgFBUofNrz5EmhYihNu41VR4oM7WUy5Sh7u4lVFF69_3GR2hi-jCAe8Hn9XQrFUAAAA.YfG4Z-45ykLbThHxkyJ4XojOB8dtmIq4907owb-7xyc";
    
    const updateResident = async (e) => {
        e.preventDefault();
        setLoading(true);        
        // const deleteRequest = axios.delete(api_url+"/"+resident_id,{headers: {'Content-Type':'application/json', 'Authorization':admin_token}});                      
        // const saveRequest = axios.post(api_url,{'name':nameToSave.current.value},{headers: {'Content-Type':'application/json', 'Authorization':admin_token}});      
        // await axios.all([deleteRequest,saveRequest]);
        setLoading(false);
    };
    const deleteResident = async (e) => {
        setLoading(true);        
        e.preventDefault();    
        await axios.delete(api_url+"/"+resident_id,{headers: {'Content-Type':'application/json', 'Authorization':admin_token}});                      
        setLoading(false);       
    };

    return (
        <div><ul class="breadcrumb br2">
        <li>Redigera: Redigerar boende {resident_name}</li>
        </ul>
            <div className="upper-left">
                <Link to={"/RelativeEdit?resident_id="+resident_id+"&resident_name="+resident_name}><img src={backarrow} /></Link>
            </div>
            {
                (loading) ? (
                    <div class="center paddingheader">
                        <h1 class='headerstyle'>Laddar...</h1>
                        <link rel="stylesheet" href="styleOne.css" />
                    </div>
                ) : (
                    <div>
                        <div class="center paddingheader">
                            <h1 class='headerstyle'>Redigera {resident_name}</h1>
                            <link rel="stylesheet" href="styleOne.css" />
                        </div>
                        <div className="center">
                            <form onSubmit={updateResident}>
                                <label>                                
                                    <p class="form-headline">Namn:</p>
                                    <br></br>
                                    <input type="text" name="name" /* value={resident_name} */ ref={nameToSave}/>
                                </label>
                                <br></br>
                                <input type="submit" value="Spara" />
                            </form>
                        <br></br>
                        <br></br>
                        <button onClick={deleteResident} class="button button2" id='raderaAnhorig' >Radera {resident_name}</button>
                        </div>
                    </div>

                )}
        </div>

    );
}

export default ResidentEditor;
