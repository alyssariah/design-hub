import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import React, { useState } from "react";
import "./Editor.scss";
import { Code } from "@material-ui/icons";
import { IconButton, Tooltip } from "@material-ui/core";

export default function Editor(props) {
  const [showCode, setShowCode] = useState(false);
  const toggleCode = () => {
    setShowCode(!showCode);
  };
  return (
    <>
      <Tooltip title="View Live Code">
        <IconButton
          aria-label="code"
          className={showCode ? "code-button active" : "code-button"}
          onClick={toggleCode}
        >
          <Code fontSize="small" />
        </IconButton>
      </Tooltip>

      <LiveProvider
        className="split-view"
        code={props.code}
        scope={props.scope}
      >
        <LiveError />
        <LivePreview className="preview" />
        <LiveEditor className={showCode ? "code-editor" : "code-editor hide"} />
      </LiveProvider>
    </>
  );
}
