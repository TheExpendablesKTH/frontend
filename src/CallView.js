import { Link } from 'react-router-dom';

import React, { useEffect, useState, useRef } from 'react';
import './styleOne.css';
import axios from 'axios';
import CallWrapper from './call';
import EndCallButton from './endCallButton.png';

const CallView = (props) => {
  const [externalIds, setExternalIds] = useState(findGetParameter('selected').split(',').map((r) => Number(r)));
  const apiUrl = 'https://master.api.dd1369-meetings.com';
  const device_token = localStorage.getItem('DeviceToken');
  const resident_id = findGetParameter('resident_id');
  const [connecting, setConnecting] = useState(true);
  const [call] = useState(new CallWrapper(apiUrl));

  useEffect(() => {
    const connect = async () => {
      if (!externalIds) return;
      const response = await axios.post(`${apiUrl}/authenticate/resident`, { id: resident_id }, { headers: { 'Content-Type': 'application/json', Authorization: device_token } });
      await call.connectToChimeMeeting(externalIds, response.data.token);
      call.startWatching();
    };
    connect();
    doTheCall();
  }, [externalIds, call]);

  function doTheCall() {
    if (call.hasActiveCall()) {
      const stream = async () => {
        call.setAudioInputDeviceToDefault();
        const mediaStream = await call.getVideoMediaStream();
        await call.broadcastVideo(mediaStream);
      };
      stream();
    } else {
      setTimeout(doTheCall, 100);
    }
  }

  function findGetParameter(parameterName) {
    let result = null;
    let tmp = [];
    window.location.search
      .substr(1)
      .split('&')
      .forEach((item) => {
        tmp = item.split('=');
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
      });
    return result;
  }

  return (
    <div>

      <div id="EndCall-Button">
        <Link to="./Start"><img src={EndCallButton} /></Link>

      </div>

      <div className="tileContainer">
        <div className="tileSubContainer" id="tiles" />
      </div>

      <audio id="audio-out" />

    </div>
  );
};

export default CallView;
