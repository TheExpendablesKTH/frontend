import React, { useState, useRef} from "react";
import { Link } from 'react-router-dom';
import backarrow from './back-arrow.png';
import axios from 'axios';
import { findGetParameter } from './Relative';

function ResidentEditor() {
    const nameToSave = useRef(null);
    const [loading, setLoading] = useState(false);
    const resident_id = findGetParameter("resident_id");
    const resident_name = findGetParameter("resident_name");
    const relative_id = findGetParameter("relative_id");
    const relative_name = findGetParameter("relative_name");
    const api_url = "http://master.api.dd1369-meetings.com/";
    
    


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
                            {/* The below commented out section is supposed to be used for updating a resident's name but at the moment of writing the API does not support updating without deleting the resident and all it's relatives */}
                             {/* <form onSubmit={updateResident}>
                                <label>                                
                                    <p class="form-headline">Namn:</p>
                                    <br></br>
                                    <input type="text" name="name"  ref={nameToSave}/>
                                </label>
                            <br></br>
                            <input type="submit" value="Spara"/>
                            </form> */}
                            <br></br>
                            <br></br>
                            <Link to={"/ConfirmDeleteRes?resident_id="+resident_id+"&resident_name="+resident_name}><button class="button button2" id='raderaAnhorig' >Radera {resident_name}</button></Link>
                        </div>
                    </div>

                )}
        </div>

    );
}

export default ResidentEditor;
