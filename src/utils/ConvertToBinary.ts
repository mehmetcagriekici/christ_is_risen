/**
 * Function to covnert strings into binary
 * @param str - input string that will be converted to binary
 * @returns string[], binary letters
 */

export const stringToBinary = (str: string) =>
  Array.from(new TextEncoder().encode(str)).flatMap((b) =>
    b.toString(2).padStart(8, "0").split("")
  );
