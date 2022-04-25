import { snippets } from "../faker";

const grossWPM = (charCount: number, time: number): number => {
  let gross: number = charCount / 5 / time;
  return gross;
};

export const netWPM = (
  charCount: number,
  time: number,
  errors: number
): number => {
  let net: number = grossWPM(charCount, time) - errors / time;
  return net;
};

export const startTimer = (): number => {
  return Date.now();
};

export const randomSnippet = (): string => {
  let random = Math.floor(Math.random() * snippets.length);

  return snippets[random];
};

export const checkSpecialChar = (code: string, current: number): boolean => {
  return (
    code[current].charCodeAt(0) === 9 || code[current].charCodeAt(0) === 10
  );
};
