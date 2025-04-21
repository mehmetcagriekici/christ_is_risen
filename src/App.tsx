//import
import { useState } from "react";
import BinaryRain from "./components/BinaryRain";
import TranslationPresentation from "./components/TranslationPrestation";
import { translations } from "./data/proclamations";
import { stringToBinary } from "./utils/ConvertToBinary";
import { useInterval } from "./hooks/useInterval";
import { MAX_DURATION } from "./utils/constants";

export default function App() {
  //[christ_is_risen, truly_he_is_risen] = lines[i]
  //two binary arrays
  const data = translations.map((t) => ({
    lines: t.lines,
    binary: t.lines.map((l) => stringToBinary(l)),
  }));

  //current data
  const [currentToggleIndex, setCurrentToggleIndex] = useState(0);
  const [currentTranslationIndex, setCurrentTranslationIndex] = useState(0);

  /**
   * function to create the infinite animation loop
   */
  function animate() {
    setCurrentToggleIndex((i) => (i + 1) % 2);
    if (currentToggleIndex % 2 !== 0)
      setCurrentTranslationIndex((i) => (i + 1) % (translations.length * 2));
  }

  //set the interval
  useInterval(animate, MAX_DURATION);

  return (
    <div className="h-dvh w-dvw relative bg-black">
      {/*Binary*/}
      <BinaryRain
        bits={data[currentTranslationIndex].binary}
        binaryIndex={currentToggleIndex}
      />
      {/*Translations*/}
      <TranslationPresentation
        lines={data[currentTranslationIndex].lines}
        lineIndex={currentToggleIndex}
      />
    </div>
  );
}
