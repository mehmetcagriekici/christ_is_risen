//Disclaimer: https://overreacted.io/making-setinterval-declarative-with-react-hooks/

//imports
import { useEffect, useRef } from "react";

export function useInterval(callback: () => void, delay: number) {
  //save callback between renders
  const savedCallback = useRef(() => {});

  useEffect(() => {
    //remember the latest callback
    savedCallback.current = callback;
  }, [callback]);

  //set up the interval
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      const id = setInterval(tick, delay * 1000 * 2);
      return () => clearInterval(id);
    }
  }, [delay]);
}
