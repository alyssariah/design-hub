import React from "react";
import {
  Home,
  TouchApp,
  Feedback,
  Navigation,
  ThreeDRotation,
  ViewCarousel,
  ViewDay,
} from "@material-ui/icons";

export const drawerItems = [
  { name: "Home", url: "/design-hub", icon: <Home /> },
  { name: "Buttons", url: "/design-hub/buttons", icon: <TouchApp /> },
  { name: "Cards", url: "/design-hub/cards", icon: <ViewDay /> },
  { name: "Navigation", url: "/design-hub/navigation", icon: <Navigation /> },
  { name: "Feedback", url: "/design-hub/feedback", icon: <Feedback /> },
  { name: "Carousels", url: "/design-hub/carousels", icon: <ViewCarousel /> },
  { name: "3D Items", url: "/design-hub/3d-items", icon: <ThreeDRotation /> },
];
