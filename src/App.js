import { CssBaseline, makeStyles, StylesProvider } from "@material-ui/core";
import Buttons from "components/Buttons/Buttons";
import Home from "components/Home/Home";
import MiniDrawer from "components/Navigation/MiniDrawer/MiniDrawer";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
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
            <Route exact path="/design-hub">
              <Home />
            </Route>
            <Route path="/design-hub/buttons">
              <Buttons />
            </Route>
            <Route path="/design-hub/cards">
              <div>In Process</div>
            </Route>
            <Route path="/design-hub/navigation">
              <div>In Process</div>
            </Route>
            <Route path="/design-hub/feedback">
              <div>In Process</div>
            </Route>
            <Route path="/design-hub/carousels">
              <div>In Process</div>
            </Route>
            <Route path="/design-hub/3d-items">
              <div>In Process</div>
            </Route>
            <Redirect from="*" to="/design-hub" />
          </Switch>
        </main>
      </div>
    </StylesProvider>
  );
}

export default App;
