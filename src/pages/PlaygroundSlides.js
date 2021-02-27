import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import SlideNavigation from "../components/SlideNavigation";
import PlaygroundBase from "../components/PlaygroundBase";
import Slide from "../components/Slide";

export default function PlaygroundSlides() {
  const handle = useFullScreenHandle();
  const [slideVisibleIndex, setSlideVisibleIndex] = useState(0);
  const [slideData, setSlideData] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("@playground:text");

    if (data) {
      setSlideData(JSON.parse(data));
    }
  }, []);

  function handleFullScreen() {
    handle.enter();
  }

  function handlePreviousSlide() {
    if (slideVisibleIndex > 0) {
      setSlideVisibleIndex((prev) => prev - 1);
    }
  }

  function handleNextSlide() {
    if (slideVisibleIndex < slideData.length - 1) {
      setSlideVisibleIndex((prev) => prev + 1);
    }
  }

  let slides = (
    <h4>
      Hey, you need to <Link to="/">write</Link> something!
    </h4>
  );

  if (slideData) {
    slides = (
      <Slide isFull={handle.active}>{slideData[slideVisibleIndex]}</Slide>
    );
  }

  return (
    <PlaygroundBase title="Playground - Slide Presentation">
      <FullScreen handle={handle}>{slides}</FullScreen>

      {slideData && (
        <SlideNavigation
          handleFullScreen={handleFullScreen}
          handleNextSlide={handleNextSlide}
          handlePreviousSlide={handlePreviousSlide}
          slideVisibleIndex={slideVisibleIndex}
          slideDataLength={slideData.length}
        />
      )}
    </PlaygroundBase>
  );
}
