import React from 'react';
import PropTypes from 'prop-types';

import { SearchForm, Input, Button } from './style';

const Search = ({ inputVal, onChange, onSearch }) => (
  <SearchForm>
    <Input value={inputVal} onChange={onChange} />
    <Button onClick={onSearch}>Search</Button>
  </SearchForm>
);

Search.propTypes = {
  inputVal: PropTypes.string,
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
};

Search.defaultProps = {
  inputVal: '',
  onChange: () => {},
  onSearch: () => {},
};

export default Search;
