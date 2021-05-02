import React from 'react';
import { Link } from 'react-router-dom';
import backarrow from './back-arrow.png';

function AddResFeedback(props) {
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
        <p className="headerstyle">
          Du har skapat en ny boende:
          {props.location.resident_name}
        </p>
        <Link to="/ResidentEdit"><img src={backarrow} alt="backarrow" /></Link>
        <br />
        <br />
        <Link to="/ResidentEdit"><button className="button button1">OK</button></Link>
      </div>
    </div>
  );
}

export default AddResFeedback;
