// src/components/Button.js
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, type }) => {
  return <button className={`btn btn-${type}`}>{label}</button>;
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'danger']).isRequired,
};

export default Button;