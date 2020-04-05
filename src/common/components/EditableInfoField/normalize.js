export const normalizeField = (string = '') =>
  string.replace(/\s+/g, ' ');

export const normalizeMultilineField = (string = '') =>
  string
    .replace(/[ \u00a0]+/g, ' ')
    .replace(/\n{2,}/g, '\n\n');
