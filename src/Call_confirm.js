import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import backarrow from './back-arrow.png';

function Call_confirm(props) {
  const [loading, setLoading] = useState(true); // useless im p sure
  const [selected, setSelected] = useState([]);
  const [residentId, setResidentId] = useState();
  const [residentName, setResidentName] = useState();

  useEffect(() => {
    if (props.location.selected !== undefined) {
      setSelected(props.location.selected);
      setResidentId(props.location.residentId);
      setResidentName(props.location.residentName);
    }
    setLoading(false);
  }, []);

  const removeRelative = (relative) => {
    setSelected((prev) => {
      if (prev.includes(relative)) {
        return prev.filter((r) => r !== relative);
      }
    });
  };

  return (
    <div>
      <ul className="breadcrumb br1">
        <li>
          Starta samtal: Bekräftar samtal av
          {residentName}
        </li>
      </ul>
      <div className="button" />
      <div className="flexbox">
        <div className="flexbox columnThin topAligned">
          <Link to={`/Relative?resident_id=${residentId}&resident_name=${residentName}`}><img src={backarrow} /></Link>
        </div>
        <div className="flexbox columnThick topAligned">
          <h1 className="extra-large-text">Du har bjudit in:</h1>
          <div className="scroll-container">
            <div className="scroll-header">
              <p className="center">Klicka på röda knappen för att ta bort kontakt från samtalet</p>
            </div>
            <div className="scroll-outer largeScroll">
              <div className="scroll-inner">
                {(selected.length === 0) ? (
                    <p>Du har inte valt några kontakter! Gå tillbaka och försök igen</p>
                  ) : (
                    selected.sort((a, b) => ((a.name > b.name) ? 1 : -1)).map((relative) => (
                      <p className="scroll-row">
                        <span className="name-plate">{relative.name}</span>
                        <span className="alter-button remove-button" onClick={() => removeRelative(relative)}>-</span>
                      </p>
                    ))
                  )
                }
              </div>
            </div>
          </div>
        </div>
        <div className="flexbox columnMedium bottomAligned">
          <Link to={`/CallView?resident_id=${residentId}&selected=${selected.map((r) => r.id)}`}>
            <h1 className="right-button call-button large-button white-text extra-large-text centerDivVertical">
              Påbörja samtal
              <br />
              {' '}
              &#9742;
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Call_confirm;
