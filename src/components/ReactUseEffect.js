import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let time = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return () => clearTimeout(time)
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

export default Timer;