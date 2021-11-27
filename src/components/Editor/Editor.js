import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import React, { useState } from "react";
import "./Editor.scss";
import { Code } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

export default function Editor(props) {
  const [showCode, setShowCode] = useState(false);
  const toggleCode = () => {
    setShowCode(!showCode);
  };
  return (
    <>
      <IconButton
        aria-label="code"
        className={showCode ? "code-button active" : "code-button"}
        onClick={toggleCode}
      >
        <Code fontSize="small" />
      </IconButton>
      <LiveProvider
        className="split-view"
        code={props.code}
        scope={props.scope}
      >
        <LiveError />
        <LivePreview className="preview" />
        {showCode && <LiveEditor className="code-editor" />}
      </LiveProvider>
    </>
  );
}
