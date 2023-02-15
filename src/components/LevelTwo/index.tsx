import { useStateValue } from "../../store";
import LevelThree from "../LevelThree";

const LevelTwo = () => {
  const [{ titleTwo }] = useStateValue();
  return (
    <>
      <h2>{titleTwo}</h2>
      <LevelThree />
    </>
  );
};

export default LevelTwo;
