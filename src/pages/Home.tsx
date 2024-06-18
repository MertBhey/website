import { onCleanup, type Component } from "solid-js";
import { langHandler } from "../compasables/i18n";
import { SocialLink } from "../components/SocialLink";

export const Home: Component = () => {
  const lang = langHandler(navigator.language);
  let twitterRef!: HTMLAnchorElement;

  document.onkeydown = (e) => {
    if (!e.shiftKey) {
      return;
    }

    twitterRef.innerHTML = "Twitter";
  };

  document.onkeyup = (e) => {
    if (e.shiftKey) {
      return;
    }

    twitterRef.innerHTML = "X";
  };

  onCleanup(() => {
    document.onkeydown = null;
    document.onkeyup = null;
  });

  return (
    <main class="flex flex-col gap-y-6 md:flex-row md:gap-x-12">
      <div class="w-60 h-60">
        <img
          class="w-full h-full rounded-xl"
          src="/avatar.webp"
          alt="Avatar"
          title="Avatar Image"
        />
      </div>
      <div class="flex flex-col gap-y-8 justify-center">
        <div class="flex flex-col gap-y-1">
          <h1 class="text-3xl">Mert Karaduman</h1>
          <h3 class="text-xl text-orange-500 ">{lang.title}</h3>
        </div>

        <div class="flex flex-row gap-x-3 text-gray-400">
          <SocialLink href="https://github.com/MertBhey">Github</SocialLink>
          <SocialLink href="https://linkedin.com/in/krdmnmert">Linkedin</SocialLink>
          <SocialLink href="https://x.com/MertBhey" ref={twitterRef}>X</SocialLink>
        </div>
      </div>
    </main>
  );
};
