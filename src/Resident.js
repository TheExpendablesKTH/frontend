
import React,{ useState, useEffect } from "react";
import {Link} from "react-router-dom";
import backarrow from './back-arrow.png';
import axios from 'axios';

function Resident(){
    //let residents = ["Marie Curie","Pierre Curie"];
    const [loading, setLoading] = useState(true);
    const [residents,setResidents] = useState(null);
    const admin_token ="eyJhbGciOiJIUzI1NiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAABXLMQ6AIAwAwK-Qzh3EGgN-xTiQ0JgOUENxMv5d3O8eEDPYIOupmgFBUofNrz5EmhYihNu41VR4oM7WUy5Sh7u4lVFF69_3GR2hi-jCAe8Hn9XQrFUAAAA.YfG4Z-45ykLbThHxkyJ4XojOB8dtmIq4907owb-7xyc"; 
    const api_url = "http://master.api.dd1369-meetings.com/residents";
    useEffect(() => {
        const fetchData = async () => {
                const result = await axios(api_url,{headers:{'Content-Type':'application/json','Authorization':admin_token}});
                setResidents(result.data);
                setLoading(false);
            };
            fetchData();
        },[]);
    
    return (
        <div><ul class="breadcrumb br1">
        <li>Starta samtal: Väljer boende som ska ringa</li>
        </ul>
            <div className="button"></div>
            <div className="flexbox">
            <div className="flexbox topAligned">
                <Link to = "/Start"><img src={backarrow} /></Link>
                
            </div>
            <div className="flexbox topAligned">
                <h1 className="extra-large-text center">Boende</h1>
                <div className="scroll-container">
                    <div className="scroll-header">
                        <p className="center">Klicka på namnet på valda boende</p>
                        
                    </div>
                    <div className="scroll-outer largeScroll">
                        <div className="scroll-inner">
                            {(loading || residents==null) ? (
                                <p>loading...</p>
                            ) : (
                                residents.sort((a, b) => (a.name > b.name) ? 1 : -1).map(resident => 
                                    (
                                        <Link to ={"/Relative?resident_id="+resident.id+"&resident_name="+resident.name}><p className="scroll-row"><span className="name-plate">{resident.name}</span></p></Link>
                                    ))
                            )
                            
                            }
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="flexbox"></div>
            </div>
        </div>
    );
}

export default Resident;
