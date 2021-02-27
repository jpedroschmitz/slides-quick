import React, { useEffect } from "react";
import { Button } from "antd";

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
  }, []);

  return (
    <>
      <Button
        type="primary"
        style={{ margin: "1rem 0" }}
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
