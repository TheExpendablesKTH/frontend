import React from "react";
import {Link} from "react-router-dom";
import backarrow from './back-arrow.png';

function Relative(){
    let relatives = ["Syster Curie","Bror Curie","Husdjur Curie", "Mamma Curie"];
    return (
        <div>
            <div className="button"></div>
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
                            {relatives.map(relative => (
                                <p className="scroll-row"><button className="name-plate">{relative}</button><button className="alter-button add-button">+</button></p>))}							
                            </div>
                        </div><br/>
                        <div className="centerDiv">
        
                                <Link to = "/Call_confirm"><button className ="button button-next">Gå vidare till samtal</button></Link>
                            
                        </div>
                    </div>

                </div>
                <div className="flexbox"></div>


            </div>

        </div>
    );
}

export default Relative;