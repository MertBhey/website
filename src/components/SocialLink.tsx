import { Link } from "@solidjs/router";
import type { Component } from "solid-js";

interface SocialLinkProps {
  href: string;
  children: string;
  ref?: HTMLAnchorElement;
}

export const SocialLink: Component<SocialLinkProps> = (props) => {
  return (
    <Link
      class="text-gray-400 underline underline-offset-4 hover:text-gray-300 transition-all"
      href={props.href}
      rel="noopener noreferrer nofollow"
      target="_blank"
      ref={props.ref}
    >
      {props.children}
    </Link>
  );
};
