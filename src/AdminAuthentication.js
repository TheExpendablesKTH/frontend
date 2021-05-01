import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import anim from './animMov.gif';

function AdminAuthentication() {
  const [debug, setDebug] = useState(false); // DEBUG!!

  const [loading, setLoading] = useState(true);
  const [hasToken, setHasToken] = useState(false);
  const [hasAdmin, setHasAdmin] = useState('none');
  const inputName = useRef();
  const inputUserName = useRef();
  const inputPassword = useRef();
  const apiUrl = 'http://master.api.dd1369-meetings.com';

  useEffect(() => {
    const check = async () => {
      if (localStorage.getItem('admin_token') !== null) {
        setHasToken(true);
        setLoading(false);
      } else {
        setHasToken(false); // should be false, but can be set to true to auto-skip
        setLoading(false);
      }
    };
    check();
  }, [loading]);

  function getAndStoreToken(username, password) {
    const getAndStoreTokenTwo = async () => {
      if (hasAdmin !== '') {
        const result = await axios.post(`${apiUrl}/authenticate/admin`,
          { username, password }, {
            headers:
          { 'Content-Type': 'application/json', Authorization: localStorage.getItem('DeviceToken') },
          });

        localStorage.setItem('admin_token', result.data.token);
        setLoading(true);
        setDebug(true);
      } else {
        setTimeout(getAndStoreTokenTwo, 10);
      }
    };
    getAndStoreTokenTwo();
  }

  function userClickedAuthenticate(name, username, password) {
    setLoading(true);
    const fetchAndStoreData = async () => {
      setHasAdmin(
        JSON.stringify(
          await axios.post(`${apiUrl}/admin`,
            { name, username, password },
            {
              headers:
                { 'Content-Type': 'application/json', Authorization: localStorage.getItem('DeviceToken') },
            }),
        ),
      );
      getAndStoreToken(username, password);
    };
    fetchAndStoreData();
  }

  return (
    <div>
      {debug && <div> DEBUG IS NOW TRUE</div>}
      {loading && (
        <div className="absoluteCenter">
          {' '}
          <img src={anim} alt="" />
          Response is:
          {' '}
          {hasAdmin}
        </div>
      )}
      {!loading && hasToken && <Redirect to="/Start" />}
      {!loading && !hasToken && (
        <div className="center">
          <h1>
            No local admin detected please contact
            <br />
            {' '}
            Dogood at ___-___ __ __
          </h1>
          <p>
            Enter name:
            <br />
          </p>
          <input
            ref={inputName}
          />
          <p>
            Enter username:
            <br />
          </p>
          <input
            ref={inputUserName}
          />
          <p>
            Enter password:
            <br />
          </p>
          <input
            ref={inputPassword}
          />
          <br />
          <button
            type="submit"
            onClick={() => userClickedAuthenticate(
              inputName.current.value,
              inputUserName.current.value,
              inputPassword.current.value,
            )}
          >
            Authenticate
          </button>

        </div>
      )}
    </div>

  );
}

export default AdminAuthentication;
