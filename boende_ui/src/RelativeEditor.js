import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import backarrow from './back-arrow.png';
import axios from 'axios';
import { findGetParameter } from './Relative';

function RelativeEditor() {
    const [loading, setLoading] = useState(true);
    const [relatives, setRelatives] = useState(null);
    const [relative, setRelative] = useState(null);
    const resident_id = findGetParameter("resident_id");
    const relative_id = findGetParameter("relative_id");
    const api_url = "http://mock.api.dd1369-meetings.com/users/" + resident_id + "/relatives";



    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(api_url);
            setRelatives(result.data.relatives);
            setLoading(false);
            setRelative(result.data.relatives.find(r=> r.id.toString() === relative_id.toString()));
        };
        fetchData();
    }, []);

    return (
        <div>
            <div className="upper-left">
                <Link to="/RelativeEdit"><img src={backarrow} /></Link>
            </div>
            {
                (loading || relatives == null || relative == null) ? (
                    <div class="center paddingheader">
                        <h1 class='headerstyle'>Laddar...</h1>
                        <link rel="stylesheet" href="styleOne.css" />
                    </div>
                ) : (
                    <div>
                        <div class="center paddingheader">
                            <h1 class='headerstyle'>Redigera anhörig: {relative.name}</h1>
                            <link rel="stylesheet" href="styleOne.css" />
                        </div>
                        <div className="center">
                            <form>
                                <label>                                
                                    <p class="form-headline">Namn:</p>
                                    <br></br>
                                    <input type="text" name="name" value={relative.name} />
                                    <br></br>
                                    <p class="form-headline" >Telefonnummer:</p>
                                    <br></br>
                                    <input type="text" name="phone" value={relative.phone} />
                                </label>
                                <br></br>
                                <input type="submit" value="Spara" />
                            </form>
                        </div>
                    </div>

                )}
        </div>

    );
}

export default RelativeEditor;
