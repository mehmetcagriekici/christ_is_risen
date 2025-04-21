//import
import { useState } from "react";
import BinaryRain from "./components/BinaryRain";
import TranslationPresentation from "./components/TranslationPrestation";
import { translations } from "./data/proclamations";
import { stringToBinary } from "./utils/ConvertToBinary";

export default function App() {
  //[christ_is_risen, truly_he_is_risen] = lines[i]
  //two binary arrays
  const data = translations.map((t) => ({
    lines: t.lines,
    binary: t.lines.map((l) => stringToBinary(l)),
  }));

  //current data
  const [currentBinary, setCurrentBinary] = useState(data[0].binary);
  const [currentLines, setCurrentLines] = useState(data[0].lines);

  /**
   * function to update the currentBinary
   */

  return (
    <div className="h-dvh w-dvw relative bg-black">
      {/*Binary*/}
      <BinaryRain bits={currentBinary} binaryIndex={0} />
      {/*Translations*/}
      <TranslationPresentation lines={currentLines} lineIndex={0} />
    </div>
  );
}
