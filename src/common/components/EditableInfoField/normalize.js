export const normalizeField = (string = '') =>
  string.replace(/\s+/g, ' ');

export const normalizeMultilineField = (string = '') =>
  string
    .replace(/[ \u00a0]+/g, ' ')
    .replace(/\n{2,}/g, '\n\n');

export const textToHtml = (text = '') =>
  text.replace(/\n/g, '<br>');
