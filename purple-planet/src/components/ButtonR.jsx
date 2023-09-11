import { useState } from "react";

const ButtonR = () => {
  const [num, setNum] = useState(0);
  return (
    <button onClick={() => setNum((prev) => prev + 1)}>Click- {num}</button>
  );
};
export default ButtonR;
