import React from "react";

import Story from "../components/Story";

import Intro from "./Intro";
import ChapterOne from "./ChapterOne";
import ChapterTwo from "./ChapterTwo";
import End from "./End";

export default () => (
  <Story>
    <Intro uid="intro" />
    <ChapterOne uid="chapter-one" />
    <ChapterTwo uid="chapter-two" />
    <End uid="end" />
  </Story>
);
