import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import anim from './animMov.gif';

function DeviceAuthentication() {
  const [loading, setLoading] = useState(true);
  const [hasToken, setHasToken] = useState(false);
  const inputRef = useRef();
  const [password, setPassword] = useState(''); // DEBUG!!
  const apiUrl = 'http://master.api.dd1369-meetings.com';

  useEffect(() => {
    const check = async () => {
      if (localStorage.getItem('DeviceToken') !== null) {
        setHasToken(true);
        setLoading(false);
      } else {
        setHasToken(false); // should be false, but can be set to true to auto-skip
        setLoading(false);
      }
    };
    check();
  }, [loading]);

  function userClickedAuthenticate(newPassword) {
    const fetchAndStoreData = async () => {
      const result = await axios.post(`${apiUrl}/authenticate/device`, { passphrase: newPassword }, { headers: { 'Content-Type': 'application/json' } });
      storeToken(result.data.token);
    };
    fetchAndStoreData();
  }

  function storeToken(newToken) {
    localStorage.setItem('DeviceToken', newToken);
    setLoading(true);
  }

  return (
    <div>
      {loading && (
        <div className="absoluteCenter">
          {' '}
          <img src={anim} alt="" />
        </div>
      )}
      {!loading && hasToken && <Redirect to="/AdminAuthentication" />}
      {!loading && !hasToken && (
        <div className="center">
          <h1>Contact Dogood at ___-___ __ __</h1>
          <input
            ref={inputRef}
          />
          <button onClick={() => userClickedAuthenticate(inputRef.current.value)}>Authenticate</button>
          <p>
            DEBUG! Password:
            {password}
          </p>
        </div>
      )}
    </div>

  );
}

export default DeviceAuthentication;
