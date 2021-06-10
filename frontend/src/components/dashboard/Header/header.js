import React from 'react';
import HeaderSearch from '../HeaderSearch/searchContainer';
import HeaderInfo from '../HeaderInfo/headerInfoContainer';

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
