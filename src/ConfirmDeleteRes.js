import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import backarrow from './back-arrow.png';
import { findGetParameter } from './Relative';

function ConfirmDeleteRes() {
  const resident_id = findGetParameter('resident_id');
  const resident_name = findGetParameter('resident_name');
  const api_url = 'https://master.api.dd1369-meetings.com';
  const admin_token = localStorage.getItem('admin_token');
  const [deleted, setDeleted] = useState(false);
  const deleteResident = async (e) => {
    e.preventDefault();
    await axios.delete(`${api_url}/residents/${resident_id}`, { headers: { 'Content-Type': 'application/json', Authorization: admin_token } });
    setDeleted(true);
  };
  return (
    <div>
      {deleted && <Redirect to={{ pathname: '/DeleteResFeedback', resident_name }} />}
      {!deleted && (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="center">
          <p className="headerstyle">Bekräfta borttagning av boende</p>
          <Link to={`/ResidentEditor?resident_id=${resident_id}&resident_name=${resident_name}`}><img src={backarrow} alt="backarrow" /></Link>
          <br />
          <br />
          <button onClick={deleteResident} className="button button2" id="raderaAnhorig">
            Jag vill radera boende:
            {resident_name}
          </button>
        </div>
      </div>
      )}
    </div>
  );
}

export default ConfirmDeleteRes;
