import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import backarrow from './back-arrow.png';

function Call_confirm(){
    let relatives = ["Syster Curie","Bror Curie","Husdjur Curie", "Mamma Curie"]; //replace with list from relative selection
    const [selected, setSelected] = useState(relatives);

    const removeRelative = (relative) => {
        setSelected((prev) => {
            if (prev.includes(relative)) {
                return prev.filter(r => r !== relative);
            } 
        });
    };

    return (
        <div>
            <div class="button"></div>
            <div class="flexbox">
                <div class="flexbox columnThin topAligned">
                    <Link to = "/Relative"><img src={backarrow} /></Link>
                </div>
                <div class="flexbox columnThick topAligned">
                    <h1 class="extra-large-text">Du har bjudit in:</h1>
                    <div class="scroll-container">
                        <div class="scroll-header">
                            <p class="center">Klicka på röda knappen för att ta bort kontakt från samtalet</p>
                        </div>
                        <div class="scroll-outer largeScroll">
                            <div class="scroll-inner">
                                {
                                (selected.length === 0) ? (
                                    <p>Du har inte valt några kontakter! Gå tillbaka och börja om</p>
                                ) : (
                                    selected.map(relative => (
                                    <p className="scroll-row"><span className="name-plate">{relative}</span>
                                        <span className="alter-button remove-button" onClick={() => removeRelative(relative)}>-</span></p>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flexbox columnMedium bottomAligned">
                    <h1 class="right-button call-button large-button white-text extra-large-text centerDivVertical">Påbörja samtal <br /> &#9742;</h1>
                </div>
            </div>
        </div>
    );
}

export default Call_confirm;
