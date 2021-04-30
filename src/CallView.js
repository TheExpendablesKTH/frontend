import {Link} from "react-router-dom";

import React, { useEffect, useState, useRef } from "react";
import './styleOne.css';
import CallWrapper from "./call";
import EndCallButton from "./endCallButton.png";
import axios from "axios";
const CallView = (props) =>{
    const [externalIds,setExternalIds] =  useState(findGetParameter("selected").split(",").map((r)=>Number(r)));
    const api_url = 'http://master.api.dd1369-meetings.com';
    const device_token = localStorage.getItem("DeviceToken");
    const resident_id = findGetParameter("resident_id");
    const [connecting, setConnecting] = useState(true);
    const [call] = useState(new CallWrapper(api_url));
    const [streaming, setStreaming] = useState(true);

    useEffect(() => {
        
        const connect = async () => {
            if (!externalIds) return;
            const response = await axios.post(api_url+"/authenticate/resident",{'id':resident_id},{headers:{'Content-Type':'application/json','Authorization':device_token}});
            await call.connectToChimeMeeting(externalIds,response.data.token);
            call.startWatching();
        };
        connect();
        doTheCall();
    }, [externalIds, call]);

    function doTheCall() {

        if(call.hasActiveCall()){
          const stream = async () => {
              call.setAudioInputDeviceToDefault();
              const mediaStream = await call.getVideoMediaStream();
              await call.broadcastVideo(mediaStream);
          };
            stream();
          }else {
              setTimeout(doTheCall, 100);
          }
    }


    //shamelessly stolen from frontend repo src/Relative.js
    function findGetParameter(parameterName) {
        var result = null,
            tmp = [];
            window.location.search
            .substr(1)
            .split("&")
            .forEach(function (item) {
              tmp = item.split("=");
              if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
            });
        return result;
    }



    return (
      <div>

          <div id="EndCall-Button">
            <Link to = "./Start"><img src={EndCallButton} /></Link>

          </div>

          <div className="tileContainer">
            <div className="tileSubContainer" id="tiles">
            </div>
          </div>

          <audio id="audio-out"></audio>

        </div>
    );
}



export default CallView;
