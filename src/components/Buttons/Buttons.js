import { Button, Icon, IconButton, makeStyles } from "@material-ui/core";
import {
  AddShoppingCart,
  Alarm,
  CloudUpload,
  Delete,
  KeyboardVoice,
  PhotoCamera,
  Save,
} from "@material-ui/icons";
import React from "react";
import "./Buttons.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function Buttons() {
  const classes = useStyles();

  return (
    <div className="buttons">
      <h2>Buttons</h2>
      <div className={classes.root}>
        <Button>Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button disabled>Disabled</Button>
        <Button color="primary" href="#contained-buttons">
          Link
        </Button>
      </div>
      <div className={classes.root}>
        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
        </Button>
      </div>
      <div className={classes.root}>
        <Button variant="outlined">Default</Button>
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="outlined" color="primary" href="#outlined-buttons">
          Link
        </Button>
      </div>
      <div className={classes.root}>
        <input
          accept="image/*"
          className="input"
          id="contained-button-file"
          multiple
          type="file"
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            Upload
          </Button>
        </label>
        <input
          accept="image/*"
          className="input"
          id="icon-button-file"
          type="file"
        />
        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera />
          </IconButton>
        </label>
      </div>
      <div className={classes.root}>
        <Button variant="contained" size="small" color="primary">
          Small
        </Button>
        <Button variant="contained" size="medium" color="primary">
          Medium
        </Button>
        <Button variant="contained" size="large" color="primary">
          Large
        </Button>
        <IconButton aria-label="delete">
          <Delete fontSize="small" />
        </IconButton>
        <IconButton aria-label="delete">
          <Delete />
        </IconButton>
        <IconButton aria-label="delete">
          <Delete fontSize="large" />
        </IconButton>
      </div>
      <div className={classes.root}>
        <Button variant="contained" color="secondary" startIcon={<Delete />}>
          Delete
        </Button>
        {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
        <Button variant="contained" color="primary" endIcon={<Icon>send</Icon>}>
          Send
        </Button>
        <Button variant="contained" color="default" startIcon={<CloudUpload />}>
          Upload
        </Button>
        <Button
          variant="contained"
          disabled
          color="secondary"
          startIcon={<KeyboardVoice />}
        >
          Talk
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<Save />}
        >
          Save
        </Button>
      </div>
      <div className={classes.root}>
        <IconButton aria-label="delete">
          <Delete />
        </IconButton>
        <IconButton aria-label="delete" disabled color="primary">
          <Delete />
        </IconButton>
        <IconButton color="secondary" aria-label="add an alarm">
          <Alarm />
        </IconButton>
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCart />
        </IconButton>
      </div>
    </div>
  );
}

export default Buttons;
