import React from "react";
import { useStateValue } from "../../store";
import LevelFour from "../LevelFour";

const LevelThree = () => {
  const [{ titleThree }] = useStateValue();
  return (
    <>
      <h3> {titleThree}</h3>
      <LevelFour />
    </>
  );
};

export default LevelThree;
