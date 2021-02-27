import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Steps from "antd/lib/steps";

import SlideNavigation from "../components/SlideNavigation";
import Layout from "../components/Layout";
import Slide from "../components/Slide";

const { Step } = Steps;

export default function PlaygroundSlides() {
  const handle = useFullScreenHandle();
  const [slideVisibleIndex, setSlideVisibleIndex] = useState(0);
  const [slideData, setSlideData] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("@playground:text");

    if (data[0] !== "") {
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

  const hasText = slideData[0] !== "";

  let slides = (
    <h4>
      Hey, you need to <Link to="/">write something</Link>!
    </h4>
  );

  if (hasText) {
    slides = (
      <Slide isFull={handle.active}>{slideData[slideVisibleIndex]}</Slide>
    );
  }

  return (
    <Layout title="Slides">
      <FullScreen handle={handle}>{slides}</FullScreen>

      {hasText && (
        <SlideNavigation
          handleFullScreen={handleFullScreen}
          handleNextSlide={handleNextSlide}
          handlePreviousSlide={handlePreviousSlide}
          slideVisibleIndex={slideVisibleIndex}
          slideDataLength={slideData.length}
        />
      )}

      <Steps
        direction="vertical"
        current={hasText ? 1 : 0}
        style={{ marginTop: 40 }}
      >
        <Step
          title="Write"
          description="Paste your text or write it on the text page."
        />
        <Step
          title="Navigate"
          description="Use the keyboard arrows or click next and prev. Slideshow to go fullscreen."
        />
      </Steps>
    </Layout>
  );
}
