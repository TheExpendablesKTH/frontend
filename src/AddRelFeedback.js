import React from 'react';
import { Link } from 'react-router-dom';
import backarrow from './back-arrow.png';

function AddRelFeedback(props) {
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
          Du har skapat en ny anhörig:
          {props.location.relative_name}
        </p>
        <Link to={`/RelativeEdit?resident_id=${props.location.resident_id}&resident_name=${props.location.resident_name}`}><img src={backarrow} alt="backarrow" /></Link>
        <br />
        <br />
        <Link to={`/RelativeEdit?resident_id=${props.location.resident_id}&resident_name=${props.location.resident_name}`}><button className="button button1">OK</button></Link>
      </div>
    </div>
  );
}

export default AddRelFeedback;
