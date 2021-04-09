import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import backarrow from './back-arrow.png';
import axios from 'axios';
import { findGetParameter } from './Relative';

function ResidentEditor() {
    const [loading, setLoading] = useState(true);
    const [relatives, setRelatives] = useState(null);
    const [relative, setRelative] = useState(null);
    const resident_id = findGetParameter("resident_id");
    const relative_id = findGetParameter("relative_id");
    const resident_name = findGetParameter("resident_name");
    const api_url = "http://mock.api.dd1369-meetings.com/residents/" + resident_id + "/relatives";

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(api_url);
            //setRelatives(result.data.relatives);
            setLoading(false);
            //setRelative(result.data.relatives.find(r=> r.id.toString() === relative_id.toString()));
        };
        fetchData();
    }, []);

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
                            <h1 class='headerstyle'>Redigerar {resident_name}</h1>
                            <link rel="stylesheet" href="styleOne.css" />
                        </div>
                        <div className="center">
                            <form>
                                <label>                                
                                    <p class="form-headline">Namn:</p>
                                    <br></br>
                                    <input type="text" name="name" value={resident_name} />
                                </label>
                                <br></br>
                                <input type="submit" value="Spara" />
                            </form>
                        <br></br>
                        <br></br>
                        <button class="button button2" id='raderaAnhorig' >Radera {resident_name}</button>
                        </div>
                    </div>

                )}
        </div>

    );
}

export default ResidentEditor;
