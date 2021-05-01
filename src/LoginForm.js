import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import backarrow from './back-arrow.png';

function LoginForm() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [failed, setFailed] = useState(false);
  const apiUrl = 'http://master.api.dd1369-meetings.com/';
  const device_token = localStorage.getItem('DeviceToken');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const result = await axios.post(`${apiUrl}/authenticate/admin`, { username, password }, { headers: { 'Content-Type': 'application/json', Authorization: device_token } }).catch((err) => {
      setFailed(true);
    });
    if (!failed) {
      localStorage.setItem('admin_token', result.data.token);
      setLoggedIn(true);
    }
  };
  return (
    <div>
      {loggedIn && <Redirect to={{ pathname: '/ResidentEdit' }} />}
      {!loggedIn && (
        <div>
          <ul className="breadcrumb br2">
            <li> Loggar in som admin </li>
          </ul>
          <div className="upper-left">
            <Link to="/LoginConfirm"><img src={backarrow} alt="backarrow" /></Link>
          </div>
          <div className="center paddingheader">
            <h1 className="headerstyle">Logga in som admin</h1>
            <link rel="stylesheet" href="styleOne.css" />
          </div>

          <div className="center">
            <form onSubmit={handleSubmit}>
              <label>
                <p className="form-headline">Användarnamn:</p>
                <br />
                <input type="text" id="username" name="username" required />
                <br />
                <p className="form-headline">Lösenord:</p>
                <br />
                <input type="password" id="password" name="password" required />
              </label>
              <br />
              {failed && <p>Inloggningen misslyckades. Försök igen.</p>}
              <br />
              <input type="submit" value="Logga in" />
            </form>
          </div>
        </div>
      )}
    </div>

  );
}

export default LoginForm;
