import React from 'react';
import './search.css';
import { Input, Icon } from '@material-ui/core';

function HeaderSearch(props) {
  const { onSearchFieldType, onIconClick } = props;
  return (
    <div className="header-search-field">
      <Icon onClick={onIconClick}>
        <i className="fas fa-search dashboard-search-icon"></i>
      </Icon>
      <Input
        id="search-field"
        className={'search-field-spacing'}
        disableUnderline
        type={'search'}
        placeholder="Find everything..."
        onChange={onSearchFieldType}
      />
    </div>
  );
}

export default HeaderSearch;
