import { useState } from "react";
import { Button } from "react-bootstrap";

const ButtonR = () => {
  const [num, setNum] = useState(0);
  return (
    <Button variant="primary" onClick={() => setNum((prev) => prev + 1)}>
      Click- {num}
    </Button>
  );
};
export default ButtonR;
