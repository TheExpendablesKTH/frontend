import React from "react";
import {Link} from 'react-router-dom';
import backarrow from './back-arrow.png';
import { findGetParameter } from "./Relative";
import Resident from "./Resident";

function RelativeAdd() {
    const resident_name = findGetParameter("resident_name");
    return (
    <div>
        <div className="upper-left">
          <Link to = "/RelativeEdit"><img src={backarrow} /></Link>
        </div>
        <div class="center paddingheader">
            <h1 class='headerstyle'>Lägg till anhörig till: {resident_name}</h1>
            <link rel="stylesheet" href="styleOne.css" />
        </div>


        <div className="center">
        <form>
            <label>
                 <p class ="form-headline">Namn:</p>
                 <br></br>
                <input type="text" name="name" />
                <br></br>
                <p class ="form-headline">Telefonnummer:</p>
                 <br></br>
                <input type="text" name="phone" />
            </label>
            <br></br>
            <input type="submit" value="Spara" />
        </form>
        </div>
    </div>

    );
}

export default RelativeAdd;
