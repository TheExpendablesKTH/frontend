import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import backarrow from './back-arrow.png';
import { findGetParameter } from './Relative';

function RelativeEditor() {
  const [loading, setLoading] = useState(false);
  const [relatives, setRelatives] = useState(null);
  const [relative, setRelative] = useState(null);
  const nameToSave = useRef(null);
  const phoneToSave = useRef(null);
  const resident_id = findGetParameter('resident_id');
  const relative_id = findGetParameter('relative_id');
  const resident_name = findGetParameter('resident_name');
  const apiUrl = 'http://master.api.dd1369-meetings.com';
  const admin_token = localStorage.getItem('admin_token');

  const updateRelative = async (e) => {
    e.preventDefault();
    setLoading(true);
    const deleteRequest = axios.delete(`${apiUrl}/residents/${resident_id}/relatives/${relative_id}`, { headers: { 'Content-Type': 'application/json', Authorization: admin_token } });
    const saveRequest = axios.post(`${apiUrl}/residents/${resident_id}/relatives`, { name: nameToSave.current.value, phone: phoneToSave.current.value }, { headers: { 'Content-Type': 'application/json', Authorization: admin_token } });
    await axios.all([deleteRequest, saveRequest]);
    setLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${apiUrl}/residents/${resident_id}/relatives`, { headers: { 'Content-Type': 'application/json', Authorization: admin_token } });
      setRelatives(result.data);
      setLoading(false);
      setRelative(result.data.find((r) => r.id.toString() === relative_id.toString()));
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul className="breadcrumb br2">
        <li>
          Redigera: Redigerar anhörig till
          {resident_name}
        </li>
      </ul>
      <div className="upper-left">
        <Link to={`/RelativeEdit?resident_id=${resident_id}&resident_name=${resident_name}`}><img src={backarrow} alt="backarrow" /></Link>
      </div>
      {
        (loading || relatives == null || relative == null) ? (
          <div className="center paddingheader">
            <h1 className="headerstyle">Laddar...</h1>
            <link rel="stylesheet" href="styleOne.css" />
          </div>
        ) : (
          <div>
            <div className="center paddingheader">
              <h1 className="headerstyle">
                Redigera
                {relative.name}
              </h1>
              <link rel="stylesheet" href="styleOne.css" />
            </div>
            <div className="center">
              <form onSubmit={updateRelative}>
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
              <br />
              <br />
              <Link to={`/ConfirmDeleteRel?resident_id=${resident_id}&resident_name=${resident_name}&relative_id=${relative_id}&relative_name=${relative.name}`}>
                <button className="button button2" id="raderaAnhorig">
                  Radera
                  {relative.name}
                </button>
              </Link>
            </div>
          </div>

        )
      }
    </div>

  );
}

export default RelativeEditor;
