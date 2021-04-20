import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom";

import backarrow from './back-arrow.png';
import axios from 'axios';

function Relative(){
    
    const [loading, setLoading] = useState(true);
    const [relatives,setRelatives] = useState(null);
    const resident_id = findGetParameter("resident_id");
    const resident_name = findGetParameter("resident_name");
    const api_url = "http://mock.api.dd1369-meetings.com/residents/"+resident_id+"/relatives";

    const [selected, setSelected] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
                const result = await axios(api_url);
                setRelatives(result.data.relatives);
                setLoading(false);
            };
            fetchData();
        },[]);

    const toggleRelative = (relative) => {
        setSelected((prev) => {
            if (prev.includes(relative)) {
                return prev.filter(r => r !== relative);
            } else {
                return [relative, ...prev]
            }
        });
    };

    return (
        <div><ul class="breadcrumb br1">
        <li>Starta samtal: Väljer vem {resident_name} ska ringa till</li>
        </ul>
            <div className="flexbox">
                <div className="flexbox topAligned">
                    <Link to =  "/Resident"><img src={backarrow} /></Link>
                </div>
                <div className="flexbox topAligned">
                    <h1 className="extra-large-text center">Anhöriga</h1>
                    <div className="scroll-container">
                        <div className="scroll-header">
                            <p className="center">Välj vilka anhöriga som ska delta i samtalet</p>
                        </div>
                        <div className="scroll-outer mediumScroll">
                            <div className="scroll-inner">
                            {
                                (loading || relatives==null) ? (
                                    <p>loading...</p>
                                ) : (
                                    relatives.sort((a, b) => (a.name > b.name) ? 1 : -1).map(relative => 
                                        (   
                                            <p className="scroll-row"><span className="name-plate">{relative.name}</span>
                                            <span className={
                                            selected.includes(relative) ? "alter-button remove-button" : "alter-button add-button"} 
                                            onClick={() => toggleRelative(relative)}>
                                            {selected.includes(relative) ? "-" : "+"}
                                            </span></p>
                                        ))
                                )}							
                            </div>
                        </div><br/>
                        <div className="centerDiv">
                                
                                <Link to = {{pathname:"/Call_confirm", selected:selected, residentId:resident_id, residentName:resident_name}}><button className ="button button-next">Gå vidare till samtal</button></Link>
                            
                        </div>
                    </div>

                </div>
                <div className="flexbox"></div>


            </div>

        </div>
    );
}

export function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
        window.location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

export default Relative;