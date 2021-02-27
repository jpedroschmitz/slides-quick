import React, { useState, useEffect } from "react";
import Steps from "antd/lib/steps";

import Textarea from "../components/Textarea";
import Layout from "../components/Layout";

const { Step } = Steps;

export default function Playground() {
  const [textareaText, setTextareaText] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("@playground:text");
    setTextareaText(data && JSON.parse(data).join("\n\n"));
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "@playground:text",
      JSON.stringify(textareaText.split("\n\n"))
    );
  }, [textareaText]);

  function handleTextarea(event) {
    const value = event.target.value;
    setTextareaText(value);
  }

  return (
    <Layout title="Write">
      <Textarea
        placeholder="Paste or write your text here"
        changed={handleTextarea}
        text={textareaText}
      />

      <Steps direction="vertical" current={0} style={{ marginTop: 40 }}>
        <Step
          title="Write"
          description="Paste your text or write it on the field above. Separate slides by paragraphs."
        />
        <Step
          title="Navigate"
          description="Click on the slide page and you're ready to go."
        />
      </Steps>
    </Layout>
  );
}
