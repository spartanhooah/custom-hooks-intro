import useCounter from "../hooks/use-counter";

import Card from "./Card";

const ForwardCounter = () => {
  // useCounter's state/effect/other rom the built-in hook
  // will be tied to this component
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
