import {Link} from "react-router-dom";

import React, { useEffect, useState, useRef } from "react";
import './styleOne.css';
import CallWrapper from "./call";
import EndCallButton from "./endCallButton.png";
import axios from "axios";
function CallView(props) {
    const externalIds = [7];/*props.location.selected .map(r => r.id) */;
    const api_url = 'http://master.api.dd1369-meetings.com';
    const device_token = localStorage.getItem("DeviceToken");
    const resident_id = findGetParameter("resident_id");
    const inputRef = useRef();
    const [connecting, setConnecting] = useState(true);
    const [call] = useState(new CallWrapper(api_url));
    const [residentToken,setResidentToken] = useState(null);
    useEffect(() => {
      const getResidentToken = async() =>{      
        const result = await axios.post(api_url+"/authenticate/resident",{'id':resident_id},{headers:{'Content-Type':'application/json','Authorization':device_token}});
        setResidentToken(result.data.token);
        if (!residentToken || !externalIds){ return;}
        await call.connectToChimeMeeting(externalIds,residentToken);
        call.startWatching();
      }; getResidentToken();
    //   const connect = async () => {
    //     if (!residentToken || !externalIds) return;
    //     alert("in");
        
    // }; connect();
      doAStream();
    }, [call, externalIds]);

    function doAStream(){
      if(call.hasActiveCall()){
          setConnecting(false);
        const stream = async () => {
            call.setAudioInputDeviceToDefault();
            const mediaStream = await call.getVideoMediaStream();
            await call.broadcastVideo(mediaStream);};
        stream();
      }else{
        setTimeout(doAStream, 1000);
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

          {connecting && <p>Connecting...</p>}

          <div className="tileContainer">
            <div className="tileSubContainer" id="tiles">
            </div>
          </div>

          <audio id="audio-out"></audio>

        </div>
    );
}



export default CallView;
