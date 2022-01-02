import React from "react";
import "./Buttons.scss";

import {
  AddShoppingCart,
  Alarm,
  CloudUpload,
  Delete,
  KeyboardVoice,
  PhotoCamera,
  Save,
} from "@material-ui/icons";

import { Button, Icon, IconButton } from "@material-ui/core";
import Editor from "components/Editor/Editor";
import { buttonCode } from "../../data/buttonCode";

const scope = {
  Button,
  Icon,
  IconButton,
  AddShoppingCart,
  Alarm,
  CloudUpload,
  Delete,
  KeyboardVoice,
  PhotoCamera,
  Save,
};
// default code

export default function Buttons() {
  return (
    <div className="buttons">
      <h2>Buttons</h2>
      {buttonCode.map((data, index) => {
        return (
          <div className="button-example">
            <h3>{data.name}</h3>
            <Editor
              index={index}
              code={data.code}
              key={index}
              scope={scope}
            ></Editor>
          </div>
        );
      })}
    </div>
  );
}
