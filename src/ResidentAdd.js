import axios from 'axios';
import React, { useState, useRef } from 'react';
import { Link, Redirect } from 'react-router-dom';
import backarrow from './back-arrow.png';

function ResidentAdd() {
  const nameToSave = useRef(null);
  const api_url = 'https://master.api.dd1369-meetings.com/residents';
  const admin_token = localStorage.getItem('admin_token');
  const [added, setAdded] = useState(false);
  const saveResident = async (e) => {
    e.preventDefault();
    await axios.post(api_url, { name: nameToSave.current.value }, { headers: { 'Content-Type': 'application/json', Authorization: admin_token } });
    setAdded(true);
  };

  return (
    <div>
      {added && <Redirect to={{ pathname: '/AddResFeedback', resident_name: nameToSave.current.value }} />}
      {!added && (
        <div>
          <ul className="breadcrumb br2">
            <li>Redigera: Lägger till boende</li>
          </ul>
          <div className="upper-left">
            <Link to="/ResidentEdit"><img src={backarrow} alt="backarrow" /></Link>
          </div>
          <div className="center paddingheader">
            <h1 className="headerstyle">Lägg till boende</h1>
            <link rel="stylesheet" href="styleOne.css" />
          </div>

          <div className="center">
            <form onSubmit={saveResident}>
              <label>
                <p className="form-headline">Namn:</p>
                <br />
                <input type="text" name="name" ref={nameToSave} />
              </label>
              <br />
              <input type="submit" value="Spara" />
            </form>
          </div>
        </div>
      )}
    </div>

  );
}

export default ResidentAdd;
