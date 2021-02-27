import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Button from "antd/lib/button";

export default function SlideNavigation({
  handleFullScreen,
  handlePreviousSlide,
  handleNextSlide,
  slideVisibleIndex,
  slideDataLength,
}) {
  useEffect(() => {
    function handleEventKeyboard(event) {
      if (event.key === "ArrowRight") {
        handleNextSlide();
      } else if (event.key === "ArrowLeft") {
        handlePreviousSlide();
      }
    }

    document.addEventListener("keyup", handleEventKeyboard);

    return () => {
      document.removeEventListener("keyup", handleEventKeyboard);
    };
  }, [handleNextSlide, handlePreviousSlide]);

  return (
    <>
      <Button
        type="primary"
        style={{ margin: "1rem 0" }}
        disabled={slideDataLength === 0}
        onClick={handleFullScreen}
      >
        Slideshow
      </Button>
      <Button
        type="primary"
        style={{ margin: "1rem 0 0 1rem" }}
        disabled={slideVisibleIndex === 0}
        onClick={handlePreviousSlide}
      >
        Prev
      </Button>
      <Button
        type="primary"
        style={{ margin: "1rem 0 0 1rem" }}
        disabled={slideVisibleIndex === slideDataLength - 1}
        onClick={handleNextSlide}
      >
        Next
      </Button>
    </>
  );
}

SlideNavigation.propTypes = {
  handleFullScreen: PropTypes.func.isRequired,
  handlePreviousSlide: PropTypes.func.isRequired,
  handleNextSlide: PropTypes.func.isRequired,
  slideVisibleIndex: PropTypes.number.isRequired,
  slideDataLength: PropTypes.number.isRequired,
};
