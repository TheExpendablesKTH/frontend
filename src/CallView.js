import {Link} from "react-router-dom";

import React, { useEffect, useState, useRef } from "react";
import './styles.css';
import CallWrapper from "./call";
import EndCallButton from "./endCallButton.png";

const CallView = () => {
    const externalId = findGetParameter("externalId");
    const inputRef = useRef();
    const [connecting, setConnecting] = useState(true);
    const [call] = useState(new CallWrapper('http://mock.api.dd1369-meetings.com', 'foobar'));





    useEffect(() => {
      const connect = async () => {
        if (!externalId) return;
        await call.connectToChimeMeeting(externalId);
        call.startWatching();
    }; connect();

      doAStream();
    }, [call, externalId]);

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
            <Link to = "./StartView"><img src={EndCallButton} /></Link>
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
