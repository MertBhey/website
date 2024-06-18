import type { Component } from "solid-js";
import { langHandler } from "../compasables/i18n";

export const NotFound: Component = () => {
  const lang = langHandler(navigator.language);

  return <h1>{lang.page404}</h1>;
};
