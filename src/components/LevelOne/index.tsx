import React from "react";
import { useStateValue } from "../../store";
import LevelTwo from "../LevelTwo";

const LevelOne = () => {
  const [{ titleOne }] = useStateValue();
  return (
    <>
      <h1>{titleOne}</h1>
      <LevelTwo />
    </>
  );
};

export default LevelOne;
