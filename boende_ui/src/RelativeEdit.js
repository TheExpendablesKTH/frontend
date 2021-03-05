import React from "react";
import {Link} from "react-router-dom";
import backarrow from './back-arrow.png';

function RelativeEdit(){
    let residents = ["Marie Curie","Pierre Curie"];
    return (
        <div>
            <div className="button"></div>
            <div className="flexbox">
            <div className="flexbox columnThin topAligned">
                <Link to = "/ResidentEdit"><img src={backarrow} /></Link>
            </div>
            <div className="flexbox columnThick topAligned">
                <h1 className="extra-large-text center">Boende</h1>
                <div className="scroll-container">
                    <div className="scroll-header">
                        <p className="center">Klicka på den boende ni vill redigera</p>
                    </div>
                    <div className="scroll-outer largeScroll">
                        <div className="scroll-inner">
                            {
                                residents.map(resident =>
                                    (
                                        <Link to ="/Relative"><p className="scroll-row"><span className="name-plate">{resident}</span></p></Link>
                                    ))
                            }
                        </div>
                    </div>
                </div>

            </div>
            <div class="flexbox columnMedium bottomAligned">
                <h1 class="right-button large-button right-add-button white-text extra-large-text centerDivVertical">Påbörja samtal <br /> &#9742;</h1>
                <h1 class="right-button medium-button right-remove-button white-text extra-large-text centerDivVertical flexcenter">Ta bort boende <br /> &#9742;</h1>
            </div>
            </div>
        </div>
    );
}

export default RelativeEdit;
