import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import backarrow from './back-arrow.png';
import { findGetParameter } from './Relative';

function ConfirmDeleteRel() {
  const resident_id = findGetParameter('resident_id');
  const resident_name = findGetParameter('resident_name');
  const apiUrl = 'https://master.api.dd1369-meetings.com';
  const admin_token = localStorage.getItem('admin_token');
  const relative_id = findGetParameter('relative_id');
  const relative_name = findGetParameter('relative_name');

  const deleteRelative = async (e) => {
    e.preventDefault();
    await axios.delete(`${apiUrl}/residents/${resident_id}/relatives/${relative_id}`, { headers: { 'Content-Type': 'application/json', Authorization: admin_token } });
  };
  return (
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
        <Link to={`/RelativeEditor?resident_id=${resident_id}&resident_name=${resident_name}&relative_id=${relative_id}`}><img src={backarrow} alt="backarrow" /></Link>
        <br />
        <br />
        <button onClick={deleteRelative} className="button button2" id="raderaAnhorig">
          Jag vill radera anhörig:
          {relative_name}
          {' '}
          till boenden:
          {resident_name}
        </button>
      </div>
    </div>
  );
}

export default ConfirmDeleteRel;
