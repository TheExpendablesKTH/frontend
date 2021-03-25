import React from 'react';
import {Link} from 'react-router-dom';
import backarrow from './back-arrow.png';
function Call_confirm(props){
    return (
        <div>
            <div class="button"></div>
            <div class="flexbox">
                <div class="flexbox columnThin topAligned">
                    <Link to = "/Relative"><img src={backarrow} /></Link>
                    <p>{props.location.chosenRels[0]}</p>
                    <p>{props.location.chosenRels[1]}</p>
                </div>
                <div class="flexbox columnThick topAligned">
                    <h1 class="extra-large-text">Du har bjudit in:</h1>
                    <div class="scroll-container">
                        <div class="scroll-header">
                            <p class="center">Klicka på röda knappen för att ta bort kontakt från samtalet</p>
                        </div>
                        <div class="scroll-outer largeScroll">
                            <div class="scroll-inner">
                                <p class="scroll-row"><button class="name-plate">Syster Curie</button><button
                                        class="alter-button remove-button">-</button></p>
                                <p class="scroll-row"><button class="name-plate">Husdjur Curie</button><button
                                        class="alter-button remove-button">-</button></p>
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
