import { Link, Meta, MetaProvider, Title } from "@solidjs/meta";
import type { Component, JSX } from "solid-js";
import { langHandler } from "../compasables/i18n";

interface MetadataProps {
  children: JSX.Element
}

export const Metadata: Component<MetadataProps> = props => {
  const lang = langHandler(navigator.language);

  return (
    <MetaProvider>
      <Title>{lang.pageTitle}</Title>

      <Link rel="sitemap" type="application/xml" title="sitemap" href="/sitemap.xml" />
      <Link rel="canonical" href="https://mert.cat/" />

      <Meta name="robots" content="index, follow" />

      <Meta name="og:type" content="website" />
      <Meta name="og:title" content="Mert Karaduman" />
      <Meta name="og:description" content={lang.pageTitle} />
      <Meta name="og:url" content="https://mert.cat/" />
      <Meta name="og:image" content="https://mert.cat/avatar.webp" />

      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Mert Karaduman" />
      <Meta name="twitter:description" content={lang.pageTitle} />
      <Meta name="twitter:site" content="https://mert.cat/" />
      <Meta name="twitter:image" content="https://mert.cat/avatar.webp" />

      <Meta name="description" content={lang.pageTitle} />
      {props.children}
    </MetaProvider>
  )
}
