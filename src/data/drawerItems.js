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
  { name: "Home", url: "/", icon: <Home /> },
  { name: "Buttons", url: "/buttons", icon: <TouchApp /> },
  { name: "Cards", url: "/cards", icon: <ViewDay /> },
  { name: "Navigation", url: "/navigation", icon: <Navigation /> },
  { name: "Feedback", url: "/feedback", icon: <Feedback /> },
  { name: "Carousels", url: "/carousels", icon: <ViewCarousel /> },
  { name: "3D Items", url: "/3d-items", icon: <ThreeDRotation /> },
];
