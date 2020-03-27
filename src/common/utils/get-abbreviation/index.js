const DEFAULT_MAX_LENGTH = 3;

const getAbbreviation = (string = '', maxLength = DEFAULT_MAX_LENGTH) =>
  string
    .toUpperCase()
    .trim()
    .replace(/[^A-Z\s]/g, '')
    .replace(/\s{2,}/g, ' ')
    .split(' ')
    .slice(0, maxLength)
    .map(word => word[0])
    .join('');

export default getAbbreviation;
