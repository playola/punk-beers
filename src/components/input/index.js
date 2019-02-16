import React from 'react';
import PropTypes from 'prop-types';
import {
  InputWrapper,
  InputField,
  FloatingLabel,
} from './styles';

const Input = ({ placeholder, ...props }) => (
  <InputWrapper>
    <InputField type="text" required {...props} />
    <FloatingLabel>{ placeholder }</FloatingLabel>
  </InputWrapper>
);

Input.propTypes = {
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  placeholder: 'Search',
};

export default Input;
