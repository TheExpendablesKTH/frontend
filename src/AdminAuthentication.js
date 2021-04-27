import React, {useState,useEffect, useRef} from "react";
import {Redirect} from "react-router-dom";
import axios from 'axios';
import anim from "./animMov.gif";


function AdminAuthentication(){


    const [loading, setLoading] = useState(true);
    const [hasToken, setHasToken] = useState(false);
    const inputName = useRef();
    const inputUserName = useRef();
    const inputPassword = useRef();
    const api_url = "http://master.api.dd1369-meetings.com";


    useEffect(() => {
        const check = async () =>{
                if(localStorage.getItem("AdminToken")!==null){
                  setHasToken(true);
                  setLoading(false);
                }else{
                  setHasToken(true); //should be false, but can be set to true to auto-skip
                  setLoading(false);
                }
            };
            check();
        },[loading]);

      function userClickedAuthenticate(name, username, password){
        const fetchAndStoreData = async () => {
          const result =  await axios.post(api_url + "/admin",
          {'name':name,'username':username,'password':password},
          {headers:
          {Content-Type':'application/json','Authorization':localStorage.getItem("DeviceToken)}});

          getAndStoreToken(username, password);

        };
        fetchAndStoreData();
        }

      function getAndStoreToken(username, password){
          localStorage.setItem("AdminToken", newToken);
        setLoading(true);
      }
    /*    useEffect(() => inputRef.current.focus(), [inputRef]); */ //copied from chime-poc


    return (
      <div>
        {loading && <div className="absoluteCenter"> <img src={anim} alt="" /></div>}
        {!loading && hasToken && <Redirect to="/Start"/>}
        {!loading && !hasToken && <div className="center">
          <h1>No local admin detected please contact <br> Dogood at ___-___ __ __</h1>
          <p>Enter name: <br></p>
        <input
            ref={inputName}
        />
        <p>Enter username: <br></p>
      <input
          ref={inputUserName}
      />
      <p>Enter password: <br></p>
    <input
        ref={inputPassword}
    />
          <button onClick={() => userClickedAuthenticate(inputName.current.value, inputUserName.current.value, inputPassword.current.value)}>Authenticate</button>
            <p>DEBUG! Password:{password}</p>
        </div>
      }
      </div>

    );
}


export default AdminAuthentication;
