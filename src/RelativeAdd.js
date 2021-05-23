import React, { useState, useRef } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import backarrow from './back-arrow.png';
import { findGetParameter } from './Relative';

function RelativeAdd() {
  const resident_name = findGetParameter('resident_name');
  const resident_id = findGetParameter('resident_id');
  const nameToSave = useRef(null);
  const phoneToSave = useRef(null);
  const phoneRegex = /^\+[0-9]{1,15}$/;
  const api_url = `https://master.api.dd1369-meetings.com/residents/${resident_id}/relatives`;
  const [added, setAdded] = useState(false);
  const saveRelative = async (e) => {
    e.preventDefault();
     if (phoneRegex.test(phoneToSave.current.value)) {
    await axios.post(api_url, { name: nameToSave.current.value, phone: phoneToSave.current.value }, { headers: { 'Content-Type': 'application/json', Authorization: localStorage.getItem('admin_token') } });
    setAdded(true);
    } else {
      window.alert('Nummret måste börja med landskod (t.ex. +46), utan mellanslag och får inte vara längre än 15 siffror. \n \nExempelvis: +46701234567');
    }
  };

  return (
    <div>
      {added && (
      <Redirect to={{
        pathname: '/AddRelFeedback', relative_name: nameToSave.current.value, resident_id, resident_name,
      }}
      />
      )}
      {!added && (
        <div>
          <ul className="breadcrumb br2">
            <li>
              Redigera: Lägger till anhörig till
              {resident_name}
            </li>
          </ul>
          <div className="upper-left">
            <Link to={`/RelativeEdit?resident_id=${resident_id}&resident_name=${resident_name}`}><img src={backarrow} alt="backarrow" /></Link>
          </div>
          <div className="center paddingheader">
            <h1 className="headerstyle">Lägg till anhörig</h1>
            <link rel="stylesheet" href="styleOne.css" />
          </div>

          <div className="center">
            <form onSubmit={saveRelative}>
              <label>
                <p className="form-headline">Namn:</p>
                <br />
                <input type="text" name="name" ref={nameToSave} />
                <br />
                <p className="form-headline">Telefonnummer:</p>
                <br />
                <input type="text" name="phone" ref={phoneToSave} />
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

export default RelativeAdd;
