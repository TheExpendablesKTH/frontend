import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import backarrow from './back-arrow.png';

function Resident() {
  const [loading, setLoading] = useState(true);
  const [residents, setResidents] = useState(null);
  const apiUrl = 'https://master.api.dd1369-meetings.com/residents';
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(apiUrl, { headers: { 'Content-Type': 'application/json', Authorization: localStorage.getItem('admin_token') } });
      setResidents(result.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul className="breadcrumb br1">
        <li>Starta samtal: Väljer boende som ska ringa</li>
      </ul>
      <div className="button" />
      <div className="flexbox">
        <div className="flexbox topAligned">
          <Link to="/Start"><img src={backarrow} alt="backarrow" /></Link>

        </div>
        <div className="flexbox topAligned">
          <h1 className="extra-large-text center">Boende</h1>
          <div className="scroll-container">
            <div className="scroll-header">
              <p className="center">Klicka på namnet på valda boende</p>

            </div>
            <div className="scroll-outer largeScroll">
              <div className="scroll-inner">
                {(loading || residents == null) ? (
                  <p>loading...</p>
                ) : (
                  residents.sort((a, b) => ((a.name > b.name) ? 1 : -1)).map((resident) => (
                    <Link to={`/Relative?resident_id=${resident.id}&resident_name=${resident.name}`}><p className="scroll-row"><span className="name-plate">{resident.name}</span></p></Link>
                  ))
                )}
              </div>
            </div>
          </div>

        </div>
        <div className="flexbox" />
      </div>
    </div>
  );
}

export default Resident;
