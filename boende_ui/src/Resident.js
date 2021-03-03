import React from "react";
import {Link} from "react-router-dom";
function Resident(){
    return (
        <div>
            <div className="button"></div>
            <div className="flexbox">
            <div className="flexbox topAligned">
                <Link to = "/"><img src="./back-arrow.png" /></Link>
            </div>
            <div className="flexbox topAligned">
                <h1 className="extra-large-text center">Boende</h1>
                <div className="scroll-container">
                    <div className="scroll-header">
                        <p className="center">Klicka på namnet på valda boende</p>
                    </div>
                    <div className="scroll-outer largeScroll">
                        <div className="scroll-inner">
                            <Link to ="/Relative"><p className="scroll-row" /><button class="name-button" ><span>Marie Curie</span></button></Link>
                            <Link to ="/Relative"><p className="scroll-row" /><button class="name-button" ><span>Pierre Curie</span></button></Link>
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