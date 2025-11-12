import type { Site, Page, Links, Socials, Blog } from "@types";

// Global
export const SITE: Site = {
  TITLE: "Ahmad Rabiu",
  DESCRIPTION:
    "Welcome to my portfolio, this resource contains details you need to know about me as a Developer and Engineer.",
  AUTHOR: "Ahmad Rabiu",
};

export const NOTFOUND = {
  TITLE: "Dead End",
  DESCRIPTION: "Don't visit! - It's a dangerous place to be.",
  QUESTION: "How did you get here?",
  INFO: ":/ This page doesn't seem to exist",
  INSTRUCTION: "Go home",
};

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
};

// Blog Page
export const BLOG: Blog = {
  TITLE: "Ahmad's Notes",
  SHORT_TITLE: "Notes",
  DESCRIPTION: "Writing on topics that interests me.",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
};

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Work",
    HREF: "/work",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
];

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "therabiuahmad@gmail.com",
    HREF: "mailto:therabiuahmad@gmail.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "dd3vahmad",
    HREF: "https://github.com/dd3vahmad",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Ahmad Rabiu",
    HREF: "https://www.linkedin.com/in/rabiuahmad",
  },
  {
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "Ahmad",
    HREF: "https://x.com/dd3vahmad",
  },
];
