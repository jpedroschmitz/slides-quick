import React from "react";

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
