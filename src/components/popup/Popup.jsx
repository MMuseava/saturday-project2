import React, { useState } from "react";
import "./popup.style.css";

const Popup = ({ yes, no }) => {
  const [isSeeable, setIsSeeable] = useState(true);

  return (
    <div className="popup-container">
      <div className="popup">
        <p>Do you want to delete all?</p>
        <div className="btn">
          <button className="yes" onClick={yes}>
            Yes
          </button>
          <button className="no" onClick={no}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;