import { Fragment } from "react";
import { createRoot } from "react-dom/client";
import { App } from "@App";
import "./styles/main.css";
import CssBaseline from "@mui/material/CssBaseline";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <Fragment>
    <CssBaseline />
    <App />
  </Fragment>
);
