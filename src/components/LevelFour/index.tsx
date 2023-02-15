import React from "react";
import { useStateValue } from "../../store";

const LevelFour = () => {
  const [{ titleFour }] = useStateValue();
  return <h4>{titleFour}</h4>;
};

export default LevelFour;
