import { useRoutes } from "@solidjs/router";
import type { Component } from "solid-js";
import { langHandler } from "./compasables/i18n";
import { SocialLink } from "./components/SocialLink";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Metadata } from "./components/Metadata";

const App: Component = () => {
  const lang = langHandler(navigator.language);
  const Route = useRoutes([
    { path: "/", component: Home },
    { path: "/*", component: NotFound },
  ]);

  return (
    <Metadata>
      <div class="w-screen h-screen bg-[#131516] text-gray-300 flex justify-center items-center overscroll-none">
        <Route />
        <div class="absolute top-auto bottom-5 left-auto right-auto sm:right-5 break-words">
          <SocialLink href="https://github.com/MertBhey/website">{lang.oss}</SocialLink>
        </div>
      </div>
    </Metadata>
  );
};

export default App;
