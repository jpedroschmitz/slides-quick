import React from "react";
import PropTypes from "prop-types";

export default function Slide({ isFull, children }) {
  const style = {
    backgroundColor: "#7f8fa6",
    color: "#FFFFFF",
    width: "960px",
    height: "540px",
    padding: "1rem",
    textAlign: "center",
    fontSize: "3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  if (isFull) {
    style.height = "100vh";
    style.width = "100vw";
    style.fontSize = "6rem";
    style.margin = "0";
  }

  const data = children && children.replace(/[\n\r]/g, "<br>");

  return <div style={style} dangerouslySetInnerHTML={{ __html: data }}></div>;
}

Slide.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string,
  ]),
  isFull: PropTypes.bool.isRequired,
};
