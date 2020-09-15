import React from 'react';
import './buttonBox.css';
function ButtonBox() {
  return (
    <div className="header-switch-box">
      <button type="submit" className="btn switch-btn">
        app
      </button>
      <button type="submit" className="btn switch-btn">
        new biz
      </button>
      <button type="submit" className="btn switch-btn">
        my files
      </button>
    </div>
  );
}

export default ButtonBox;
