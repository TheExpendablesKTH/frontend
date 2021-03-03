import React from "react";
import {Link} from "react-router-dom";

function Relative(){
    return (
        <body>
            <div className="button"></div>
            <div className="flexbox">
                <div className="flexbox topAligned">
                    <Link to =  "/Resident"><img src="./back-arrow.png" /></Link>
                </div>
                <div className="flexbox topAligned">
                    <h1 className="extra-large-text center">Anhöriga</h1>
                    <div className="scroll-container">
                        <div className="scroll-header">
                            <p className="center">Välj vilka anhöriga som ska delta i samtalet</p>
                        </div>
                        <div className="scroll-outer mediumScroll">
                            <div className="scroll-inner">
                                <p className="scroll-row"><button className="name-plate">Syster Curie</button><button className="alter-button add-button">+</button></p>
                                <p className="scroll-row"><button className="name-plate">Bror Curie</button><button className="alter-button add-button">+</button></p>
                                <p className="scroll-row"><button className="name-plate">Husdjur Curie</button><button className="alter-button add-button">+</button></p>								
                            </div>
                        </div><br/>
                        <div className="centerDiv">
        
                                <Link to = "/Call_confirm"><button className ="button button-next">Gå vidare till samtal</button></Link>
                            
                        </div>
                    </div>

                </div>
                <div className="flexbox"></div>


            </div>

        </body>
    );
}

export default Relative;