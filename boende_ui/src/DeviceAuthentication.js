import React, {useState,useEffect, useRef} from "react";
import {Link, Redirect} from "react-router-dom";
import axios from 'axios';
import anim from "./animMov.gif";


function DeviceAuthentication(){


    const [loading, setLoading] = useState(true);
    const [hasToken, setHasToken] = useState(false);
    const inputRef = useRef();
    const [password, setPassword]=useState("");

    useEffect(() => {
        const check = async () =>{
                if(localStorage.getItem("DeviceToken")!==null){
                  setHasToken(false);
                  setLoading(false);
                }else{
                  setHasToken(false);
                  setLoading(false);
                }
            };
            check();
        },[loading]);

    /*    useEffect(() => inputRef.current.focus(), [inputRef]); */ //copied from chime-poc


    return (
      <div>
        {loading && <div className="absoluteCenter"> <img src={anim} alt="" /></div>}
        {!loading && hasToken && <Redirect to="/Start"/>}
        {!loading && !hasToken && <div className="center">
          <h1>Contact Dogood at ___-___ __ __</h1>
        <input
            ref={inputRef}
        />
          <button onClick={() => setPassword(inputRef.current.value)}>Authenticate</button>
            <p>DEBUG! Password entered DEBUG!{password}</p>
        </div>
      }
      </div>

    );
}


export default DeviceAuthentication;
