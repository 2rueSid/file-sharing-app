import React from 'react';
import HeaderSearch from './headerSearch/searchContainer';
import HeaderInfo from './headerInfo/headerInfoContainer';

import './header.css';

function Header(props) {
  const { getSearchedResult } = props;
  return (
    <div className="dashboard-header">
      <HeaderSearch getSearchedResult={getSearchedResult} />
      <HeaderInfo />
    </div>
  );
}

export default Header;
