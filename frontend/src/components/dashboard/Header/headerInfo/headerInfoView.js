import React from 'react';
import { Icon } from '@material-ui/core';
import './headerInfo.css';

function HeaderInfo(props) {
  const { usedMemory, valueNow } = props;

  return (
    <div className="header-info">
      <div className="info-img">
        <Icon fontSize={'large'} color="disabled">
          <i className="fas fa-rocket "></i>
        </Icon>
      </div>
      <div className="info-main">
        <h4>Some Name</h4>
        <div className="progress ">
          <div
            style={{ width: valueNow + '%' }}
            role="progressbar"
            aria-valuenow={valueNow}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="progress-bar-info">{usedMemory} / 100.00 GB</div>
      </div>
    </div>
  );
}

export default HeaderInfo;
