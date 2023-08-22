import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

/** @type {import("nextra-theme-docs/.").DocsThemeConfig} */
export default {
  logo: (
    <span className="flex flex-row gap-4">
      <img className="align-baseline" width="21" height="21" src="/icon.svg" />
      <span className="hide-logo-text">moddedmc.wiki</span>
    </span>
  ),
  project: {
    link: "https://github.com/moddedmc-wiki/moddedmc-wiki",
  },
  chat: {
    link: "https://discord.gg/5tmestARuU",
  },
  docsRepositoryBase:
    "https://github.com/moddedmc-wiki/moddedmc-wiki/blob/main/",
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/png" href="/icon_full.png" />
    </>
  ),
  search: {
    component: <></>,
  },
  useNextSeoProps: () => {
    const { route } = useRouter();
    const { frontMatter } = useConfig();

    /** @type {import("next-seo").NextSeoProps} */
    let seoProps = {};

    if (route !== "/" || !frontMatter.title) {
      seoProps.title = `${frontMatter.title} - moddedmc.wiki`;
    } else {
      seoProps.title = "moddedmc.wiki";
    }

    seoProps.description =
      frontMatter.description ||
      "An open source collection of resources relating to modding Minecraft: Java Edition";

    seoProps.openGraph = {
      images: [
        {
          type: "image/png",
          alt: "Cover Image",
          url: `/icon_full.png`,
        },
      ],
    };

    seoProps.twitter = {
      cardType: "app",
    };

    return seoProps;
  },
  darkMode: false,
  nextThemes: {
    forcedTheme: "dark",
  },
  primaryHue: {
    dark: 142,
  },
  sidebar: {
    toggleButton: true,
  },
  toc: {
    float: true,
    extraContent: () => {
      return <></>;
    },
  },
  footer: {
    text: (
      <span>
        Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International{" "}
        {new Date().getFullYear()} ©{" "}
        <a href="https://mineblock11.dev/" target="_blank">
          Calum H. (mineblock11)
        </a>
        <br />
        Not affliated with Mojang Studios.
      </span>
    ),
  },
};
