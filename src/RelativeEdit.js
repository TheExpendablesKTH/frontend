import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import backarrow from './back-arrow.png';
import { findGetParameter } from './Relative';

function RelativeEdit() {
  const [loading, setLoading] = useState(true);
  const [relatives, setRelatives] = useState(null);
  const resident_id = findGetParameter('resident_id');
  const apiUrl = `https://master.api.dd1369-meetings.com/residents/${resident_id}/relatives`;
  const resident_name = findGetParameter('resident_name');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(apiUrl, { headers: { 'Content-Type': 'application/json', Authorization: localStorage.getItem('admin_token') } });
      setRelatives(result.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul className="breadcrumb br2">
        <li>
          Redigera: Visar
          {resident_name}
        </li>
      </ul>
      <div className="button" />
      <div className="flexbox">
        <div className="flexbox columnThin topAligned">
          <Link to="/ResidentEdit"><img src={backarrow} alt="backarrow" /></Link>
        </div>
        <div className="flexbox columnThick topAligned">
          <h1 className="extra-large-text center">Anhöriga</h1>
          <div className="scroll-container">
            <div className="scroll-header">
              <p className="center">Klicka på den anhöriga ni vill redigera</p>
            </div>
            <div className="scroll-outer largeScroll">
              <div className="scroll-inner">
                {
                  (loading || relatives == null) ? (
                    <p>loading...</p>
                  ) : (
                    relatives.sort((a, b) => ((a.name > b.name) ? 1 : -1)).map((relative) => (
                      <Link to={`/RelativeEditor?resident_id=${resident_id}&relative_id=${relative.id}&resident_name=${resident_name}`}><p className="scroll-row"><span className="name-plate">{relative.name}</span></p></Link>
                    ))
                  )
                }
              </div>
            </div>
          </div>

        </div>
        <div className="flexbox columnMedium bottomAligned">
          <Link to={`/RelativeAdd?resident_id=${resident_id}&resident_name=${resident_name}`}>
            <h1 className="right-button large-button right-add-button white-text extra-large-text centerDivVertical">
              Lägg till anhörig
              <br />
              &#43;
            </h1>
          </Link>
          <Link to={`/ResidentEditor?resident_id=${resident_id}&resident_name=${resident_name}`}>
            <h1 className="right-button medium-button right-add-button white-text extra-large-text centerDivVertical flexcenter">
              Redigera
              {resident_name}
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RelativeEdit;
