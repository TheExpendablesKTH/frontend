import React from 'react';
import { Link } from 'react-router-dom';
import backarrow from './back-arrow.png';

function UpdateResFeedback(props) {
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
          Du har sparat ändringar för boende
          {props.location.resident_name}
        </p>
        <Link to={`/RelativeEdit?resident_id=${props.location.resident_id}&resident_name=${props.location.resident_name}`}><img src={backarrow} alt="backarrow" /></Link>
        <br />
        <br />
        <Link to={`/RelativeEdit?resident_id=${props.location.resident_id}&resident_name=${props.location.resident_name}`}><button className="button button1">OK</button></Link>
      </div>
    </div>
  );
}

export default UpdateResFeedback;
