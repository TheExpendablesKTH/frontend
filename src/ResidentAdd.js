import React from "react";
import {Link} from 'react-router-dom';
import backarrow from './back-arrow.png';

function ResidentAdd() {
    return (
    <div><ul class="breadcrumb br2">
    <li>Redigera: Lägger till boende</li>
    </ul>
        <div className="upper-left">
            <Link to = "/ResidentEdit"><img src={backarrow} /></Link>
        </div>
        <div class="center paddingheader">
            <h1 class='headerstyle'>Lägg till boende</h1>
            <link rel="stylesheet" href="styleOne.css" />
        </div>


        <div className="center">
        <form>
            <label>
                 <p class ="form-headline">Namn:</p>
                 <br></br>
                <input type="text" name="name" />
            </label>
            <br></br>
            <input type="submit" value="Spara" />
        </form>
        </div>
    </div>

    );
}

export default ResidentAdd;
