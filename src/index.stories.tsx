import React from "react";
import Button, { ButtonType } from "./components/Buttons";
import Globe from "./components/Globe";

export default {
  title: "버튼",
  component: Button,
  parameters: {
    componentSubtitle: "Button 컴포넌트",
  },
};

export const defaultButton = () => {
  return <Button>default 버튼</Button>;
};

export const primaryButton = () => {
  return <Button theme={ButtonType.PRIMARY}>primary 버튼</Button>;
};
export const secondaryButton = () => {
  return <Button theme={ButtonType.SECONDARY}>secondary 버튼</Button>;
};

export const test = () => {
  return (
    <Globe
      size={300}
      animate
      offsetX={30}
      animateToX={-180}
      animateToY={-30}
      landSimplify
      landColor="rgb(173, 211, 251)"
      oceanColor="rgb(240, 248, 255)"
      overlayColor="linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff)"
    />
  );
};
