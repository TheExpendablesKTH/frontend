import React, { useState, useRef } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import backarrow from './back-arrow.png';
import { findGetParameter } from './Relative';

function ResidentEditor() {
  const nameToSave = useRef(null);
  const [loading, setLoading] = useState(false);
  const [updated, setUpdated] = useState(false);
  const resident_id = findGetParameter('resident_id');
  const resident_name = findGetParameter('resident_name');
  const relative_id = findGetParameter('relative_id');
  const relative_name = findGetParameter('relative_name');
  const api_url = 'http://master.api.dd1369-meetings.com/';

  // Update to be async, see RelativeEditor.js
  const updateResident = (e) => {
    e.preventDefault();
    setLoading(true);
    // Add relevant requests, see RelativeEditor.js
    setLoading(false);
    setUpdated(true);
  };

  return (
    <div>
      {updated && <Redirect to={{ pathname: '/UpdateResFeedback', resident_id, resident_name }} />}
      {!updated && (
      <div>
        <ul className="breadcrumb br2">
          <li>
            Redigera: Redigerar boende
            {resident_name}
          </li>
        </ul>
        <div className="upper-left">
          <Link to={`/RelativeEdit?resident_id=${resident_id}&resident_name=${resident_name}`}><img src={backarrow} /></Link>
        </div>
        {
          (loading) ? (
            <div className="center paddingheader">
              <h1 className="headerstyle">Laddar...</h1>
              <link rel="stylesheet" href="styleOne.css" />
            </div>
          ) : (
            <div>
              <div className="center paddingheader">
                <h1 className="headerstyle">
                  Redigera
                  {resident_name}
                </h1>
                <link rel="stylesheet" href="styleOne.css" />
              </div>
              <div className="center">
                {/* The below commented out section is supposed to be used for updating a resident's name but at the moment of writing the API does not support updating without deleting the resident and all it's relatives */}
                {/*<form onSubmit={updateResident}>
                  <label>                                
                    <p class="form-headline">Namn:</p>
                    <br></br>
                    <input type="text" name="name" ref={nameToSave} required/>
                  </label>
                <br></br>
                <input type="submit" value="Spara"/>
                </form>*/}
                <br />
                <br />
                <Link to={`/ConfirmDeleteRes?resident_id=${resident_id}&resident_name=${resident_name}`}>
                  <button className="button button2" id="raderaAnhorig">
                    Radera
                    {resident_name}
                  </button>
                </Link>
              </div>
            </div>

          )
        }
      </div>
      )}
    </div>
  );
}

export default ResidentEditor;
