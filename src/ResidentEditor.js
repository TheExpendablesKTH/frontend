import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import backarrow from './back-arrow.png';
import { findGetParameter } from './Relative';

function ResidentEditor() {
  const [loading, setLoading] = useState(false);
  const resident_id = findGetParameter('resident_id');
  const resident_name = findGetParameter('resident_name');

  return (
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

  );
}

export default ResidentEditor;
