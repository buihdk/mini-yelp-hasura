import React from 'react';
import PropTypes from 'prop-types';

import { Container, Input, Button } from '../style';

const InputForm = ({ inputVal, onChange, onSubmit, buttonText }) => (
  <Container>
    <Input value={inputVal} onChange={onChange} />
    <Button onClick={onSubmit}>{buttonText || 'Search'}</Button>
  </Container>
);

InputForm.propTypes = {
  inputVal: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  buttonText: PropTypes.string,
};

InputForm.defaultProps = {
  inputVal: '',
  onChange: () => {},
  onSubmit: () => {},
  buttonText: '',
};

export default InputForm;
