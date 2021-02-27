import React from "react";
import PropTypes from "prop-types";

import "./Textarea.css";

export default function Textarea({
  text,
  changed,
  placeholder,
  children,
  ...rest
}) {
  return (
    <textarea
      onChange={changed}
      className="textarea"
      placeholder={placeholder}
      value={text}
      {...rest}
    >
      {children}
    </textarea>
  );
}

Textarea.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
  placeholder: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  changed: PropTypes.func.isRequired,
};
