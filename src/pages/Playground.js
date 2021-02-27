import React, { useState, useEffect } from "react";
import { List } from "antd";

import Textarea from "../components/Textarea";
import PlaygroundBase from "../components/PlaygroundBase";

const data = [
  "- Paste your text or write it on the field above;",
  "- Separate slides by paragraphs;",
];

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
    <PlaygroundBase title="Playground - Slide Text">
      <Textarea
        placeholder="Paste or write your text here"
        changed={handleTextarea}
        text={textareaText}
      />

      <List
        size="large"
        header={<div>Instructions:</div>}
        bordered
        style={{ margin: "24px 0" }}
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </PlaygroundBase>
  );
}
