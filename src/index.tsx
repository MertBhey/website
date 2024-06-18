/* @refresh reload */
import { Router } from "@solidjs/router";
import { render } from "solid-js/web";
import App from "./App";
import "./index.css";

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  // biome-ignore lint/style/noNonNullAssertion: it does exists.
  document.getElementById("root")!,
);
