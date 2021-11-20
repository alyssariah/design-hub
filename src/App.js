import { CssBaseline, makeStyles, StylesProvider } from "@material-ui/core";
import Buttons from "components/Buttons/Buttons";
import Home from "components/Home/Home";
import MiniDrawer from "components/Navigation/MiniDrawer/MiniDrawer";
import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

// const useStyles = makeStyles((theme) => ({
//   contentDetail: {
//     minHeight: "100vh",
//     minWidth: "100%",
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
//   },
// }));

function App() {
  // const classes = useStyles();
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <div className="app">
        <MiniDrawer />
        <main className="content-detail">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/buttons">
              <Buttons />
            </Route>
            <Route path="/cards">
              <div>In Process</div>
            </Route>
            <Route path="/navigation">
              <div>In Process</div>
            </Route>
            <Route path="/feedback">
              <div>In Process</div>
            </Route>
            <Route path="/carousels">
              <div>In Process</div>
            </Route>
            <Route path="/3d-items">
              <div>In Process</div>
            </Route>
          </Switch>
        </main>
      </div>
    </StylesProvider>
  );
}

export default App;
