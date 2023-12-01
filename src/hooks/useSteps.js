import { useState } from "react";

export default function useSteps() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    window.scroll(0, 0);
    setCurrent(current + 1);
  };

  const prev = () => {
    window.scroll(0, 0);
    setCurrent(current - 1);
  };

  return { next, prev, current };
}
