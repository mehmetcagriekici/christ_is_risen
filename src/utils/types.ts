export interface TranslationPresentationProps {
  lines: string[];
  lineIndex: number; //0.1 ["Christ is risen!", "Truly, he is risen!"]
}

export interface BinaryRainProps {
  bits: string[][];
  binaryIndex: number; //0,1 ["Christ is risen!", "Truly, he is risen!"].map(e=>e.toBinary())
}
