import React from 'react';

const InputBox = ({
  input,
  type,
  placeholder,
  meta: { error, touched }
}) => (
  <React.Fragment>
    <input {...input} type={type} placeholder={placeholder} />
    {touched && <span className="help-block error-color">{error}</span>}
  </React.Fragment>
);

export default InputBox;